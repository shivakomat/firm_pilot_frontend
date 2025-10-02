import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApiService, Project, ProjectDocument } from '../../../core/services/api.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  projectId!: number;
  project: Project | null = null;
  intakeFormData: any = null;
  documents: ProjectDocument[] = [];
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = +params['projectId'];
      if (this.projectId) {
        this.loadProjectDetail();
        this.loadProjectDocuments();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadProjectDetail(): void {
    this.isLoading = true;
    this.apiService.getProjectDetail(this.projectId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.project = response.project || null;
            // Note: intakeFormData would come from project.intakeFormData if available
            this.intakeFormData = this.project?.intakeFormData || null;
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading project detail:', error);
          this.isLoading = false;
          Swal.fire({
            title: 'Error',
            text: 'Failed to load project details.',
            icon: 'error'
          });
        }
      });
  }

  loadProjectDocuments(): void {
    this.apiService.getProjectDocuments(this.projectId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success) {
            this.documents = response.documents || [];
          }
        },
        error: (error) => {
          console.error('Error loading project documents:', error);
        }
      });
  }

  downloadDocument(doc: ProjectDocument): void {
    this.apiService.downloadProjectDocument(doc.id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (blob: Blob) => {
          const url = window.URL.createObjectURL(blob);
          const link = window.document.createElement('a');
          link.href = url;
          link.download = doc.originalName;
          link.click();
          window.URL.revokeObjectURL(url);
        },
        error: (error) => {
          console.error('Error downloading document:', error);
          Swal.fire({
            title: 'Download Failed',
            text: 'Failed to download document.',
            icon: 'error'
          });
        }
      });
  }

  getStatusClass(status: string): string {
    const statusClasses: { [key: string]: string } = {
      'active': 'badge bg-success',
      'in_progress': 'badge bg-primary',
      'completed': 'badge bg-info',
      'on_hold': 'badge bg-warning',
      'cancelled': 'badge bg-danger'
    };
    return statusClasses[status] || 'badge bg-secondary';
  }

  getStatusLabel(status: string): string {
    const statusLabels: { [key: string]: string } = {
      'active': 'Active',
      'in_progress': 'In Progress',
      'completed': 'Completed',
      'on_hold': 'On Hold',
      'cancelled': 'Cancelled'
    };
    return statusLabels[status] || status;
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
    return new Date(dateString).toLocaleDateString();
  }

  goBack(): void {
    this.router.navigate(['/client-portal/projects']);
  }
}
