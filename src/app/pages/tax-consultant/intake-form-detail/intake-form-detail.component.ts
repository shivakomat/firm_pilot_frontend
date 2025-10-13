import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { ApiService, AccountantIntakeForm, AccountantIntakeFormResponse, AccountantIntakeFormDetailResponse } from '../../../core/services/api.service';

@Component({
  selector: 'app-intake-form-detail',
  templateUrl: './intake-form-detail.component.html',
  styleUrls: ['./intake-form-detail.component.scss']
})
export class IntakeFormDetailComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  formId!: number;
  intakeForm: any | null = null;
  formResponse: AccountantIntakeFormResponse | null = null;
  isLoading = false;
  
  // Form sections for display
  formSections: any[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.formId = +params['id'];
      if (this.formId) {
        this.loadIntakeFormDetails();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  loadIntakeFormDetails(): void {
    this.isLoading = true;
    console.log('📝 Loading intake form details for ID:', this.formId);
    
    this.apiService.getIntakeFormDetails(this.formId).subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.success && response.form) {
          this.intakeForm = response.form;
          this.processFormSchema();
          console.log('✅ Loaded intake form details:', this.intakeForm);
        } else {
          console.warn('⚠️ No form data found:', response);
          this.showErrorMessage('No form data found');
        }
      },
      error: (error) => {
        this.isLoading = false;
        console.error('❌ Error loading intake form details:', error);
        this.showErrorMessage('Failed to load intake form details');
      }
    });
  }

  processFormSchema(): void {
    if (!this.intakeForm?.schemaJson?.sections) return;
    
    const sections = this.intakeForm.schemaJson.sections;
    console.log('🔍 Processing form schema sections:', sections);
    
    // Convert schema sections to display format
    this.formSections = sections.map((section: any) => ({
      id: section.id,
      title: section.title,
      fields: section.fields.map((field: any) => ({
        id: field.id,
        label: field.label,
        type: field.type,
        required: field.required,
        value: null // No response data yet - this shows the form structure
      }))
    }));
    
    console.log('📋 Processed form sections:', this.formSections);
  }

  formatFilingStatus(status: string): string {
    const statusMap: { [key: string]: string } = {
      'single': 'Single',
      'married_filing_jointly': 'Married Filing Jointly',
      'married_filing_separately': 'Married Filing Separately',
      'head_of_household': 'Head of Household',
      'qualifying_widow': 'Qualifying Widow(er)'
    };
    return statusMap[status] || status;
  }

  formatCurrency(value: string | number): string {
    if (!value) return 'Not provided';
    const numValue = typeof value === 'string' ? parseFloat(value) : value;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(numValue);
  }

  getStatusClass(status: string): string {
    switch (status?.toUpperCase()) {
      case 'APPROVED': return 'badge bg-success';
      case 'REVIEWED': return 'badge bg-info';
      case 'SUBMITTED': return 'badge bg-primary';
      case 'DRAFT': return 'badge bg-warning';
      case 'NEEDS_REVISION': return 'badge bg-danger';
      default: return 'badge bg-secondary';
    }
  }

  updateFormStatus(newStatus: string): void {
    if (!this.formResponse) return;
    
    Swal.fire({
      title: 'Update Status',
      text: `Change status to ${newStatus}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#556ee6',
      cancelButtonColor: '#74788d',
      confirmButtonText: 'Yes, Update',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        // Update local status for immediate feedback
        this.formResponse!.status = newStatus as any;
        
        Swal.fire({
          title: 'Status Updated!',
          text: `Form status changed to ${newStatus}`,
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/tax-consultant/intake-forms']);
  }

  exportForm(): void {
    Swal.fire({
      title: 'Export Started',
      text: 'Preparing form export...',
      icon: 'info',
      timer: 2000,
      showConfirmButton: false
    });
  }

  private showErrorMessage(message: string): void {
    Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }
}
