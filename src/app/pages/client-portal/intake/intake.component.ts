import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface IntakeForm {
  id: number;
  title: string;
  description: string;
  status: 'not-started' | 'in-progress' | 'completed';
  dueDate: string;
  category: string;
}

@Component({
  selector: 'app-intake',
  templateUrl: './intake.component.html',
  styleUrls: ['./intake.component.scss']
})
export class IntakeComponent implements OnInit {
  intakeForms: IntakeForm[] = [];
  selectedForm: IntakeForm | null = null;
  currentForm: FormGroup;
  showFormModal: boolean = false;

  constructor(private fb: FormBuilder) {
    this.currentForm = this.fb.group({
      businessName: ['', Validators.required],
      businessType: ['', Validators.required],
      taxId: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      annualRevenue: [''],
      numberOfEmployees: [''],
      businessDescription: ['']
    });
  }

  ngOnInit(): void {
    this.loadIntakeForms();
  }

  loadIntakeForms(): void {
    // Mock data - in real app, this would come from API
    this.intakeForms = [
      {
        id: 1,
        title: 'Business Information Form',
        description: 'Basic business details and contact information',
        status: 'completed',
        dueDate: '2024-01-15',
        category: 'Business Setup'
      },
      {
        id: 2,
        title: 'Tax Preparation Questionnaire',
        description: 'Annual tax preparation information and documentation requirements',
        status: 'in-progress',
        dueDate: '2024-03-15',
        category: 'Tax Preparation'
      },
      {
        id: 3,
        title: 'Bookkeeping Services Setup',
        description: 'Monthly bookkeeping service preferences and requirements',
        status: 'not-started',
        dueDate: '2024-02-28',
        category: 'Bookkeeping'
      }
    ];
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'completed': return 'badge bg-success';
      case 'in-progress': return 'badge bg-warning';
      case 'not-started': return 'badge bg-secondary';
      default: return 'badge bg-secondary';
    }
  }

  getStatusIcon(status: string): string {
    switch (status) {
      case 'completed': return 'ri-check-line';
      case 'in-progress': return 'ri-time-line';
      case 'not-started': return 'ri-file-list-line';
      default: return 'ri-file-list-line';
    }
  }

  openForm(form: IntakeForm): void {
    this.selectedForm = form;
    this.showFormModal = true;
    
    // In a real app, you would load the actual form data based on form.id
    if (form.id === 1) {
      this.currentForm.patchValue({
        businessName: 'Sample Business LLC',
        businessType: 'LLC',
        taxId: '12-3456789',
        address: '123 Main St, City, State 12345',
        phone: '(555) 123-4567',
        email: 'business@example.com',
        annualRevenue: '500000',
        numberOfEmployees: '5',
        businessDescription: 'Professional services company'
      });
    }
  }

  closeForm(): void {
    this.showFormModal = false;
    this.selectedForm = null;
  }

  saveForm(): void {
    if (this.currentForm.valid && this.selectedForm) {
      // In real app, save form data to API
      console.log('Saving form data:', this.currentForm.value);
      
      // Update status to in-progress or completed
      this.selectedForm.status = 'in-progress';
      this.closeForm();
    }
  }

  submitForm(): void {
    if (this.currentForm.valid && this.selectedForm) {
      // In real app, submit form data to API
      console.log('Submitting form data:', this.currentForm.value);
      
      // Update status to completed
      this.selectedForm.status = 'completed';
      this.closeForm();
    }
  }
}
