import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ApiService, AccountantIntakeForm } from '../../../core/services/api.service';

// Using AccountantIntakeForm interface from API service

@Component({
  selector: 'app-intake-forms',
  templateUrl: './intake-forms.component.html',
  styleUrls: ['./intake-forms.component.scss']
})
export class IntakeFormsComponent implements OnInit {
  intakeForms: AccountantIntakeForm[] = [];
  filteredForms: AccountantIntakeForm[] = [];
  selectedStatus: string = 'all';
  selectedFormType: string = 'all';
  searchTerm: string = '';
  isLoading: boolean = false;
  
  // Statistics
  stats = {
    total: 0,
    pending: 0,
    reviewed: 0,
    approved: 0,
    needsRevision: 0
  };

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadIntakeForms();
    this.calculateStats();
  }

  loadIntakeForms(): void {
    this.isLoading = true;
    console.log('📝 Loading intake forms from API...');
    
    this.apiService.getAccountantIntakeForms(50, 0).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.success && response.intakeForms) {
          this.intakeForms = response.intakeForms;
          this.filteredForms = [...this.intakeForms];
          this.calculateStats();
          console.log('✅ Loaded intake forms:', this.intakeForms);
          console.log('📊 Total count:', response.totalCount, 'Has more:', response.hasMore);
        } else {
          console.warn('⚠️ API returned no forms or failed:', response);
          this.intakeForms = [];
          this.filteredForms = [];
          this.calculateStats();
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('❌ Error loading intake forms:', error);
        
        // Show user-friendly error message
        Swal.fire({
          title: 'Error Loading Forms',
          text: 'Unable to load intake forms. Please try again later.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
        
        // Initialize empty arrays
        this.intakeForms = [];
        this.filteredForms = [];
        this.calculateStats();
      }
    });
  }

  calculateStats(): void {
    this.stats.total = this.intakeForms.length;
    this.stats.pending = this.intakeForms.filter(form => form.responseStatus === 'draft').length;
    this.stats.reviewed = this.intakeForms.filter(form => form.responseStatus === 'reviewed').length;
    this.stats.approved = this.intakeForms.filter(form => form.responseStatus === 'approved').length;
    this.stats.needsRevision = this.intakeForms.filter(form => form.responseStatus === 'needs-revision').length;
  }

  filterForms(): void {
    this.filteredForms = this.intakeForms.filter(form => {
      const matchesStatus = this.selectedStatus === 'all' || form.responseStatus === this.selectedStatus;
      const matchesFormType = this.selectedFormType === 'all'; // No formType in new API, so just match all for now
      const matchesSearch = form.clientName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           form.clientEmail.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           (form.title && form.title.toLowerCase().includes(this.searchTerm.toLowerCase())) ||
                           (form.projectName && form.projectName.toLowerCase().includes(this.searchTerm.toLowerCase()));
      return matchesStatus && matchesFormType && matchesSearch;
    });
  }

  onStatusChange(): void {
    this.filterForms();
  }

  onFormTypeChange(): void {
    this.filterForms();
  }

  onSearchChange(): void {
    this.filterForms();
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'approved': return 'badge bg-success';
      case 'reviewed': return 'badge bg-info';
      case 'submitted': return 'badge bg-primary';
      case 'draft': return 'badge bg-warning';
      case 'needs-revision': return 'badge bg-danger';
      default: return 'badge bg-secondary';
    }
  }

  getFormTypeDisplay(title: string): string {
    // Extract form type from title
    if (title.toLowerCase().includes('tax')) return 'Tax Form';
    if (title.toLowerCase().includes('business')) return 'Business Form';
    return 'Intake Form';
  }

  getProgressPercentage(status: string): number {
    switch (status) {
      case 'draft': return 25;
      case 'submitted': return 50;
      case 'reviewed': return 75;
      case 'approved': return 100;
      case 'needs-revision': return 60;
      default: return 0;
    }
  }

  viewForm(form: AccountantIntakeForm): void {
    // In real app, this would navigate to form details or open modal
    Swal.fire({
      title: 'View Intake Form',
      text: `Opening intake form for ${form.clientName}`,
      icon: 'info',
      timer: 2000,
      showConfirmButton: false
    });
  }

  updateStatus(form: AccountantIntakeForm, newStatus: string): void {
    const oldStatus = form.responseStatus;
    form.responseStatus = newStatus as any;
    form.updatedAt = new Date().toISOString();
    
    this.calculateStats();
    this.filterForms();
    
    Swal.fire({
      title: 'Status Updated',
      text: `Form status changed from ${oldStatus} to ${newStatus}`,
      icon: 'success',
      timer: 2000,
      showConfirmButton: false
    });
  }

  exportForms(): void {
    Swal.fire({
      title: 'Export Started',
      text: 'Preparing intake forms export...',
      icon: 'info',
      timer: 2000,
      showConfirmButton: false
    });
  }
}
