import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApiService, Project, CreateProjectRequest } from '../../../core/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-projects',
  templateUrl: './client-projects.component.html',
  styleUrls: ['./client-projects.component.scss']
})
export class ClientProjectsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  clientId!: number;
  clientName: string = '';
  projects: Project[] = [];
  isLoading = false;
  showCreateModal = false;
  
  // Project creation form
  newProject: CreateProjectRequest = {
    name: '',
    type: 'tax_return',
    taxYear: new Date().getFullYear(),
    dueDate: '',
    description: ''
  };

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
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clientId = +params['clientId'];
      if (this.clientId) {
        this.loadClientProjects();
        this.loadClientInfo();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadClientProjects(): void {
    this.isLoading = true;
    this.apiService.getClientProjects(this.clientId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.projects) {
            this.projects = response.projects;
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading client projects:', error);
          this.isLoading = false;
          Swal.fire({
            title: 'Error',
            text: 'Failed to load client projects.',
            icon: 'error'
          });
        }
      });
  }

  loadClientInfo(): void {
    // Load client basic info for display
    this.apiService.getClients()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.clients) {
            const client = response.clients.find(c => c.id === this.clientId);
            if (client) {
              this.clientName = `${client.firstName} ${client.lastName}`;
            }
          }
        },
        error: (error) => {
          console.error('Error loading client info:', error);
        }
      });
  }

  openCreateModal(): void {
    this.newProject = {
      name: '',
      type: 'tax_return',
      taxYear: new Date().getFullYear(),
      dueDate: '',
      description: ''
    };
    this.showCreateModal = true;
  }

  closeCreateModal(): void {
    this.showCreateModal = false;
  }

  createProject(): void {
    if (!this.newProject.name.trim()) {
      Swal.fire({
        title: 'Validation Error',
        text: 'Project name is required.',
        icon: 'warning'
      });
      return;
    }

    this.apiService.createClientProject(this.clientId, this.newProject)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            Swal.fire({
              title: 'Success!',
              text: 'Project created successfully.',
              icon: 'success',
              timer: 2000,
              showConfirmButton: false
            });
            this.closeCreateModal();
            this.loadClientProjects();
          }
        },
        error: (error) => {
          console.error('Error creating project:', error);
          Swal.fire({
            title: 'Error',
            text: 'Failed to create project.',
            icon: 'error'
          });
        }
      });
  }

  getStatusClass(status: string): string {
    const statusObj = this.projectStatuses.find(s => s.value === status);
    return statusObj ? statusObj.class : 'badge bg-secondary';
  }

  getStatusLabel(status: string): string {
    const statusObj = this.projectStatuses.find(s => s.value === status);
    return statusObj ? statusObj.label : status;
  }

  getTypeLabel(type: string): string {
    const typeObj = this.projectTypes.find(t => t.value === type);
    return typeObj ? typeObj.label : type;
  }

  updateProjectStatus(project: Project, newStatus: string): void {
    this.apiService.updateProject(project.id, { status: newStatus as any })
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            project.status = newStatus as any;
            Swal.fire({
              title: 'Updated!',
              text: 'Project status updated successfully.',
              icon: 'success',
              timer: 1500,
              showConfirmButton: false
            });
          }
        },
        error: (error) => {
          console.error('Error updating project status:', error);
          Swal.fire({
            title: 'Error',
            text: 'Failed to update project status.',
            icon: 'error'
          });
        }
      });
  }

  viewProject(project: Project): void {
    // Navigate to project detail page
    this.router.navigate(['/tax-consultant/project-detail', project.id]);
  }

  isOverdue(dueDate: string): boolean {
    if (!dueDate) return false;
    return new Date(dueDate) < new Date();
  }

  formatDate(dateString: string): string {
    if (!dateString) return 'Not set';
    return new Date(dateString).toLocaleDateString();
  }

  goBack(): void {
    this.router.navigate(['/clients/list']);
  }
}
