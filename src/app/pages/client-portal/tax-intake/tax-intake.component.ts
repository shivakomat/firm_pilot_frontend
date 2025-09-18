import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Subject, interval } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { TaxIntakeForm, IntakeFormSection, PersonalInformation, Dependent, IncomeSource } from '../../../models/intake-form.model';
import { IntakeFormService } from '../../../services/intake-form.service';

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
  clientId = 1; // This should come from auth service
  
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
    private intakeService: IntakeFormService
  ) {
    this.initializeForm();
  }

  ngOnInit(): void {
    this.loadExistingData();
    this.setupAutoSave();
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
    this.intakeService.getClientIntakeForm(this.clientId)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          if (data) {
            this.populateForm(data);
            this.currentSection = data.currentSection || 0;
            this.updateProgress();
          }
          this.isLoading = false;
        },
        error: (error) => {
          console.error('Error loading intake form:', error);
          this.isLoading = false;
        }
      });
  }

  populateForm(data: TaxIntakeForm): void {
    // Populate personal information
    if (data.personalInformation) {
      this.intakeForm.get('personalInformation')?.patchValue(data.personalInformation);
    }

    // Populate dependents
    if (data.dependents && data.dependents.length > 0) {
      const dependentsArray = this.intakeForm.get('dependents') as FormArray;
      data.dependents.forEach(dependent => {
        dependentsArray.push(this.createDependentGroup(dependent));
      });
    }

    // Populate income sources
    if (data.incomeSource && data.incomeSource.length > 0) {
      const incomeArray = this.intakeForm.get('incomeSource') as FormArray;
      data.incomeSource.forEach(income => {
        incomeArray.push(this.createIncomeGroup(income));
      });
    }

    // Populate other sections
    if (data.deductionsAdjustments) {
      this.intakeForm.get('deductionsAdjustments')?.patchValue(data.deductionsAdjustments);
    }
    if (data.healthCoverage) {
      this.intakeForm.get('healthCoverage')?.patchValue(data.healthCoverage);
    }
    if (data.credits) {
      this.intakeForm.get('credits')?.patchValue(data.credits);
    }
    if (data.priorYearInfo) {
      this.intakeForm.get('priorYearInfo')?.patchValue(data.priorYearInfo);
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
    if (this.intakeForm.valid && !this.isSaving) {
      this.isSaving = true;
      const formData = this.prepareFormData();
      
      this.intakeService.autoSaveForm(this.clientId, formData)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => {
            this.isSaving = false;
            this.updateProgress();
          },
          error: (error) => {
            console.error('Auto-save failed:', error);
            this.isSaving = false;
          }
        });
    }
  }

  prepareFormData(): Partial<TaxIntakeForm> {
    const formValue = this.intakeForm.value;
    return {
      clientId: this.clientId,
      personalInformation: formValue.personalInformation,
      dependents: formValue.dependents,
      incomeSource: formValue.incomeSource,
      deductionsAdjustments: formValue.deductionsAdjustments,
      healthCoverage: formValue.healthCoverage,
      credits: formValue.credits,
      priorYearInfo: formValue.priorYearInfo,
      currentSection: this.currentSection,
      progress: this.progress,
      lastSaved: new Date().toISOString(),
      status: 'draft'
    };
  }

  updateProgress(): void {
    const formData = this.prepareFormData();
    this.progress = this.intakeService.calculateProgress(formData);
    
    // Update section completion status
    this.sections.forEach((section, index) => {
      section.completed = this.isSectionCompleted(index);
    });
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
      id: [dependent?.id || this.intakeService.generateId()],
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
      id: [income?.id || this.intakeService.generateId()],
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
      return this.intakeService.maskSSN(ssn);
    }
    return ssn;
  }

  formatSSNInput(event: any, controlPath: string): void {
    const input = event.target.value;
    const formatted = this.intakeService.formatSSN(input);
    this.intakeForm.get(controlPath)?.setValue(formatted);
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
    this.isLoading = true;
    const formData = this.prepareFormData();
    formData.status = 'submitted';
    formData.submittedAt = new Date().toISOString();

    this.intakeService.submitIntakeForm(this.clientId, formData as TaxIntakeForm)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.isLoading = false;
          Swal.fire({
            title: 'Success!',
            text: 'Your tax intake form has been submitted successfully.',
            icon: 'success'
          });
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
