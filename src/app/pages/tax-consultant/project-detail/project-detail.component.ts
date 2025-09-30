import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { ApiService, Project, ProjectDocument, UploadDocumentResponse } from '../../../core/services/api.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  projectId!: number;
  project: Project | null = null;
  intakeFormData: any = null;
  isLoading = false;
  isUploading = false;
  
  // File upload
  selectedFile: File | null = null;
  uploadDescription = '';

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
            this.intakeFormData = response.intakeForm || null;
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

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Validate file type (PDF, DOC, DOCX)
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        Swal.fire({
          title: 'Invalid File Type',
          text: 'Please select a PDF, DOC, or DOCX file.',
          icon: 'warning'
        });
        return;
      }

      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        Swal.fire({
          title: 'File Too Large',
          text: 'Please select a file smaller than 10MB.',
          icon: 'warning'
        });
        return;
      }

      this.selectedFile = file;
    }
  }

  uploadDocument(): void {
    if (!this.selectedFile) {
      Swal.fire({
        title: 'No File Selected',
        text: 'Please select a file to upload.',
        icon: 'warning'
      });
      return;
    }

    this.isUploading = true;
    this.apiService.uploadProjectDocument(this.projectId, this.selectedFile, this.uploadDescription)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response: UploadDocumentResponse) => {
          if (response.success) {
            Swal.fire({
              title: 'Success!',
              text: 'Document uploaded successfully.',
              icon: 'success',
              timer: 2000,
              showConfirmButton: false
            });
            
            // Reset form
            this.selectedFile = null;
            this.uploadDescription = '';
            const fileInput = document.getElementById('documentFile') as HTMLInputElement;
            if (fileInput) fileInput.value = '';
            
            // Reload project to show new document
            this.loadProjectDetail();
          }
          this.isUploading = false;
        },
        error: (error) => {
          console.error('Error uploading document:', error);
          this.isUploading = false;
          Swal.fire({
            title: 'Upload Failed',
            text: 'Failed to upload document. Please try again.',
            icon: 'error'
          });
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
    if (this.project) {
      this.router.navigate(['/tax-consultant/client-projects', this.project.clientId]);
    } else {
      this.router.navigate(['/clients/list']);
    }
  }
}
