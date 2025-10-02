import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ApiService, ClientDocument, Client, Project, AllDocumentsResponse } from '../../../core/services/api.service';
import Swal from 'sweetalert2';

interface DocumentWithDetails extends ClientDocument {
  clientName: string;
  clientEmail: string;
  projectName?: string;
}

@Component({
  selector: 'app-client-documents',
  templateUrl: './client-documents.component.html',
  styleUrls: ['./client-documents.component.scss']
})
export class ClientDocumentsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  documents: DocumentWithDetails[] = [];
  filteredDocuments: DocumentWithDetails[] = [];
  clients: Client[] = [];
  projects: Project[] = [];
  
  // Filters
  selectedClient: string = 'all';
  selectedProject: string = 'all';
  selectedTag: string = 'all';
  selectedRequired: string = 'all';
  searchTerm: string = '';
  
  // Loading state
  isLoading = false;
  
  // Statistics
  stats = {
    total: 0,
    required: 0,
    optional: 0,
    byTag: new Map<string, number>()
  };

  // Available tags for filtering
  availableTags: string[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadDocuments();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadDocuments(): void {
    this.isLoading = true;
    
    // Load documents and clients/projects in parallel
    const documents$ = this.apiService.getAllDocuments();
    const clients$ = this.apiService.getClients();
    
    // Combine both API calls
    documents$.pipe(
      takeUntil(this.destroy$)
    ).subscribe({
      next: (documentsResponse) => {
        if (documentsResponse.success) {
          // Load clients to get names and emails
          clients$.pipe(takeUntil(this.destroy$)).subscribe({
            next: (clientsResponse) => {
              if (clientsResponse.success) {
                this.clients = clientsResponse.clients;
                
                // Transform documents to include client names
                this.documents = documentsResponse.documents.map(doc => ({
                  ...doc,
                  clientName: this.getClientName(doc.clientId, this.clients),
                  clientEmail: this.getClientEmail(doc.clientId, this.clients),
                  projectName: '' // Will be populated when we have project data
                }));
                
                // Extract unique projects from documents
                this.extractProjectsFromDocuments();
                this.filteredDocuments = [...this.documents];
                
                this.calculateStats();
                this.extractTags();
              }
              this.isLoading = false;
            },
            error: (error) => {
              console.error('Error loading clients:', error);
              this.isLoading = false;
              // Still show documents even if client names fail
              this.documents = documentsResponse.documents.map(doc => ({
                ...doc,
                clientName: `Client ${doc.clientId}`,
                clientEmail: '',
                projectName: ''
              }));
              this.filteredDocuments = [...this.documents];
              this.calculateStats();
              this.extractTags();
            }
          });
        } else {
          this.isLoading = false;
        }
      },
      error: (error) => {
        console.error('Error loading documents:', error);
        this.isLoading = false;
        Swal.fire({
          title: 'Error',
          text: 'Failed to load documents. Please try again.',
          icon: 'error'
        });
      }
    });
  }

  extractProjectsFromDocuments(): void {
    // Extract unique project IDs from documents and create a simple project list
    const projectIds = new Set<number>();
    this.documents.forEach(doc => {
      if (doc.projectId) {
        projectIds.add(doc.projectId);
      }
    });
    
    // Create simple project objects (we don't have project names from the API)
    this.projects = Array.from(projectIds).map(id => ({
      id,
      name: `Project ${id}`,
      clientId: 0, // Will be determined from documents
      accountantId: 0, // Not available from documents
      projectType: 'other' as const,
      status: 'active' as const,
      createdAt: '',
      updatedAt: ''
    }));
  }

  getClientName(clientId: number, clients: Client[]): string {
    const client = clients.find(c => c.id === clientId);
    return client ? `${client.firstName} ${client.lastName}` : 'Unknown Client';
  }

  getClientEmail(clientId: number, clients: Client[]): string {
    const client = clients.find(c => c.id === clientId);
    return client?.email || '';
  }

  getProjectName(projectId: number, projects: Project[]): string {
    const project = projects.find(p => p.id === projectId);
    return project?.name || '';
  }

  calculateStats(): void {
    this.stats.total = this.documents.length;
    this.stats.required = this.documents.filter(doc => doc.required).length;
    this.stats.optional = this.documents.filter(doc => !doc.required).length;
    
    // Calculate stats by tag
    this.stats.byTag.clear();
    this.documents.forEach(doc => {
      if (doc.tag && doc.tag.trim()) {
        const count = this.stats.byTag.get(doc.tag) || 0;
        this.stats.byTag.set(doc.tag, count + 1);
      }
    });
  }

  extractTags(): void {
    const uniqueTags = new Set<string>();
    this.documents.forEach(doc => {
      if (doc.tag && doc.tag.trim()) {
        uniqueTags.add(doc.tag);
      }
    });
    this.availableTags = Array.from(uniqueTags).sort();
  }

  filterDocuments(): void {
    this.filteredDocuments = this.documents.filter(doc => {
      const matchesClient = this.selectedClient === 'all' || doc.clientId.toString() === this.selectedClient;
      const matchesProject = this.selectedProject === 'all' || doc.projectId.toString() === this.selectedProject;
      const matchesTag = this.selectedTag === 'all' || doc.tag === this.selectedTag;
      const matchesRequired = this.selectedRequired === 'all' || 
                             (this.selectedRequired === 'required' && doc.required) ||
                             (this.selectedRequired === 'optional' && !doc.required);
      const matchesSearch = (doc.filename || '').toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           (doc.clientName || '').toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           (doc.tag || '').toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesClient && matchesProject && matchesTag && matchesRequired && matchesSearch;
    });
  }

  onClientChange(): void {
    this.filterDocuments();
  }

  onProjectChange(): void {
    this.filterDocuments();
  }

  onTagChange(): void {
    this.filterDocuments();
  }

  onRequiredChange(): void {
    this.filterDocuments();
  }

  onSearchChange(): void {
    this.filterDocuments();
  }

  getRequiredClass(required: boolean): string {
    return required ? 'badge bg-warning' : 'badge bg-secondary';
  }

  getRequiredText(required: boolean): string {
    return required ? 'Required' : 'Optional';
  }

  getTagClass(tag: string): string {
    // Color code common tax document tags
    if (!tag) return 'badge bg-secondary';
    
    switch (tag.toLowerCase()) {
      case 'w2': return 'badge bg-primary';
      case '1099': return 'badge bg-info';
      case 'receipt': return 'badge bg-warning';
      case 'bank_statement': return 'badge bg-success';
      case 'tax_return': return 'badge bg-danger';
      default: return 'badge bg-secondary';
    }
  }

  viewDocument(doc: DocumentWithDetails): void {
    // Navigate to document viewer or open in new tab
    Swal.fire({
      title: 'View Document',
      text: `Opening ${doc.filename} for ${doc.clientName}`,
      icon: 'info',
      timer: 2000,
      showConfirmButton: false
    });
  }

  viewDocumentInNewTab(doc: DocumentWithDetails): void {
    console.log('Opening document in new tab:', doc);
    
    // Show loading indicator
    Swal.fire({
      title: 'Opening Document...',
      text: 'Please wait while we prepare the document for viewing.',
      icon: 'info',
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    this.apiService.downloadDocument(doc.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (blob: Blob) => {
          // Create a blob URL for viewing
          const url = window.URL.createObjectURL(blob);
          
          // Open in new tab
          const newWindow = window.open(url, '_blank');
          
          if (newWindow) {
            // Clean up the blob URL after a delay to allow the document to load
            setTimeout(() => {
              window.URL.revokeObjectURL(url);
            }, 10000); // 10 seconds should be enough for most documents to load
            
            Swal.close();
          } else {
            // Popup blocked - show download instead
            window.URL.revokeObjectURL(url);
            Swal.fire({
              title: 'Popup Blocked',
              text: 'Your browser blocked the popup. The document will be downloaded instead.',
              icon: 'warning',
              timer: 3000,
              showConfirmButton: false
            });
            
            // Trigger download as fallback
            this.downloadDocument(doc);
          }
        },
        error: (error) => {
          console.error('Error viewing document:', error);
          
          let errorMessage = 'Failed to open document. Please try again.';
          
          if (error.status === 404) {
            errorMessage = 'Document not found. It may have been moved or deleted.';
          } else if (error.status === 403) {
            errorMessage = 'You do not have permission to view this document.';
          } else if (error.status === 401) {
            errorMessage = 'Your session has expired. Please log in again.';
          }
          
          Swal.fire({
            title: 'View Failed',
            text: errorMessage,
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      });
  }

  downloadDocument(doc: DocumentWithDetails): void {
    console.log('Downloading document:', doc);
    
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

    this.apiService.downloadDocument(doc.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (blob: Blob) => {
          // Create a blob URL and trigger download
          const url = window.URL.createObjectURL(blob);
          const link = window.document.createElement('a');
          link.href = url;
          link.download = doc.filename;
          
          // Append to body, click, and remove
          window.document.body.appendChild(link);
          link.click();
          window.document.body.removeChild(link);
          
          // Clean up the blob URL
          window.URL.revokeObjectURL(url);
          
          // Show success message
          Swal.fire({
            title: 'Download Complete!',
            text: `${doc.filename} has been downloaded successfully.`,
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

  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  formatDate(dateString: string): string {
    if (!dateString) return 'Not set';
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  exportDocuments(): void {
    Swal.fire({
      title: 'Export Started',
      text: 'Preparing documents export...',
      icon: 'info',
      timer: 2000,
      showConfirmButton: false
    });
  }
}
