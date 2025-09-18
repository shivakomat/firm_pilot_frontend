import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Subject, interval } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { TaxIntakeForm, IntakeFormSection, PersonalInformation, Dependent, IncomeSource } from '../../../models/intake-form.model';
import { ApiService, IntakeResponse, SubmitIntakeRequest } from '../../../core/services/api.service';

@Component({
  selector: 'app-tax-intake',
  templateUrl: './tax-intake.component.html',
  styleUrls: ['./tax-intake.component.scss']
})
export class TaxIntakeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();
  
  intakeForm: FormGroup;
  currentSection = 0;
  progress = 0;
  isLoading = false;
  isSaving = false;
  clientId: number;
  currentUser: any;
  
  ssnMasked: { [key: string]: boolean } = {};
  
  sections: IntakeFormSection[] = [
    {
      id: 0,
      title: 'Personal Information',
      description: 'Basic personal and contact information',
      icon: 'ri-user-line',
      completed: false,
      required: true
    },
    {
      id: 1,
      title: 'Dependents',
      description: 'Information about dependents and children',
      icon: 'ri-group-line',
      completed: false,
      required: false
    },
    {
      id: 2,
      title: 'Income',
      description: 'All sources of income for the tax year',
      icon: 'ri-money-dollar-circle-line',
      completed: false,
      required: true
    },
    {
      id: 3,
      title: 'Deductions & Adjustments',
      description: 'Itemized deductions and income adjustments',
      icon: 'ri-calculator-line',
      completed: false,
      required: false
    },
    {
      id: 4,
      title: 'Health Coverage',
      description: 'Health insurance coverage information',
      icon: 'ri-heart-pulse-line',
      completed: false,
      required: true
    },
    {
      id: 5,
      title: 'Credits',
      description: 'Tax credits and education expenses',
      icon: 'ri-award-line',
      completed: false,
      required: false
    },
    {
      id: 6,
      title: 'Prior Year & IRS Notices',
      description: 'Previous year information and IRS correspondence',
      icon: 'ri-file-text-line',
      completed: false,
      required: false
    }
  ];

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService
  ) {
    this.initializeForm();
    // Get current user and client ID from localStorage
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      this.currentUser = JSON.parse(userStr);
      this.clientId = this.currentUser.id;
    }
  }

  ngOnInit(): void {
    this.loadExistingData();
    this.setupAutoSave();
    // Initialize progress to 0 until data is loaded
    this.progress = 0;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  initializeForm(): void {
    this.intakeForm = this.fb.group({
      personalInformation: this.fb.group({
        fullName: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        ssn: ['', [Validators.required, Validators.pattern(/^\d{3}-\d{2}-\d{4}$/)]],
        maritalStatus: ['', Validators.required],
        spouseName: [''],
        spouseSsn: [''],
        address: this.fb.group({
          street: ['', Validators.required],
          city: ['', Validators.required],
          state: ['', Validators.required],
          zipCode: ['', [Validators.required, Validators.pattern(/^\d{5}(-\d{4})?$/)]]
        }),
        phone: ['', [Validators.required, Validators.pattern(/^\(\d{3}\) \d{3}-\d{4}$/)]],
        email: ['', [Validators.required, Validators.email]],
        driverLicense: this.fb.group({
          number: [''],
          state: [''],
          expiration: ['']
        })
      }),
      dependents: this.fb.array([]),
      incomeSource: this.fb.array([]),
      deductionsAdjustments: this.fb.group({
        mortgageInterest: [false],
        mortgageAmount: [0],
        propertyTaxes: [false],
        propertyTaxAmount: [0],
        charitableCash: [0],
        charitableNonCash: [0],
        studentLoanInterest: [false],
        studentLoanAmount: [0],
        iraContributions: [0],
        iraType: [''],
        medicalExpenses: [0],
        otherAdjustments: ['']
      }),
      healthCoverage: this.fb.group({
        hadInsuranceAllYear: [null, Validators.required],
        marketplaceCoverage: [false],
        employerCoverage: [false],
        form1095A: [false],
        form1095B: [false],
        form1095C: [false]
      }),
      credits: this.fb.group({
        educationExpenses: [0],
        tuition1098T: [false],
        childCareExpenses: [0],
        childCareProviderName: [''],
        childCareProviderEin: [''],
        adoptionExpenses: [0],
        energyEfficiencyUpgrades: [0]
      }),
      priorYearInfo: this.fb.group({
        filedLastYear: [null],
        estimatedTaxPayments: this.fb.array([]),
        irsNotices: [false],
        otherNotes: ['']
      })
    });
  }

  loadExistingData(): void {
    if (!this.clientId) {
      console.error('No client ID available');
      return;
    }
    
    this.isLoading = true;
    this.apiService.getClientIntakeResponses(this.clientId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          if (response.success && response.responses) {
            this.populateFormFromAPI(response.responses);
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading intake form:', error);
          // Don't show error for 404 - just means no existing data
          if (error.status !== 404) {
            Swal.fire({
              title: 'Error',
              text: 'Failed to load existing form data.',
              icon: 'error'
            });
          }
          this.isLoading = false;
        }
      });
  }

  populateFormFromAPI(data: IntakeResponse): void {
    // Populate personal information
    if (data.personalInfo) {
      this.intakeForm.get('personalInformation')?.patchValue(data.personalInfo);
    }

    // Populate income information
    if (data.incomeInfo) {
      // Handle income sources array
      if (data.incomeInfo.sources && data.incomeInfo.sources.length > 0) {
        const incomeArray = this.intakeForm.get('incomeSource') as FormArray;
        data.incomeInfo.sources.forEach((income: any) => {
          incomeArray.push(this.createIncomeGroup(income));
        });
      }
      
      // Handle dependents if they're in income info
      if (data.incomeInfo.dependents && data.incomeInfo.dependents.length > 0) {
        const dependentsArray = this.intakeForm.get('dependents') as FormArray;
        data.incomeInfo.dependents.forEach((dependent: any) => {
          dependentsArray.push(this.createDependentGroup(dependent));
        });
      }
    }

    // Populate deductions information
    if (data.deductionsInfo) {
      // Extract nested form data
      const deductionsData = { ...data.deductionsInfo };
      
      // Handle nested objects separately
      if (deductionsData.healthCoverage) {
        this.intakeForm.get('healthCoverage')?.patchValue(deductionsData.healthCoverage);
        delete deductionsData.healthCoverage;
      }
      
      if (deductionsData.credits) {
        this.intakeForm.get('credits')?.patchValue(deductionsData.credits);
        delete deductionsData.credits;
      }
      
      if (deductionsData.priorYearInfo) {
        this.intakeForm.get('priorYearInfo')?.patchValue(deductionsData.priorYearInfo);
        delete deductionsData.priorYearInfo;
      }
      
      // Set remaining deductions data
      this.intakeForm.get('deductionsAdjustments')?.patchValue(deductionsData);
    }

    // Update progress after populating - this will now calculate correctly
    this.updateProgress();
  }

  setupAutoSave(): void {
    this.intakeForm.valueChanges
      .pipe(
        debounceTime(2000),
        distinctUntilChanged(),
        takeUntil(this.destroy$)
      )
      .subscribe(() => {
        this.autoSave();
      });
  }

  autoSave(): void {
    if (!this.isSaving && this.clientId) {
      this.isSaving = true;
      const formData = this.prepareAPIFormData();
      
      this.apiService.submitClientIntakeResponse(this.clientId, formData)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            this.isSaving = false;
            this.updateProgress();
            if (response.success) {
              // Show brief success message
              const toast = document.createElement('div');
              toast.className = 'toast-container position-fixed top-0 end-0 p-3';
              toast.innerHTML = `
                <div class="toast show" role="alert">
                  <div class="toast-body bg-success text-white">
                    <i class="ri-check-line me-1"></i>Draft saved successfully
                  </div>
                </div>
              `;
              document.body.appendChild(toast);
              setTimeout(() => document.body.removeChild(toast), 3000);
            }
          },
          error: (error) => {
            console.error('Auto-save failed:', error);
            this.isSaving = false;
            // Show error message
            Swal.fire({
              title: 'Save Failed',
              text: 'Unable to save draft. Please try again.',
              icon: 'error',
              timer: 3000,
              showConfirmButton: false
            });
          }
        });
    }
  }

  prepareAPIFormData(): SubmitIntakeRequest {
    const formValue = this.intakeForm.value;
    return {
      personalInfo: formValue.personalInformation,
      incomeInfo: {
        sources: formValue.incomeSource,
        dependents: formValue.dependents
      },
      deductionsInfo: {
        ...formValue.deductionsAdjustments,
        healthCoverage: formValue.healthCoverage,
        credits: formValue.credits,
        priorYearInfo: formValue.priorYearInfo
      },
      documentsInfo: {
        currentSection: this.currentSection,
        progress: this.progress,
        lastSaved: new Date().toISOString()
      }
    };
  }

  updateProgress(): void {
    this.progress = this.calculateProgress();
  }

  calculateProgress(): number {
    // First update section completion status
    this.sections.forEach((section, index) => {
      section.completed = this.isSectionCompleted(index);
    });
    
    const totalSections = this.sections.length;
    const completedSections = this.sections.filter(section => section.completed).length;
    return Math.round((completedSections / totalSections) * 100);
  }

  isSectionCompleted(sectionIndex: number): boolean {
    const formValue = this.intakeForm.value;
    
    switch (sectionIndex) {
      case 0: // Personal Information
        const personal = formValue.personalInformation;
        return !!(personal?.fullName && personal?.ssn && personal?.address?.street);
      case 1: // Dependents
        return true; // Optional section
      case 2: // Income
        return formValue.incomeSource && formValue.incomeSource.length > 0;
      case 3: // Deductions
        return true; // Optional section
      case 4: // Health Coverage
        return formValue.healthCoverage?.hadInsuranceAllYear !== null;
      case 5: // Credits
        return true; // Optional section
      case 6: // Prior Year
        return formValue.priorYearInfo?.filedLastYear !== null;
      default:
        return false;
    }
  }

  // Navigation methods
  goToSection(sectionIndex: number): void {
    this.currentSection = sectionIndex;
  }

  nextSection(): void {
    if (this.currentSection < this.sections.length - 1) {
      this.currentSection++;
    }
  }

  previousSection(): void {
    if (this.currentSection > 0) {
      this.currentSection--;
    }
  }

  // Form array helpers
  get dependentsArray(): FormArray {
    return this.intakeForm.get('dependents') as FormArray;
  }

  get incomeArray(): FormArray {
    return this.intakeForm.get('incomeSource') as FormArray;
  }

  createDependentGroup(dependent?: Dependent): FormGroup {
    return this.fb.group({
      id: [dependent?.id || this.generateId()],
      name: [dependent?.name || '', Validators.required],
      ssn: [dependent?.ssn || '', [Validators.required, Validators.pattern(/^\d{3}-\d{2}-\d{4}$/)]],
      dateOfBirth: [dependent?.dateOfBirth || '', Validators.required],
      relationship: [dependent?.relationship || '', Validators.required],
      monthsLivedWithYou: [dependent?.monthsLivedWithYou || 12, [Validators.min(1), Validators.max(12)]],
      fullYear: [dependent?.fullYear !== undefined ? dependent.fullYear : true],
      childCareExpenses: [dependent?.childCareExpenses || false],
      childCareAmount: [dependent?.childCareAmount || 0]
    });
  }

  createIncomeGroup(income?: IncomeSource): FormGroup {
    return this.fb.group({
      id: [income?.id || this.generateId()],
      type: [income?.type || '', Validators.required],
      description: [income?.description || '', Validators.required],
      amount: [income?.amount || 0, [Validators.required, Validators.min(0)]],
      employerName: [income?.employerName || ''],
      details: [income?.details || {}]
    });
  }

  addDependent(): void {
    this.dependentsArray.push(this.createDependentGroup());
  }

  removeDependent(index: number): void {
    this.dependentsArray.removeAt(index);
  }

  addIncomeSource(): void {
    this.incomeArray.push(this.createIncomeGroup());
  }

  removeIncomeSource(index: number): void {
    this.incomeArray.removeAt(index);
  }

  // SSN masking methods
  toggleSSNMask(field: string): void {
    this.ssnMasked[field] = !this.ssnMasked[field];
  }

  isSSNMasked(field: string): boolean {
    return this.ssnMasked[field] !== false; // Default to masked
  }

  getDisplaySSN(ssn: string, field: string): string {
    if (this.isSSNMasked(field)) {
      return this.maskSSN(ssn);
    }
    return ssn;
  }

  maskSSN(ssn: string): string {
    if (!ssn) return '';
    const cleaned = ssn.replace(/\D/g, '');
    if (cleaned.length >= 9) {
      return `***-**-${cleaned.slice(-4)}`;
    }
    return ssn;
  }

  formatSSNInput(event: any, controlPath: string): void {
    const input = event.target.value;
    const formatted = this.formatSSN(input);
    this.intakeForm.get(controlPath)?.setValue(formatted);
  }

  formatSSN(input: string): string {
    const cleaned = input.replace(/\D/g, '');
    if (cleaned.length >= 9) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 5)}-${cleaned.slice(5, 9)}`;
    } else if (cleaned.length >= 5) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 5)}-${cleaned.slice(5)}`;
    } else if (cleaned.length >= 3) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    }
    return cleaned;
  }

  generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }

  formatPhoneInput(event: any, controlPath: string): void {
    const input = event.target.value.replace(/\D/g, '');
    let formatted = '';
    
    if (input.length >= 10) {
      formatted = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`;
    } else if (input.length >= 6) {
      formatted = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6)}`;
    } else if (input.length >= 3) {
      formatted = `(${input.slice(0, 3)}) ${input.slice(3)}`;
    } else {
      formatted = input;
    }
    
    this.intakeForm.get(controlPath)?.setValue(formatted);
  }

  // Submit form
  submitForm(): void {
    if (this.intakeForm.valid) {
      Swal.fire({
        title: 'Submit Intake Form',
        text: 'Are you sure you want to submit your tax intake form? You won\'t be able to make changes after submission.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Submit'
      }).then((result) => {
        if (result.isConfirmed) {
          this.performSubmit();
        }
      });
    } else {
      Swal.fire({
        title: 'Form Incomplete',
        text: 'Please complete all required sections before submitting.',
        icon: 'warning'
      });
    }
  }

  performSubmit(): void {
    if (!this.clientId) {
      Swal.fire({
        title: 'Error',
        text: 'Unable to identify client. Please log in again.',
        icon: 'error'
      });
      return;
    }

    this.isLoading = true;
    const formData = this.prepareAPIFormData();
    // Add submission metadata
    formData.documentsInfo = {
      ...formData.documentsInfo,
      status: 'submitted',
      submittedAt: new Date().toISOString()
    };

    this.apiService.submitClientIntakeResponse(this.clientId, formData)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => {
          this.isLoading = false;
          if (response.success) {
            Swal.fire({
              title: 'Success!',
              text: 'Your tax intake form has been submitted successfully.',
              icon: 'success'
            });
          } else {
            Swal.fire({
              title: 'Error',
              text: response.message || 'There was an error submitting your form.',
              icon: 'error'
            });
          }
        },
        error: (error) => {
          this.isLoading = false;
          Swal.fire({
            title: 'Error',
            text: 'There was an error submitting your form. Please try again.',
            icon: 'error'
          });
          console.error('Submit error:', error);
        }
      });
  }
}
