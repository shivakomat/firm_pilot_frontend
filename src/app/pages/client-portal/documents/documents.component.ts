import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

declare var bootstrap: any;

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
  
  // Upload form properties
  selectedFile: File | null = null;
  isUploading: boolean = false;
  uploadForm = {
    category: '',
    description: ''
  };

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
    Swal.fire({
      title: 'Download Started',
      text: `Downloading ${doc.name}...`,
      icon: 'info',
      timer: 2000,
      showConfirmButton: false
    });
    console.log('Downloading document:', doc.name);
  }

  uploadDocument(): void {
    // Reset form
    this.selectedFile = null;
    this.uploadForm = {
      category: '',
      description: ''
    };
    
    // Open modal
    const modal = new bootstrap.Modal(document.getElementById('uploadModal'));
    modal.show();
  }
  
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      // Check file size (10MB limit)
      if (file.size > 10 * 1024 * 1024) {
        Swal.fire({
          title: 'File Too Large',
          text: 'Please select a file smaller than 10MB.',
          icon: 'error'
        });
        return;
      }
      
      // Check file type
      const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png', 
                           'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        Swal.fire({
          title: 'Invalid File Type',
          text: 'Please select a PDF, JPG, PNG, DOC, or DOCX file.',
          icon: 'error'
        });
        return;
      }
      
      this.selectedFile = file;
    }
  }
  
  formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
  
  submitUpload(): void {
    if (!this.selectedFile || !this.uploadForm.category) {
      return;
    }
    
    this.isUploading = true;
    
    // Simulate upload process
    setTimeout(() => {
      // Create new document entry
      const newDoc: Document = {
        id: this.documents.length + 1,
        name: this.selectedFile!.name,
        type: this.getFileTypeDisplay(this.selectedFile!.type),
        size: this.formatFileSize(this.selectedFile!.size),
        uploadDate: new Date().toISOString(),
        status: 'pending',
        category: this.uploadForm.category as any
      };
      
      // Add to documents list
      this.documents.unshift(newDoc);
      this.filterDocuments();
      
      this.isUploading = false;
      
      // Close modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('uploadModal'));
      modal.hide();
      
      // Show success message
      Swal.fire({
        title: 'Upload Successful!',
        text: 'Your document has been uploaded and is pending review.',
        icon: 'success',
        timer: 3000,
        showConfirmButton: false
      });
      
    }, 2000); // Simulate 2 second upload time
  }
  
  private getFileTypeDisplay(mimeType: string): string {
    switch (mimeType) {
      case 'application/pdf': return 'PDF';
      case 'image/jpeg':
      case 'image/jpg':
      case 'image/png': return 'Image';
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': return 'Document';
      default: return 'File';
    }
  }
}
