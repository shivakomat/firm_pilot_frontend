import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Swal from 'sweetalert2';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

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
  @ViewChild('uploadModal') uploadModal!: ElementRef;
  
  documents: Document[] = [];
  filteredDocuments: Document[] = [];
  selectedCategory: string = 'all';
  searchTerm: string = '';
  
  // Upload form properties
  selectedFile: File | null = null;
  isUploading: boolean = false;
  showUploadModal: boolean = false;
  uploadedFiles: any[] = [];
  uploadForm = {
    category: '',
    description: ''
  };
  
  // Dropzone configuration
  public dropzoneConfig: DropzoneConfigInterface = {
    clickable: true,
    addRemoveLinks: false,
    previewsContainer: false,
    acceptedFiles: '.pdf,.jpg,.jpeg,.png,.doc,.docx',
    maxFilesize: 10, // 10MB
    maxFiles: 10
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
    
    // Show modal
    this.showUploadModal = true;
  }
  
  closeUploadModal(): void {
    this.showUploadModal = false;
  }
  
  onUploadSuccess(event: any): void {
    setTimeout(() => {
      this.uploadedFiles.push(event[0]);
    }, 0);
  }
  
  removeUploadedFile(index: number): void {
    this.uploadedFiles.splice(index, 1);
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
      // Create new document entries for each uploaded file
      this.uploadedFiles.forEach(file => {
        const newDoc: Document = {
          id: this.documents.length + 1,
          name: file.name,
          type: this.getFileTypeDisplay(file.type),
          size: this.formatFileSize(file.size),
          uploadDate: new Date().toISOString(),
          status: 'pending',
          category: this.uploadForm.category as any
        };
        
        // Add to documents list
        this.documents.unshift(newDoc);
      });
      
      this.filterDocuments();
      
      // Clear uploaded files
      this.uploadedFiles = [];
      
      this.isUploading = false;
      
      // Close modal
      this.showUploadModal = false;
      
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
