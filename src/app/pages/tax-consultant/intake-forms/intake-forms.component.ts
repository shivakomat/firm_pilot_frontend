import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

interface ClientIntakeForm {
  id: number;
  clientId: number;
  clientName: string;
  clientEmail: string;
  projectId?: number;
  projectName?: string;
  submissionDate: string;
  status: 'pending' | 'reviewed' | 'approved' | 'needs-revision';
  formType: 'tax-intake' | 'business-intake';
  completionPercentage: number;
  lastModified: string;
}

@Component({
  selector: 'app-intake-forms',
  templateUrl: './intake-forms.component.html',
  styleUrls: ['./intake-forms.component.scss']
})
export class IntakeFormsComponent implements OnInit {
  intakeForms: ClientIntakeForm[] = [];
  filteredForms: ClientIntakeForm[] = [];
  selectedStatus: string = 'all';
  selectedFormType: string = 'all';
  searchTerm: string = '';
  
  // Statistics
  stats = {
    total: 0,
    pending: 0,
    reviewed: 0,
    approved: 0,
    needsRevision: 0
  };

  constructor() { }

  ngOnInit(): void {
    this.loadIntakeForms();
    this.calculateStats();
  }

  loadIntakeForms(): void {
    // Mock data - in real app, this would come from API
    this.intakeForms = [
      {
        id: 1,
        clientId: 101,
        clientName: 'John Smith',
        clientEmail: 'john.smith@email.com',
        projectId: 1,
        projectName: '2024 Tax Return',
        submissionDate: '2024-02-15T10:30:00Z',
        status: 'pending',
        formType: 'tax-intake',
        completionPercentage: 100,
        lastModified: '2024-02-15T10:30:00Z'
      },
      {
        id: 2,
        clientId: 102,
        clientName: 'Sarah Johnson',
        clientEmail: 'sarah.johnson@email.com',
        projectId: 2,
        projectName: '2024 Business Tax',
        submissionDate: '2024-02-14T14:20:00Z',
        status: 'reviewed',
        formType: 'tax-intake',
        completionPercentage: 100,
        lastModified: '2024-02-16T09:15:00Z'
      },
      {
        id: 3,
        clientId: 103,
        clientName: 'Michael Brown',
        clientEmail: 'michael.brown@email.com',
        projectId: 3,
        projectName: '2024 Individual Return',
        submissionDate: '2024-02-13T16:45:00Z',
        status: 'approved',
        formType: 'tax-intake',
        completionPercentage: 100,
        lastModified: '2024-02-17T11:30:00Z'
      },
      {
        id: 4,
        clientId: 104,
        clientName: 'Emily Davis',
        clientEmail: 'emily.davis@email.com',
        projectId: 4,
        projectName: '2024 Amended Return',
        submissionDate: '2024-02-12T09:10:00Z',
        status: 'needs-revision',
        formType: 'tax-intake',
        completionPercentage: 85,
        lastModified: '2024-02-16T15:20:00Z'
      },
      {
        id: 5,
        clientId: 105,
        clientName: 'Robert Wilson',
        clientEmail: 'robert.wilson@email.com',
        projectId: 5,
        projectName: '2024 LLC Tax Filing',
        submissionDate: '2024-02-11T13:25:00Z',
        status: 'pending',
        formType: 'business-intake',
        completionPercentage: 92,
        lastModified: '2024-02-11T13:25:00Z'
      }
    ];
    
    this.filteredForms = [...this.intakeForms];
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
      const matchesFormType = this.selectedFormType === 'all' || form.formType === this.selectedFormType;
      const matchesSearch = form.clientName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           form.clientEmail.toLowerCase().includes(this.searchTerm.toLowerCase());
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

  viewForm(form: ClientIntakeForm): void {
    // In real app, this would navigate to form details or open modal
    Swal.fire({
      title: 'View Intake Form',
      text: `Opening ${form.formType} form for ${form.clientName}`,
      icon: 'info',
      timer: 2000,
      showConfirmButton: false
    });
  }

  updateStatus(form: ClientIntakeForm, newStatus: string): void {
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
