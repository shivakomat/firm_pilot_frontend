import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

interface ClientDocument {
  id: number;
  clientId: number;
  clientName: string;
  clientEmail: string;
  documentName: string;
  documentType: string;
  category: 'tax-documents' | 'financial-statements' | 'receipts' | 'other';
  size: string;
  uploadDate: string;
  status: 'pending' | 'reviewed' | 'approved' | 'rejected';
  reviewedBy?: string;
  reviewDate?: string;
  notes?: string;
}

@Component({
  selector: 'app-client-documents',
  templateUrl: './client-documents.component.html',
  styleUrls: ['./client-documents.component.scss']
})
export class ClientDocumentsComponent implements OnInit {
  documents: ClientDocument[] = [];
  filteredDocuments: ClientDocument[] = [];
  selectedStatus: string = 'all';
  selectedCategory: string = 'all';
  selectedClient: string = 'all';
  searchTerm: string = '';
  
  // Statistics
  stats = {
    total: 0,
    pending: 0,
    reviewed: 0,
    approved: 0,
    rejected: 0
  };

  // Unique clients for filter
  clients: { id: number, name: string }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadDocuments();
    this.calculateStats();
    this.extractClients();
  }

  loadDocuments(): void {
    // Mock data - in real app, this would come from API
    this.documents = [
      {
        id: 1,
        clientId: 101,
        clientName: 'John Smith',
        clientEmail: 'john.smith@email.com',
        documentName: 'W2_2024.pdf',
        documentType: 'PDF',
        category: 'tax-documents',
        size: '245 KB',
        uploadDate: '2024-02-15T10:30:00Z',
        status: 'pending'
      },
      {
        id: 2,
        clientId: 102,
        clientName: 'Sarah Johnson',
        clientEmail: 'sarah.johnson@email.com',
        documentName: 'Bank_Statement_Jan2024.pdf',
        documentType: 'PDF',
        category: 'financial-statements',
        size: '1.2 MB',
        uploadDate: '2024-02-14T14:20:00Z',
        status: 'reviewed',
        reviewedBy: 'Tax Consultant',
        reviewDate: '2024-02-16T09:15:00Z'
      },
      {
        id: 3,
        clientId: 103,
        clientName: 'Michael Brown',
        clientEmail: 'michael.brown@email.com',
        documentName: 'Receipt_Office_Supplies.jpg',
        documentType: 'Image',
        category: 'receipts',
        size: '890 KB',
        uploadDate: '2024-02-13T16:45:00Z',
        status: 'approved',
        reviewedBy: 'Tax Consultant',
        reviewDate: '2024-02-17T11:30:00Z'
      },
      {
        id: 4,
        clientId: 104,
        clientName: 'Emily Davis',
        clientEmail: 'emily.davis@email.com',
        documentName: '1099_Form.pdf',
        documentType: 'PDF',
        category: 'tax-documents',
        size: '156 KB',
        uploadDate: '2024-02-12T09:10:00Z',
        status: 'rejected',
        reviewedBy: 'Tax Consultant',
        reviewDate: '2024-02-16T15:20:00Z',
        notes: 'Document is unclear, please re-upload with better quality'
      },
      {
        id: 5,
        clientId: 105,
        clientName: 'Robert Wilson',
        clientEmail: 'robert.wilson@email.com',
        documentName: 'Business_Expenses_Q1.xlsx',
        documentType: 'Spreadsheet',
        category: 'financial-statements',
        size: '2.1 MB',
        uploadDate: '2024-02-11T13:25:00Z',
        status: 'pending'
      },
      {
        id: 6,
        clientId: 101,
        clientName: 'John Smith',
        clientEmail: 'john.smith@email.com',
        documentName: 'Property_Tax_Statement.pdf',
        documentType: 'PDF',
        category: 'tax-documents',
        size: '340 KB',
        uploadDate: '2024-02-10T11:15:00Z',
        status: 'approved',
        reviewedBy: 'Tax Consultant',
        reviewDate: '2024-02-15T14:45:00Z'
      }
    ];
    
    this.filteredDocuments = [...this.documents];
  }

  calculateStats(): void {
    this.stats.total = this.documents.length;
    this.stats.pending = this.documents.filter(doc => doc.status === 'pending').length;
    this.stats.reviewed = this.documents.filter(doc => doc.status === 'reviewed').length;
    this.stats.approved = this.documents.filter(doc => doc.status === 'approved').length;
    this.stats.rejected = this.documents.filter(doc => doc.status === 'rejected').length;
  }

  extractClients(): void {
    const uniqueClients = new Map();
    this.documents.forEach(doc => {
      if (!uniqueClients.has(doc.clientId)) {
        uniqueClients.set(doc.clientId, { id: doc.clientId, name: doc.clientName });
      }
    });
    this.clients = Array.from(uniqueClients.values());
  }

  filterDocuments(): void {
    this.filteredDocuments = this.documents.filter(doc => {
      const matchesStatus = this.selectedStatus === 'all' || doc.status === this.selectedStatus;
      const matchesCategory = this.selectedCategory === 'all' || doc.category === this.selectedCategory;
      const matchesClient = this.selectedClient === 'all' || doc.clientId.toString() === this.selectedClient;
      const matchesSearch = doc.documentName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           doc.clientName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
                           doc.clientEmail.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesStatus && matchesCategory && matchesClient && matchesSearch;
    });
  }

  onStatusChange(): void {
    this.filterDocuments();
  }

  onCategoryChange(): void {
    this.filterDocuments();
  }

  onClientChange(): void {
    this.filterDocuments();
  }

  onSearchChange(): void {
    this.filterDocuments();
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'approved': return 'badge bg-success';
      case 'reviewed': return 'badge bg-info';
      case 'pending': return 'badge bg-warning';
      case 'rejected': return 'badge bg-danger';
      default: return 'badge bg-secondary';
    }
  }

  getCategoryDisplay(category: string): string {
    switch (category) {
      case 'tax-documents': return 'Tax Documents';
      case 'financial-statements': return 'Financial Statements';
      case 'receipts': return 'Receipts';
      case 'other': return 'Other';
      default: return category;
    }
  }

  getCategoryClass(category: string): string {
    switch (category) {
      case 'tax-documents': return 'badge bg-primary-subtle text-primary';
      case 'financial-statements': return 'badge bg-success-subtle text-success';
      case 'receipts': return 'badge bg-warning-subtle text-warning';
      case 'other': return 'badge bg-info-subtle text-info';
      default: return 'badge bg-secondary';
    }
  }

  viewDocument(doc: ClientDocument): void {
    // In real app, this would open document viewer or download
    Swal.fire({
      title: 'View Document',
      text: `Opening ${doc.documentName} for ${doc.clientName}`,
      icon: 'info',
      timer: 2000,
      showConfirmButton: false
    });
  }

  downloadDocument(doc: ClientDocument): void {
    // In real app, this would trigger actual download
    Swal.fire({
      title: 'Download Started',
      text: `Downloading ${doc.documentName}...`,
      icon: 'info',
      timer: 2000,
      showConfirmButton: false
    });
  }

  updateStatus(doc: ClientDocument, newStatus: string): void {
    const oldStatus = doc.status;
    doc.status = newStatus as any;
    doc.reviewedBy = 'Tax Consultant';
    doc.reviewDate = new Date().toISOString();
    
    this.calculateStats();
    this.filterDocuments();
    
    Swal.fire({
      title: 'Status Updated',
      text: `Document status changed from ${oldStatus} to ${newStatus}`,
      icon: 'success',
      timer: 2000,
      showConfirmButton: false
    });
  }

  addNotes(doc: ClientDocument): void {
    Swal.fire({
      title: 'Add Notes',
      input: 'textarea',
      inputLabel: 'Review Notes',
      inputPlaceholder: 'Enter your notes about this document...',
      inputValue: doc.notes || '',
      showCancelButton: true,
      confirmButtonText: 'Save Notes',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        doc.notes = result.value;
        doc.reviewedBy = 'Tax Consultant';
        doc.reviewDate = new Date().toISOString();
        
        Swal.fire({
          title: 'Notes Saved',
          text: 'Review notes have been added to the document',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false
        });
      }
    });
  }

  exportDocuments(): void {
    Swal.fire({
      title: 'Export Started',
      text: 'Preparing documents export...',
      icon: 'info',
      timer: 2000,
      showConfirmButton: false
    });
  }
}
