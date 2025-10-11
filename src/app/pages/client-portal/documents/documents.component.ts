import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Swal from 'sweetalert2';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { DocumentSuggestionUtil, DocumentSuggestion, DocumentSuggestionConfig } from '../../../shared/utils/doc-suggest.util';
import { AnalyticsService } from '../../../core/services/analytics.service';
import { environment } from '../../../../environments/environment';

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
    description: '',
    title: '',
    year: null as number | null
  };

  // Document suggestion properties
  currentSuggestion: DocumentSuggestion | null = null;
  showSuggestion: boolean = false;
  titleSubject = new Subject<string>();
  
  // Feature flags from environment
  suggestionConfig: DocumentSuggestionConfig = environment.documentSuggestions;
  
  // Dropzone configuration
  public dropzoneConfig: DropzoneConfigInterface = {
    url: '/upload', // Mock URL for client-side handling
    clickable: true,
    addRemoveLinks: false,
    previewsContainer: false,
    acceptedFiles: '.pdf,.jpg,.jpeg,.png,.doc,.docx',
    maxFilesize: 10, // 10MB
    maxFiles: 10,
    autoProcessQueue: false // Prevent automatic upload
  };

  constructor(private analyticsService: AnalyticsService) { 
    // Set up debounced title parsing
    this.titleSubject.pipe(
      debounceTime(200),
      distinctUntilChanged()
    ).subscribe(title => {
      this.parseTitleForSuggestions(title);
    });
  }

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
      description: '',
      title: '',
      year: null
    };
    
    // Reset suggestions
    this.currentSuggestion = null;
    this.showSuggestion = false;
    
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
    if (this.uploadedFiles.length === 0 || !this.uploadForm.category || !this.uploadForm.title) {
      return;
    }
    
    this.isUploading = true;
    
    // Prepare upload data including uiSuggestion for analytics
    const uploadData = {
      category: this.uploadForm.category,
      title: this.uploadForm.title,
      year: this.uploadForm.year,
      description: this.uploadForm.description,
      files: this.uploadedFiles,
      uiSuggestion: this.currentSuggestion ? {
        tag: this.currentSuggestion.tag,
        year: this.currentSuggestion.year,
        confidence: this.currentSuggestion.confidence,
        source: this.currentSuggestion.source
      } : null
    };
    
    console.log('📤 Uploading document with data:', uploadData);
    
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

  // Document Suggestion Methods

  /**
   * Handle title input change with debouncing
   */
  onTitleChange(title: string): void {
    this.uploadForm.title = title;
    this.titleSubject.next(title);
  }

  /**
   * Parse title for suggestions
   */
  parseTitleForSuggestions(title: string): void {
    const suggestion = DocumentSuggestionUtil.parseTitleForSuggestions(title, this.suggestionConfig);
    
    if (suggestion.confidence > 0) {
      this.currentSuggestion = suggestion;
      this.showSuggestion = !this.suggestionMatchesCurrentForm(suggestion);
      
      // Track suggestion shown
      this.analyticsService.trackDocumentSuggestionShown(
        suggestion.tag,
        suggestion.year,
        suggestion.confidence
      );
    } else {
      this.currentSuggestion = null;
      this.showSuggestion = false;
    }
  }

  /**
   * Check if suggestion matches current form values
   */
  suggestionMatchesCurrentForm(suggestion: DocumentSuggestion): boolean {
    return DocumentSuggestionUtil.suggestionMatchesForm(
      suggestion,
      this.uploadForm.category,
      this.uploadForm.year
    );
  }

  /**
   * Apply suggestion to form (Switch action)
   */
  applySuggestion(): void {
    if (!this.currentSuggestion) return;

    const fromCategory = this.uploadForm.category;
    const fromYear = this.uploadForm.year;

    // Apply suggestion to form
    if (this.currentSuggestion.category) {
      this.uploadForm.category = DocumentSuggestionUtil.mapSuggestionToFormCategory(this.currentSuggestion);
    }
    if (this.currentSuggestion.year) {
      this.uploadForm.year = this.currentSuggestion.year;
    }

    // Track switch action
    this.analyticsService.trackDocumentSuggestionSwitch(
      fromCategory,
      this.uploadForm.category,
      fromYear,
      this.uploadForm.year
    );

    // Hide suggestion after applying
    this.showSuggestion = false;
  }

  /**
   * Keep current form values (Keep action)
   */
  keepCurrentValues(): void {
    if (!this.currentSuggestion) return;

    // Track keep action
    this.analyticsService.trackDocumentSuggestionKept(
      this.currentSuggestion.tag,
      this.currentSuggestion.year
    );

    // Hide suggestion
    this.showSuggestion = false;
  }

  /**
   * Get formatted suggestion text for display
   */
  getSuggestionText(): string {
    if (!this.currentSuggestion) return '';
    return DocumentSuggestionUtil.formatSuggestionText(this.currentSuggestion);
  }

  /**
   * Check if current form matches suggestion (for "Confirmed" display)
   */
  isConfirmedBySuggestion(): boolean {
    if (!this.currentSuggestion) return false;
    return this.suggestionMatchesCurrentForm(this.currentSuggestion);
  }
}
