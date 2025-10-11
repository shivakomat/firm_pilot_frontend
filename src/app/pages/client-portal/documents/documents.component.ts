import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Swal from 'sweetalert2';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { DocumentSuggestionUtil, DocumentSuggestion, DocumentSuggestionConfig } from '../../../shared/utils/doc-suggest.util';
import { AnalyticsService } from '../../../core/services/analytics.service';
import { ApiService, ClientDocument } from '../../../core/services/api.service';
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
  
  // Client ID for API calls
  clientId: number = 0;
  currentUser: any;
  
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
    url: 'javascript:void(0)', // Dummy URL since we handle uploads manually
    clickable: true,
    addRemoveLinks: false,
    previewsContainer: false,
    acceptedFiles: '.pdf,.jpg,.jpeg,.png,.doc,.docx',
    maxFilesize: 10, // 10MB
    maxFiles: 10,
    autoProcessQueue: false, // Prevent automatic upload
    uploadMultiple: false,
    parallelUploads: 1,
    createImageThumbnails: false
  };

  constructor(
    private analyticsService: AnalyticsService,
    private apiService: ApiService
  ) { 
    // Set up debounced title parsing
    this.titleSubject.pipe(
      debounceTime(200),
      distinctUntilChanged()
    ).subscribe(title => {
      this.parseTitleForSuggestions(title);
    });
  }

  ngOnInit(): void {
    this.initializeClientData();
    this.loadDocuments();
  }

  initializeClientData(): void {
    // Get current user and client ID
    this.currentUser = this.getCurrentUser();
    this.clientId = this.getCurrentUserClientId();
    
    console.log('📄 Documents Component initialized with client ID:', this.clientId);
  }

  private getCurrentUser(): any {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }

  private getCurrentUserClientId(): number {
    try {
      const userJWT = localStorage.getItem('authToken');
      if (userJWT) {
        const payload = JSON.parse(atob(userJWT.split('.')[1]));
        return payload.userId || payload.id || this.currentUser?.id || 0;
      }
    } catch (error) {
      console.error('Error extracting user ID from JWT:', error);
    }
    return this.currentUser?.id || 0;
  }

  private showErrorMessage(message: string): void {
    Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
      confirmButtonText: 'OK'
    });
  }

  loadDocuments(): void {
    if (!this.clientId) {
      console.error('❌ No client ID available for loading documents');
      this.documents = [];
      this.filterDocuments();
      return;
    }

    console.log('📋 Loading documents for client ID:', this.clientId);

    this.apiService.getClientDocuments(this.clientId).subscribe({
      next: (response) => {
        if (response.success) {
          // Map ClientDocument to local Document interface
          this.documents = response.documents.map(doc => ({
            id: doc.id,
            name: doc.filename,
            type: this.getFileTypeFromMimeType(doc.mimeType),
            size: this.formatFileSize(doc.sizeBytes),
            uploadDate: new Date(doc.uploadedAt).toLocaleDateString(),
            status: doc.required ? 'approved' : 'pending' as 'pending' | 'reviewed' | 'approved',
            category: doc.tag as 'tax-documents' | 'financial-statements' | 'receipts' | 'other'
          }));
          console.log('✅ Documents loaded:', this.documents.length);
          this.filterDocuments();
        } else {
          console.error('❌ Failed to load documents:', response);
          this.showErrorMessage('Failed to load documents');
          this.documents = [];
          this.filterDocuments();
        }
      },
      error: (error) => {
        console.error('❌ Error loading documents:', error);
        this.showErrorMessage('Error loading documents. Please try again.');
        this.documents = [];
        this.filterDocuments();
      }
    });
  }

  private getFileTypeFromMimeType(mimeType: string): string {
    if (mimeType.includes('pdf')) return 'PDF';
    if (mimeType.includes('image')) return 'Image';
    if (mimeType.includes('word') || mimeType.includes('document')) return 'Document';
    return 'File';
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
    console.log('📥 Downloading document:', doc.name);
    
    this.apiService.downloadDocument(doc.id).subscribe({
      next: (blob: Blob) => {
        // Create download link
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = doc.name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        
        console.log('✅ Document downloaded successfully');
      },
      error: (error) => {
        console.error('❌ Download error:', error);
        this.showErrorMessage('Failed to download document. Please try again.');
      }
    });
  }

  uploadDocument(): void {
    console.log('🚀 Upload Document button clicked');
    
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
    console.log('📋 Upload modal should now be visible:', this.showUploadModal);
  }
  
  closeUploadModal(): void {
    this.showUploadModal = false;
  }
  
  onUploadSuccess(event: any): void {
    console.log('📁 File upload success event:', event);
    setTimeout(() => {
      this.uploadedFiles.push(event[0]);
      console.log('📂 Files in upload queue:', this.uploadedFiles.length);
    }, 0);
  }
  
  removeUploadedFile(index: number): void {
    this.uploadedFiles.splice(index, 1);
  }

  onFileSelected(event: any): void {
    console.log('📁 File input change event:', event);
    const files = event.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        console.log('📂 Adding file via input:', file.name);
        this.uploadedFiles.push(file);
      }
      console.log('📂 Total files in queue:', this.uploadedFiles.length);
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
    if (this.uploadedFiles.length === 0 || !this.uploadForm.category || !this.uploadForm.title) {
      return;
    }

    if (!this.clientId) {
      this.showErrorMessage('Client ID not available. Please refresh and try again.');
      return;
    }
    
    this.isUploading = true;
    
    // Prepare uiSuggestion data for analytics
    const uiSuggestion = this.currentSuggestion ? {
      tag: this.currentSuggestion.tag,
      year: this.currentSuggestion.year,
      confidence: this.currentSuggestion.confidence,
      source: this.currentSuggestion.source
    } : null;
    
    console.log('📤 Uploading documents for client ID:', this.clientId);
    console.log('📋 Upload form data:', this.uploadForm);
    console.log('💡 UI suggestion:', uiSuggestion);
    
    // Upload each file individually using the real API
    const uploadPromises = this.uploadedFiles.map(file => {
      return this.apiService.uploadClientDocument(
        this.clientId,
        file,
        this.uploadForm.title,
        this.uploadForm.category,
        this.uploadForm.year,
        this.uploadForm.description,
        uiSuggestion
      ).toPromise();
    });

    Promise.all(uploadPromises).then(responses => {
      console.log('✅ All uploads completed:', responses);
      
      // Check if all uploads were successful
      const allSuccessful = responses.every(response => response?.success);
      
      if (allSuccessful) {
        // Reload documents to get the latest list
        this.loadDocuments();
        
        // Clear form and uploaded files
        this.uploadedFiles = [];
        this.uploadForm = {
          category: '',
          description: '',
          title: '',
          year: null
        };
        
        // Reset suggestions
        this.currentSuggestion = null;
        this.showSuggestion = false;
        
        // Close modal
        this.showUploadModal = false;
        
        // Show success message
        Swal.fire({
          title: 'Upload Successful!',
          text: `${responses.length} document(s) uploaded successfully and are pending review.`,
          icon: 'success',
          timer: 3000,
          showConfirmButton: false
        });
      } else {
        // Some uploads failed
        const failedCount = responses.filter(response => !response?.success).length;
        this.showErrorMessage(`${failedCount} out of ${responses.length} uploads failed. Please try again.`);
      }
      
      this.isUploading = false;
      
    }).catch(error => {
      console.error('❌ Upload error:', error);
      this.showErrorMessage('Upload failed. Please check your connection and try again.');
      this.isUploading = false;
    });
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
