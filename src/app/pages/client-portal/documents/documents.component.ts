import { Component, OnInit } from '@angular/core';

interface Document {
  id: number;
  name: string;
  type: string;
  size: string;
  uploadDate: string;
  status: 'pending' | 'reviewed' | 'approved';
  category: 'tax-documents' | 'financial-statements' | 'receipts' | 'other';
}

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  documents: Document[] = [];
  filteredDocuments: Document[] = [];
  selectedCategory: string = 'all';
  searchTerm: string = '';

  constructor() { }

  ngOnInit(): void {
    this.loadDocuments();
  }

  loadDocuments(): void {
    // Mock data - in real app, this would come from API
    this.documents = [
      {
        id: 1,
        name: 'W2_2024.pdf',
        type: 'PDF',
        size: '245 KB',
        uploadDate: '2024-01-15',
        status: 'approved',
        category: 'tax-documents'
      },
      {
        id: 2,
        name: 'Bank_Statement_Jan2024.pdf',
        type: 'PDF',
        size: '1.2 MB',
        uploadDate: '2024-02-01',
        status: 'reviewed',
        category: 'financial-statements'
      },
      {
        id: 3,
        name: 'Receipt_Office_Supplies.jpg',
        type: 'Image',
        size: '890 KB',
        uploadDate: '2024-02-10',
        status: 'pending',
        category: 'receipts'
      }
    ];
    this.filteredDocuments = [...this.documents];
  }

  filterDocuments(): void {
    this.filteredDocuments = this.documents.filter(doc => {
      const matchesCategory = this.selectedCategory === 'all' || doc.category === this.selectedCategory;
      const matchesSearch = doc.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  onCategoryChange(): void {
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
      default: return 'badge bg-secondary';
    }
  }

  downloadDocument(doc: Document): void {
    // In real app, this would trigger actual download
    console.log('Downloading document:', doc.name);
  }

  uploadDocument(): void {
    // In real app, this would open file upload dialog
    console.log('Upload document functionality');
  }
}
