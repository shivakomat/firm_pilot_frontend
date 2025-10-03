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
    
    this.apiService.getAccountantIntakeForms().subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.success && response.forms) {
          this.intakeForms = response.forms;
          this.filteredForms = [...this.intakeForms];
          this.calculateStats();
          console.log('✅ Loaded intake forms:', this.intakeForms);
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
    this.stats.pending = this.intakeForms.filter(form => form.status === 'pending').length;
    this.stats.reviewed = this.intakeForms.filter(form => form.status === 'reviewed').length;
    this.stats.approved = this.intakeForms.filter(form => form.status === 'approved').length;
    this.stats.needsRevision = this.intakeForms.filter(form => form.status === 'needs-revision').length;
  }

  filterForms(): void {
    this.filteredForms = this.intakeForms.filter(form => {
      const matchesStatus = this.selectedStatus === 'all' || form.status === this.selectedStatus;
      const matchesFormType = this.selectedFormType === 'all' || (form.formType || 'tax-intake') === this.selectedFormType;
      const matchesSearch = form.clientName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           form.clientEmail.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           (form.formTitle && form.formTitle.toLowerCase().includes(this.searchTerm.toLowerCase()));
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
      case 'pending': return 'badge bg-warning';
      case 'needs-revision': return 'badge bg-danger';
      default: return 'badge bg-secondary';
    }
  }

  getFormTypeDisplay(formType: string): string {
    switch (formType) {
      case 'tax-intake': return 'Tax Intake';
      case 'business-intake': return 'Business Intake';
      default: return formType;
    }
  }

  viewForm(form: AccountantIntakeForm): void {
    // In real app, this would navigate to form details or open modal
    Swal.fire({
      title: 'View Intake Form',
      text: `Opening ${form.formType || 'intake'} form for ${form.clientName}`,
      icon: 'info',
      timer: 2000,
      showConfirmButton: false
    });
  }

  updateStatus(form: AccountantIntakeForm, newStatus: string): void {
    const oldStatus = form.status;
    form.status = newStatus as any;
    form.lastModified = new Date().toISOString();
    
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
