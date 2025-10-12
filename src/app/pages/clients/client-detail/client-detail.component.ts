import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil, forkJoin } from 'rxjs';
import { ApiService, Client, Project, ClientDetailsResponse, ClientDetails, IntakeFormWithProject, ClientInvitation, ClientDocument, DocumentRequirement, ClientNote, CreateNoteRequest, UpdateNoteRequest } from '../../../core/services/api.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModalModule]
})
export class ClientDetailComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  clientId!: number;
  client: Client | null = null;
  projects: Project[] = [];
  ongoingProjects: Project[] = [];
  intakeForms: IntakeFormWithProject[] = [];
  documents: ClientDocument[] = [];
  documentRequirements: DocumentRequirement[] = [];
  invitation: ClientInvitation | null = null;
  
  isLoading = false;
  activeTab = 'overview';

  // Edit Client Modal
  editClientForm!: UntypedFormGroup;
  editSubmitted = false;
  editLoading = false;

  @ViewChild('editClientModal', { static: false }) editClientModal?: ModalDirective;
  @ViewChild('notesEditor', { static: false }) notesEditor?: ElementRef;
  @ViewChild('newNotesEditor', { static: false }) newNotesEditor?: ElementRef;

  // Client Notes Properties
  allNotes: ClientNote[] = [];
  isLoadingNotes: boolean = false;
  editingNoteId: number | null = null;
  editingNote: Partial<ClientNote> = {};
  isSavingNote: boolean = false;
  
  // New Note Properties
  isAddingNewNote: boolean = false;
  newNote: Partial<CreateNoteRequest> = {};
  showEmptyNoteWarning: boolean = false;

  // Project status mapping
  projectStatuses = [
    { value: 'active', label: 'Active', class: 'badge bg-success' },
    { value: 'in_progress', label: 'In Progress', class: 'badge bg-primary' },
    { value: 'completed', label: 'Completed', class: 'badge bg-info' },
    { value: 'on_hold', label: 'On Hold', class: 'badge bg-warning' },
    { value: 'cancelled', label: 'Cancelled', class: 'badge bg-danger' }
  ];

  projectTypes = [
    { value: 'tax_return', label: 'Tax Return' },
    { value: 'quarterly_filing', label: 'Quarterly Filing' },
    { value: 'business_setup', label: 'Business Setup' },
    { value: 'audit', label: 'Audit' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'other', label: 'Other' }
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeEditForm();
    this.route.params.subscribe(params => {
      this.clientId = +params['id'];
      if (this.clientId) {
        this.loadClientDetails();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initializeEditForm(): void {
    this.editClientForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email]],
      phoneNumber: [''],
      entityType: [''],
      status: ['']
    });
  }

  loadClientDetails(): void {
    this.isLoading = true;
    
    // Use the new comprehensive client details endpoint
    this.apiService.getClientDetails(this.clientId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.clientDetails) {
            const details = response.clientDetails;
            
            // Set all the data from the comprehensive response
            this.client = details.client;
            this.projects = details.projects;
            this.ongoingProjects = details.ongoingProjects;
            this.intakeForms = details.intakeForms;
            this.documents = details.documents;
            this.documentRequirements = details.documentRequirements;
            this.invitation = details.invitation || null;
            
            // Load meeting notes
            this.loadNotes();
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading client details:', error);
          this.isLoading = false;
          Swal.fire({
            title: 'Error',
            text: 'Failed to load client details.',
            icon: 'error'
          });
        }
      });
  }

  // Tab management
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  // Navigation methods
  goBack(): void {
    this.router.navigate(['/clients/list']);
  }

  viewProject(project: Project): void {
    this.router.navigate(['/tax-consultant/project-detail', project.id]);
  }

  viewAllProjects(): void {
    this.router.navigate(['/tax-consultant/client-projects', this.clientId]);
  }

  openIntakeForm(form: IntakeFormWithProject): void {
    // Navigate to intake form (will be implemented when backend is ready)
    console.log('Opening intake form:', form);
    Swal.fire({
      title: 'Coming Soon',
      text: 'Intake form integration will be available once the backend API is ready.',
      icon: 'info'
    });
  }

  downloadDocument(document: ClientDocument): void {
    console.log('Downloading document:', document);
    
    // Show loading indicator
    Swal.fire({
      title: 'Downloading...',
      text: 'Please wait while we prepare your document.',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    this.apiService.downloadDocument(document.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (blob: Blob) => {
          // Create a blob URL and trigger download
          const url = window.URL.createObjectURL(blob);
          const link = window.document.createElement('a');
          link.href = url;
          link.download = document.filename;
          
          // Append to body, click, and remove
          window.document.body.appendChild(link);
          link.click();
          window.document.body.removeChild(link);
          
          // Clean up the blob URL
          window.URL.revokeObjectURL(url);
          
          // Show success message
          Swal.fire({
            title: 'Download Complete!',
            text: `${document.filename} has been downloaded successfully.`,
            icon: 'success',
            timer: 3000,
            showConfirmButton: false
          });
        },
        error: (error) => {
          console.error('Error downloading document:', error);
          
          let errorMessage = 'Failed to download document. Please try again.';
          
          if (error.status === 404) {
            errorMessage = 'Document not found. It may have been moved or deleted.';
          } else if (error.status === 403) {
            errorMessage = 'You do not have permission to download this document.';
          } else if (error.status === 401) {
            errorMessage = 'Your session has expired. Please log in again.';
          }
          
          Swal.fire({
            title: 'Download Failed',
            text: errorMessage,
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      });
  }

  sendEmail(): void {
    if (!this.client?.email) {
      Swal.fire({
        title: 'No Email Address',
        text: 'This client does not have an email address on file.',
        icon: 'warning'
      });
      return;
    }

    Swal.fire({
      title: 'Send Email',
      text: `Send an email to ${this.client.firstName} ${this.client.lastName} (${this.client.email})?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#556ee6',
      cancelButtonColor: '#74788d',
      confirmButtonText: 'Send Email',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // Open default email client with pre-filled information
        const subject = encodeURIComponent(`Tax Services - ${this.client!.firstName} ${this.client!.lastName}`);
        const body = encodeURIComponent(`Dear ${this.client!.firstName},\n\nI hope this email finds you well.\n\nBest regards,\nYour Tax Consultant`);
        const mailtoLink = `mailto:${this.client!.email}?subject=${subject}&body=${body}`;
        
        window.open(mailtoLink, '_blank');
        
        Swal.fire({
          title: 'Email Client Opened',
          text: 'Your default email application should now be open with a pre-filled message.',
          icon: 'success',
          timer: 3000,
          showConfirmButton: false
        });
      }
    });
  }

  resendInvitation(): void {
    if (!this.client) return;
    
    const inviteData = {
      message: 'Client portal invitation from your tax consultant.'
    };
    
    this.apiService.inviteClient(this.client.id, inviteData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            Swal.fire({
              title: 'Success!',
              text: 'Invitation sent successfully.',
              icon: 'success'
            });
            this.loadClientDetails(); // Refresh data
          }
        },
        error: (error) => {
          console.error('Error sending invitation:', error);
          Swal.fire({
            title: 'Error',
            text: 'Failed to send invitation.',
            icon: 'error'
          });
        }
      });
  }

  // Edit client methods
  openEditModal(): void {
    if (!this.client) return;
    
    this.editClientForm.patchValue({
      firstName: this.client.firstName || '',
      lastName: this.client.lastName || '',
      email: this.client.email || '',
      phoneNumber: this.formatPhoneForDisplay(this.client.phone || ''),
      entityType: this.client.entityType || '',
      status: this.client.status || ''
    });
    this.editSubmitted = false;
    this.editClientModal?.show();
  }

  updateClient(): void {
    this.editSubmitted = true;

    if (this.editClientForm.invalid || !this.client) {
      return;
    }

    this.editLoading = true;
    const formData = this.editClientForm.value;
    
    const cleanPhone = formData.phoneNumber ? formData.phoneNumber.replace(/\D/g, '') : '';

    const updateData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email ? formData.email.trim() : null,
      phone: cleanPhone || null,
      entityType: formData.entityType || null,
      status: formData.status || null
    };

    this.apiService.updateClient(this.client.id, updateData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.editLoading = false;
          if (response.success) {
            Swal.fire({
              title: 'Success!',
              text: 'Client updated successfully.',
              icon: 'success'
            });

            this.editClientModal?.hide();
            this.loadClientDetails(); // Refresh client data
            this.editClientForm.reset();
          }
        },
        error: (error) => {
          this.editLoading = false;
          console.error('Error updating client:', error);
          Swal.fire({
            title: 'Error',
            text: 'Failed to update client.',
            icon: 'error'
          });
        }
      });
  }

  // Utility methods
  formatPhoneForDisplay(phone: string): string {
    if (!phone) return '';
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phone;
  }

  formatDate(dateString: string): string {
    if (!dateString) return 'Not set';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  getProjectStatusClass(status: string): string {
    const statusObj = this.projectStatuses.find(s => s.value === status);
    return statusObj ? statusObj.class : 'badge bg-secondary';
  }

  getProjectStatusLabel(status: string): string {
    const statusObj = this.projectStatuses.find(s => s.value === status);
    return statusObj ? statusObj.label : status;
  }

  getProjectTypeLabel(type: string): string {
    const typeObj = this.projectTypes.find(t => t.value === type);
    return typeObj ? typeObj.label : type;
  }

  getInvitationStatusClass(status: string): string {
    switch (status) {
      case 'accepted': return 'badge bg-success';
      case 'sent': return 'badge bg-primary';
      case 'pending': return 'badge bg-warning';
      case 'expired': return 'badge bg-danger';
      default: return 'badge bg-secondary';
    }
  }

  getIntakeFormStatusClass(status: string): string {
    switch (status) {
      case 'completed': return 'badge bg-success';
      case 'submitted': return 'badge bg-info';
      case 'draft': return 'badge bg-warning';
      default: return 'badge bg-secondary';
    }
  }

  get ef() { return this.editClientForm.controls; }

  // Stats for overview
  getActiveProjectsCount(): number {
    return this.projects.filter(p => p.status === 'active' || p.status === 'in_progress').length;
  }

  getCompletedProjectsCount(): number {
    return this.projects.filter(p => p.status === 'completed').length;
  }

  getPendingIntakeFormsCount(): number {
    return this.intakeForms.filter(f => f.response?.status === 'draft' || !f.response).length;
  }

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  // Client Notes Methods
  loadNotes(): void {
    if (!this.clientId) return;
    
    this.isLoadingNotes = true;
    
    this.apiService.getClientNotes(this.clientId).subscribe({
      next: (response) => {
        if (response.success) {
          this.allNotes = response.notes.sort((a, b) => 
            new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
          );
        }
        this.isLoadingNotes = false;
      },
      error: (error) => {
        console.error('❌ Error loading notes:', error);
        this.isLoadingNotes = false;
      }
    });
  }

  startAddingNote(): void {
    this.isAddingNewNote = true;
    this.newNote = {
      title: '',
      content: '',
      noteType: 'GENERAL'
    };
    this.showEmptyNoteWarning = false;
    
    // Focus the title input after the view updates
    setTimeout(() => {
      const titleInput = document.querySelector('#newNoteTitle') as HTMLInputElement;
      if (titleInput) {
        titleInput.focus();
      }
    }, 100);
  }

  saveNewNote(): void {
    // Validate content
    if (!this.newNote.content?.trim()) {
      this.showEmptyNoteWarning = true;
      return;
    }

    // Validate title
    if (!this.newNote.title?.trim()) {
      this.newNote.title = 'Untitled Note';
    }

    this.isSavingNote = true;
    this.showEmptyNoteWarning = false;

    const noteData: CreateNoteRequest = {
      title: this.newNote.title!,
      content: this.newNote.content!,
      noteType: this.newNote.noteType || 'GENERAL'
    };

    this.apiService.createClientNote(this.clientId, noteData).subscribe({
      next: (response) => {
        if (response.success && response.note) {
          this.allNotes.unshift(response.note);
          this.cancelNewNote();
          
          Swal.fire({
            title: 'Note Created!',
            text: 'Your note has been saved successfully.',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
          });
        }
        this.isSavingNote = false;
      },
      error: (error) => {
        console.error('❌ Error creating note:', error);
        this.isSavingNote = false;
        Swal.fire({
          title: 'Error',
          text: 'Failed to create note. Please try again.',
          icon: 'error'
        });
      }
    });
  }

  cancelNewNote(): void {
    this.isAddingNewNote = false;
    this.newNote = {};
    this.showEmptyNoteWarning = false;
  }

  onNewNoteChange(event: Event): void {
    const target = event.target as HTMLElement;
    this.newNote.content = target.innerHTML;
    
    // Hide warning if user starts typing
    if (this.showEmptyNoteWarning && this.newNote.content?.trim()) {
      this.showEmptyNoteWarning = false;
    }
  }

  editNote(note: ClientNote): void {
    this.editingNoteId = note.id;
    this.editingNote = {
      title: note.title,
      content: note.content,
      noteType: note.noteType
    };
    
    setTimeout(() => {
      if (this.notesEditor?.nativeElement) {
        this.notesEditor.nativeElement.focus();
      }
    }, 100);
  }

  saveNote(noteId: number): void {
    if (!this.editingNote.title?.trim() || !this.editingNote.content?.trim()) {
      Swal.fire({
        title: 'Validation Error',
        text: 'Please provide both title and content for the note.',
        icon: 'warning'
      });
      return;
    }

    this.isSavingNote = true;
    
    const noteData: UpdateNoteRequest = {
      title: this.editingNote.title!,
      content: this.editingNote.content!,
      noteType: this.editingNote.noteType!
    };

    this.apiService.updateNote(noteId, noteData).subscribe({
      next: (response) => {
        if (response.success && response.note) {
          // Update the note in the list
          const index = this.allNotes.findIndex(n => n.id === noteId);
          if (index > -1) {
            this.allNotes[index] = response.note;
          }
          
          this.cancelEdit();
          
          Swal.fire({
            title: 'Note Saved!',
            text: 'Note has been updated successfully.',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
          });
        }
        this.isSavingNote = false;
      },
      error: (error) => {
        console.error('❌ Error saving note:', error);
        this.isSavingNote = false;
        Swal.fire({
          title: 'Error',
          text: 'Failed to save note. Please try again.',
          icon: 'error'
        });
      }
    });
  }

  cancelEdit(): void {
    this.editingNoteId = null;
    this.editingNote = {};
  }

  deleteNote(note: ClientNote): void {
    Swal.fire({
      title: 'Delete Note?',
      text: `Are you sure you want to delete "${note.title}"? This action cannot be undone.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiService.deleteNote(note.id).subscribe({
          next: (response) => {
            if (response.success) {
              this.allNotes = this.allNotes.filter(n => n.id !== note.id);
              
              Swal.fire({
                title: 'Deleted!',
                text: 'Note has been deleted.',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
              });
            }
          },
          error: (error) => {
            console.error('❌ Error deleting note:', error);
            Swal.fire({
              title: 'Error',
              text: 'Failed to delete note. Please try again.',
              icon: 'error'
            });
          }
        });
      }
    });
  }

  trackByNoteId(index: number, note: ClientNote): number {
    return note.id;
  }

  getNoteTypeClass(noteType: string): string {
    switch (noteType) {
      case 'MEETING': return 'bg-primary';
      case 'PHONE_CALL': return 'bg-success';
      case 'EMAIL': return 'bg-info';
      case 'CONSULTATION': return 'bg-warning';
      case 'FOLLOW_UP': return 'bg-secondary';
      case 'GENERAL': return 'bg-light text-dark';
      default: return 'bg-light text-dark';
    }
  }

  getNoteTypeLabel(noteType: string): string {
    switch (noteType) {
      case 'MEETING': return 'Meeting';
      case 'PHONE_CALL': return 'Phone Call';
      case 'EMAIL': return 'Email';
      case 'CONSULTATION': return 'Consultation';
      case 'FOLLOW_UP': return 'Follow Up';
      case 'GENERAL': return 'General';
      default: return noteType;
    }
  }

  onNotesChange(event: Event): void {
    const target = event.target as HTMLElement;
    this.editingNote.content = target.innerHTML;
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
    const text = event.clipboardData?.getData('text/plain') || '';
    document.execCommand('insertText', false, text);
  }

  formatText(command: string): void {
    document.execCommand(command, false);
    if (this.notesEditor?.nativeElement) {
      this.notesEditor.nativeElement.focus();
    }
  }

  insertDateTime(): void {
    const now = new Date();
    const dateTime = now.toLocaleString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    const formattedDateTime = `<br><strong>📅 ${dateTime}</strong><br>`;
    document.execCommand('insertHTML', false, formattedDateTime);
    
    if (this.notesEditor?.nativeElement) {
      this.notesEditor.nativeElement.focus();
    }
  }


  formatNotesForDisplay(notes: string): string {
    if (!notes) return '';
    
    // Basic HTML sanitization - in production, use a proper sanitization library
    return notes
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '')
      .replace(/javascript:/gi, '');
  }
}
