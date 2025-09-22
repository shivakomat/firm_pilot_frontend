import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApiService, Project } from '../../../core/services/api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-client-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ClientProjectsComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  projects: Project[] = [];
  isLoading = false;

  projectTypes = [
    { value: 'tax_return', label: 'Tax Return', icon: 'bx-receipt' },
    { value: 'quarterly_filing', label: 'Quarterly Filing', icon: 'bx-calendar' },
    { value: 'business_setup', label: 'Business Setup', icon: 'bx-buildings' },
    { value: 'audit', label: 'Audit', icon: 'bx-search-alt' },
    { value: 'consultation', label: 'Consultation', icon: 'bx-chat' },
    { value: 'other', label: 'Other', icon: 'bx-folder' }
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
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.loadMyProjects();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadMyProjects(): void {
    this.isLoading = true;
    this.apiService.getMyProjects()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.projects) {
            this.projects = response.projects;
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading projects:', error);
          this.isLoading = false;
          Swal.fire({
            title: 'Error',
            text: 'Failed to load your projects.',
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

  getTypeInfo(type: string): { label: string; icon: string } {
    const typeObj = this.projectTypes.find(t => t.value === type);
    return typeObj ? { label: typeObj.label, icon: typeObj.icon } : { label: type, icon: 'bx-folder' };
  }

  viewProjectDetails(project: Project): void {
    // Navigate to project-specific intake forms or documents
    this.router.navigate(['/client-portal/tax-intake'], { 
      queryParams: { projectId: project.id }
    });
  }

  formatDate(dateString: string): string {
    if (!dateString) return 'Not set';
    return new Date(dateString).toLocaleDateString();
  }

  getDaysUntilDue(dueDate: string): number {
    if (!dueDate) return 0;
    const due = new Date(dueDate);
    const today = new Date();
    const diffTime = due.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  isDueSoon(dueDate: string): boolean {
    const days = this.getDaysUntilDue(dueDate);
    return days > 0 && days <= 7;
  }

  isOverdue(dueDate: string): boolean {
    return this.getDaysUntilDue(dueDate) < 0;
  }

  getActiveProjects(): Project[] {
    return this.projects.filter(p => p.status === 'active' || p.status === 'in_progress');
  }

  getCompletedProjects(): Project[] {
    return this.projects.filter(p => p.status === 'completed');
  }

  getProjectProgress(project: Project): number {
    // Simple progress calculation based on status
    switch (project.status) {
      case 'active': return 25;
      case 'in_progress': return 60;
      case 'completed': return 100;
      case 'on_hold': return 40;
      default: return 0;
    }
  }
}
