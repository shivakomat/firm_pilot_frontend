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
  formId = 1; // Default tax intake form ID
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
    // Get current user from localStorage
    const userStr = localStorage.getItem('currentUser');
    if (userStr) {
      this.currentUser = JSON.parse(userStr);
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
    this.isLoading = true;
    this.apiService.getMyIntakeResponse(this.formId)
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
    try {
      // Parse the responseJson if it exists and is a string
      let parsedData: any;
      if (data.personalInfo && typeof data.personalInfo === 'string') {
        // If personalInfo is a JSON string, parse it
        parsedData = JSON.parse(data.personalInfo);
      } else if (data.personalInfo && typeof data.personalInfo === 'object') {
        // If it's already an object, use it directly
        parsedData = data.personalInfo;
      } else {
        // Try to find the data in other fields or use the data object itself
        parsedData = data;
      }

      // Populate personal information
      if (parsedData.personalInfo) {
        // Convert firstName/lastName back to fullName if needed
        const personalInfo = { ...parsedData.personalInfo };
        if (personalInfo.firstName && personalInfo.lastName && !personalInfo.fullName) {
          personalInfo.fullName = `${personalInfo.firstName} ${personalInfo.lastName}`;
        }
        this.intakeForm.get('personalInformation')?.patchValue(personalInfo);
      }

      // Populate income information
      if (parsedData.incomeInfo) {
        // Handle income sources array
        if (parsedData.incomeInfo.sources && parsedData.incomeInfo.sources.length > 0) {
          const incomeArray = this.intakeForm.get('incomeSource') as FormArray;
          parsedData.incomeInfo.sources.forEach((income: any) => {
            incomeArray.push(this.createIncomeGroup(income));
          });
        }
        
        // Handle dependents if they're in income info
        if (parsedData.incomeInfo.dependents && parsedData.incomeInfo.dependents.length > 0) {
          const dependentsArray = this.intakeForm.get('dependents') as FormArray;
          parsedData.incomeInfo.dependents.forEach((dependent: any) => {
            dependentsArray.push(this.createDependentGroup(dependent));
          });
        }
      }

      // Populate deductions information
      if (parsedData.deductionsInfo) {
        // Extract nested form data
        const deductionsData = { ...parsedData.deductionsInfo };
        
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
    } catch (error) {
      console.error('Error parsing intake form data:', error);
      // Still update progress even if parsing fails
      this.updateProgress();
    }
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
    if (!this.isSaving) {
      this.isSaving = true;
      const formData = this.prepareAPIFormData();
      
      this.apiService.saveMyIntakeDraft(this.formId, formData)
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
    
    // Prepare the response data structure matching the sample format
    const responseData = {
      personalInfo: {
        firstName: formValue.personalInformation?.fullName?.split(' ')[0] || '',
        lastName: formValue.personalInformation?.fullName?.split(' ').slice(1).join(' ') || '',
        email: formValue.personalInformation?.email || '',
        phone: formValue.personalInformation?.phone || '',
        dateOfBirth: formValue.personalInformation?.dateOfBirth || '',
        ssn: formValue.personalInformation?.ssn || '',
        maritalStatus: formValue.personalInformation?.maritalStatus || '',
        address: formValue.personalInformation?.address || {}
      },
      incomeInfo: {
        sources: formValue.incomeSource || [],
        dependents: formValue.dependents || [],
        estimatedIncome: this.calculateTotalIncome(formValue.incomeSource || [])
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
        lastSaved: new Date().toISOString(),
        completedSections: this.sections.filter(s => s.completed).length
      },
      additionalInfo: {
        formVersion: '1.0',
        submissionSource: 'client-portal'
      }
    };

    return {
      formId: 1, // Default tax intake form ID
      responseJson: JSON.stringify(responseData)
    };
  }

  private calculateTotalIncome(incomeSources: any[]): number {
    return incomeSources.reduce((total, source) => total + (source.amount || 0), 0);
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

  // Clear section method
  clearSection(sectionIndex: number): void {
    Swal.fire({
      title: 'Clear Section',
      text: `Are you sure you want to clear all data in the "${this.sections[sectionIndex].title}" section?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, Clear Section',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.performClearSection(sectionIndex);
      }
    });
  }

  performClearSection(sectionIndex: number): void {
    switch (sectionIndex) {
      case 0: // Personal Information
        this.intakeForm.get('personalInformation')?.reset();
        break;
      case 1: // Dependents
        const dependentsArray = this.intakeForm.get('dependents') as FormArray;
        while (dependentsArray.length !== 0) {
          dependentsArray.removeAt(0);
        }
        break;
      case 2: // Income
        const incomeArray = this.intakeForm.get('incomeSource') as FormArray;
        while (incomeArray.length !== 0) {
          incomeArray.removeAt(0);
        }
        break;
      case 3: // Deductions & Adjustments
        this.intakeForm.get('deductionsAdjustments')?.reset();
        break;
      case 4: // Health Coverage
        this.intakeForm.get('healthCoverage')?.reset();
        break;
      case 5: // Credits
        this.intakeForm.get('credits')?.reset();
        break;
      case 6: // Prior Year & IRS Notices
        this.intakeForm.get('priorYearInfo')?.reset();
        // Also clear estimated tax payments array
        const estimatedTaxArray = this.intakeForm.get('priorYearInfo.estimatedTaxPayments') as FormArray;
        if (estimatedTaxArray) {
          while (estimatedTaxArray.length !== 0) {
            estimatedTaxArray.removeAt(0);
          }
        }
        break;
    }
    
    // Update progress after clearing
    this.updateProgress();
    
    // Show success message
    Swal.fire({
      title: 'Section Cleared',
      text: `The "${this.sections[sectionIndex].title}" section has been cleared.`,
      icon: 'success',
      timer: 2000,
      showConfirmButton: false
    });
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
    this.isLoading = true;
    const formData = this.prepareAPIFormData();
    
    // Parse the responseJson to add submission metadata, then stringify again
    const responseData = JSON.parse(formData.responseJson);
    responseData.documentsInfo = {
      ...responseData.documentsInfo,
      status: 'submitted',
      submittedAt: new Date().toISOString()
    };
    
    // Update the formData with modified responseJson
    const finalFormData: SubmitIntakeRequest = {
      formId: formData.formId,
      responseJson: JSON.stringify(responseData)
    };

    this.apiService.submitMyIntakeResponse(this.formId, finalFormData)
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
