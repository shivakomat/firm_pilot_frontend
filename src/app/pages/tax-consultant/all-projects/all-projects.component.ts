import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApiService, Project, Client } from '../../../core/services/api.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-all-projects',
  templateUrl: './all-projects.component.html',
  styleUrls: ['./all-projects.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ModalModule]
})
export class AllProjectsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  isLoading = false;
  
  // Filters
  searchTerm = '';
  selectedStatus = '';
  selectedProjectType = '';

  // Edit Client Modal
  editClientForm!: UntypedFormGroup;
  editSubmitted = false;
  editLoading = false;
  selectedClient: Client | null = null;

  @ViewChild('editClientModal', { static: false }) editClientModal?: ModalDirective;

  projectTypes = [
    { value: 'tax_return', label: 'Tax Return' },
    { value: 'quarterly_filing', label: 'Quarterly Filing' },
    { value: 'business_setup', label: 'Business Setup' },
    { value: 'audit', label: 'Audit' },
    { value: 'consultation', label: 'Consultation' },
    { value: 'other', label: 'Other' }
  ];

  projectStatuses = [
    { value: 'active', label: 'Active', class: 'badge bg-success' },
    { value: 'in_progress', label: 'In Progress', class: 'badge bg-primary' },
    { value: 'completed', label: 'Completed', class: 'badge bg-info' },
    { value: 'on_hold', label: 'On Hold', class: 'badge bg-warning' },
    { value: 'cancelled', label: 'Cancelled', class: 'badge bg-danger' }
  ];

  constructor(
    private router: Router,
    private apiService: ApiService,
    private formBuilder: UntypedFormBuilder
  ) {}

  ngOnInit(): void {
    this.initializeEditForm();
    this.loadAllProjects();
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadAllProjects(): void {
    this.isLoading = true;
    this.apiService.getAccountantProjects()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.projects) {
            this.projects = response.projects;
            this.filteredProjects = [...this.projects];
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading projects:', error);
          this.isLoading = false;
          Swal.fire({
            title: 'Error',
            text: 'Failed to load projects.',
            icon: 'error'
          });
        }
      });
  }

  applyFilters(): void {
    this.filteredProjects = this.projects.filter(project => {
      const matchesSearch = !this.searchTerm || 
        project.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        project.description?.toLowerCase().includes(this.searchTerm.toLowerCase());
      
      const matchesStatus = !this.selectedStatus || project.status === this.selectedStatus;
      const matchesType = !this.selectedProjectType || project.projectType === this.selectedProjectType;
      
      return matchesSearch && matchesStatus && matchesType;
    });
  }

  onSearchChange(): void {
    this.applyFilters();
  }

  onStatusChange(): void {
    this.applyFilters();
  }

  onTypeChange(): void {
    this.applyFilters();
  }

  clearFilters(): void {
    this.searchTerm = '';
    this.selectedStatus = '';
    this.selectedProjectType = '';
    this.filteredProjects = [...this.projects];
  }

  viewProject(project: Project): void {
    this.router.navigate(['/tax-consultant/project-detail', project.id]);
  }

  viewClient(project: Project): void {
    this.router.navigate(['/clients/detail', project.clientId]);
  }

  // Open edit client modal
  openEditClientModal(project: Project): void {
    if (!project.clientId) return;
    
    // Fetch client details by ID
    this.apiService.getClients()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.clients) {
            const client = response.clients.find(c => c.id === project.clientId);
            if (client) {
              this.selectedClient = client;
              this.populateEditForm(client);
              this.editClientModal?.show();
            } else {
              Swal.fire({
                title: 'Error',
                text: 'Client not found.',
                icon: 'error'
              });
            }
          }
        },
        error: (error) => {
          console.error('Error fetching client:', error);
          Swal.fire({
            title: 'Error',
            text: 'Failed to load client details.',
            icon: 'error'
          });
        }
      });
  }

  populateEditForm(client: Client): void {
    this.editClientForm.patchValue({
      firstName: client.firstName || '',
      lastName: client.lastName || '',
      email: client.email || '',
      phoneNumber: this.formatPhoneForDisplay(client.phone || ''),
      entityType: client.entityType || '',
      status: client.status || ''
    });
    this.editSubmitted = false;
  }

  // Update existing client
  updateClient(): void {
    this.editSubmitted = true;

    if (this.editClientForm.invalid || !this.selectedClient) {
      return;
    }

    this.editLoading = true;
    const formData = this.editClientForm.value;
    
    // Clean phone number (remove formatting)
    const cleanPhone = formData.phoneNumber ? formData.phoneNumber.replace(/\D/g, '') : '';

    const updateData = {
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email ? formData.email.trim() : null,
      phone: cleanPhone || null,
      entityType: formData.entityType || null,
      status: formData.status || null
    };

    this.apiService.updateClient(this.selectedClient.id, updateData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.editLoading = false;
          if (response.success) {
            Swal.fire({
              title: 'Success!',
              text: 'Client updated successfully.',
              icon: 'success',
              confirmButtonText: 'OK'
            });

            this.editClientModal?.hide();
            this.loadAllProjects(); // Refresh projects to get updated client names
            this.editClientForm.reset();
            this.selectedClient = null;
          } else {
            Swal.fire({
              title: 'Error',
              text: response.message || 'Failed to update client.',
              icon: 'error'
            });
          }
        },
        error: (error) => {
          this.editLoading = false;
          console.error('Error updating client:', error);
          Swal.fire({
            title: 'Error',
            text: 'Failed to update client. Please try again.',
            icon: 'error'
          });
        }
      });
  }

  // Format phone number for display
  formatPhoneForDisplay(phone: string): string {
    if (!phone) return '';
    const cleaned = phone.replace(/\D/g, '');
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phone;
  }

  // Convenience getter for form fields
  get ef() { return this.editClientForm.controls; }

  getTypeLabel(type: string): string {
    const typeObj = this.projectTypes.find(t => t.value === type);
    return typeObj ? typeObj.label : type;
  }

  getStatusClass(status: string): string {
    const statusObj = this.projectStatuses.find(s => s.value === status);
    return statusObj ? statusObj.class : 'badge bg-secondary';
  }

  getStatusLabel(status: string): string {
    const statusObj = this.projectStatuses.find(s => s.value === status);
    return statusObj ? statusObj.label : status;
  }

  formatDate(dateString: string): string {
    if (!dateString) return 'Not set';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  isOverdue(dueDate: string): boolean {
    if (!dueDate) return false;
    const due = new Date(dueDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return due < today;
  }

  getProjectCount(): number {
    return this.filteredProjects.length;
  }

  getActiveProjectsCount(): number {
    return this.filteredProjects.filter(p => p.status === 'active' || p.status === 'in_progress').length;
  }

  getOverdueProjectsCount(): number {
    return this.filteredProjects.filter(p => this.isOverdue(p.dueDate || '')).length;
  }

  getCompletedProjectsCount(): number {
    return this.filteredProjects.filter(p => p.status === 'completed').length;
  }
}
