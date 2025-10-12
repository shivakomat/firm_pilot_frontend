import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Swal from 'sweetalert2';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { DocumentSuggestionUtil, DocumentSuggestion, DocumentSuggestionConfig } from '../../../shared/utils/doc-suggest.util';
import { AnalyticsService } from '../../../core/services/analytics.service';
import { ApiService, ClientDocument } from '../../../core/services/api.service';
import { environment } from '../../../../environments/environment';
import { FileUploadConfig, UploadedFileInfo } from '../../../shared/components/file-upload/file-upload.component';

interface Document {
  id: number;
  title: string; // Document title (user-provided)
  name: string; // File name
  type: string;
  size: string;
  uploadDate: string;
  status: 'pending' | 'reviewed' | 'approved';
  category: 'tax-documents' | 'business-documents' | 'supporting-documents' | 'completed-work' | 'other';
  tags?: string[]; // New field for document tags
}

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  @ViewChild('uploadModal') uploadModal!: ElementRef;
  
  // Documents loaded from backend
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
    year: null as number | null,
    tags: [] as string[],
    customTag: ''
  };

  // Predefined tags based on category
  predefinedTags = {
    'tax-documents': ['W2_Form', '1099_MISC', '1099_NEC', '1040_Tax_Return', 'Schedule_C', 'Schedule_D'],
    'business-documents': ['Bank_Statement', 'Receipt', 'Invoice', 'Expense_Report', 'Business_License'],
    'supporting-documents': ['ID_Document', 'SSN_Card', 'Proof_of_Address', 'Insurance_Document'],
    'completed-work': ['Completed_Tax_Return', 'Draft_Return', 'Client_Copy', 'IRS_Filing_Copy'],
  };

  selectedTags: string[] = [];
  showCustomTagInput: boolean = false;

  // UI State
  showSuggestion: boolean = false;
  currentSuggestion: DocumentSuggestion | null = null;
  showAutoTagNotification: boolean = false;
  autoSuggestedTags: string[] = [];
  titleSubject = new Subject<string>();
  
  // Feature flags from environment
  suggestionConfig: DocumentSuggestionConfig = environment.documentSuggestions;
  
  // File upload configuration for reusable component
  fileUploadConfig: FileUploadConfig = {
    acceptedTypes: ['.pdf', '.jpg', '.jpeg', '.png', '.doc', '.docx'],
    maxFileSize: 10 * 1024 * 1024, // 10MB in bytes
    maxFiles: 10,
    allowMultiple: true
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
    // Initialize with sample documents for immediate display
    this.filterDocuments();
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
    });
  }

  loadDocuments(): void {
    if (!this.clientId) {
      console.warn('⚠️ No client ID available, cannot load documents');
      this.documents = [];
      this.filterDocuments();
      return;
    }

    console.log('📋 Loading documents for client ID:', this.clientId);
    console.log('🔄 Fetching fresh data from server...');

    this.apiService.getClientDocuments(this.clientId).subscribe({
      next: (response) => {
        if (response.success) {
          console.log('📥 Raw backend response:', response);
          
          // Map backend response to local Document interface
          this.documents = response.documents.map(doc => {
            const mappedDoc = {
              id: doc.id,
              title: doc.title && doc.title !== doc.filename ? doc.title : '', // Use title if different from filename
              name: doc.filename, // Original filename from user's system
              type: this.getFileTypeFromMimeType(doc.mimeType),
              size: this.formatFileSize(doc.sizeBytes),
              uploadDate: new Date(doc.uploadedAt).toLocaleDateString(),
              status: doc.required ? 'approved' : 'pending' as 'pending' | 'reviewed' | 'approved',
              category: this.inferCategoryFromFilename(doc.filename), // Infer category from filename/tags
              tags: doc.tags || [] // Tags array from backend
            };
            console.log(`📄 Mapped document: ${doc.filename} → Category: ${mappedDoc.category}, Tags: [${mappedDoc.tags.join(', ')}]`);
            return mappedDoc;
          });
          
          console.log('✅ Documents loaded and mapped:', this.documents.length);
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

  private inferCategoryFromFilename(filename: string): 'tax-documents' | 'business-documents' | 'supporting-documents' | 'completed-work' | 'other' {
    const lowerFilename = filename.toLowerCase();
    
    // Tax documents patterns
    if (lowerFilename.includes('w2') || lowerFilename.includes('1099') || 
        lowerFilename.includes('1040') || lowerFilename.includes('schedule') ||
        lowerFilename.includes('tax') && lowerFilename.includes('return')) {
      return 'tax-documents';
    }
    
    // Business documents patterns
    if (lowerFilename.includes('bank') || lowerFilename.includes('statement') ||
        lowerFilename.includes('receipt') || lowerFilename.includes('invoice') ||
        lowerFilename.includes('expense') || lowerFilename.includes('license')) {
      return 'business-documents';
    }
    
    // Supporting documents patterns
    if (lowerFilename.includes('id') || lowerFilename.includes('ssn') ||
        lowerFilename.includes('address') || lowerFilename.includes('insurance') ||
        lowerFilename.includes('passport') || lowerFilename.includes('license')) {
      return 'supporting-documents';
    }
    
    // Completed work patterns
    if (lowerFilename.includes('completed') || lowerFilename.includes('draft') ||
        lowerFilename.includes('client') && lowerFilename.includes('copy') ||
        lowerFilename.includes('irs') && lowerFilename.includes('filing')) {
      return 'completed-work';
    }
    
    // Default to other
    return 'other';
  }

  filterDocuments(): void {
    this.filteredDocuments = this.documents.filter(doc => {
      const matchesCategory = this.selectedCategory === 'all' || doc.category === this.selectedCategory;
      const matchesSearch = this.searchTerm === '' || 
        doc.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        doc.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        (doc.tags && doc.tags.some(tag => tag.toLowerCase().includes(this.searchTerm.toLowerCase())));
      return matchesCategory && matchesSearch;
    });
  }

  // Removed duplicate - using enhanced version below

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

  viewDocument(doc: Document): void {
    console.log('👁️ Viewing document:', doc.name);
    
    this.apiService.downloadDocument(doc.id).subscribe({
      next: (blob: Blob) => {
        // Create blob URL and open in new tab
        const url = window.URL.createObjectURL(blob);
        window.open(url, '_blank');
        
        // Clean up the URL after a delay to allow the browser to load it
        setTimeout(() => {
          window.URL.revokeObjectURL(url);
        }, 1000);
        
        console.log('✅ Document opened for viewing');
      },
      error: (error) => {
        console.error('❌ Error viewing document:', error);
        this.showErrorMessage('Failed to view document. Please try again.');
      }
    });
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
      year: null,
      tags: [],
      customTag: ''
    };
    this.selectedTags = [];
    this.showCustomTagInput = false;
    
    // Reset auto-tag notification
    this.showAutoTagNotification = false;
    this.autoSuggestedTags = [];
    
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
  
  // Handle files selected from the reusable FileUploadComponent
  onFilesSelected(fileInfos: UploadedFileInfo[]): void {
    console.log('📂 Files selected from FileUploadComponent:', fileInfos.length);
    
    // Convert UploadedFileInfo[] back to File[] for compatibility with existing upload logic
    this.uploadedFiles = fileInfos.map(info => info.file);
    
    console.log('📂 Updated uploadedFiles array:', this.uploadedFiles.length);
  }
  
  removeUploadedFile(index: number): void {
    this.uploadedFiles.splice(index, 1);
  }

  // Tag management methods
  onCategoryChange(): void {
    // Reset tags when category changes
    this.selectedTags = [];
    this.showCustomTagInput = false;
    this.uploadForm.customTag = '';
    this.filterDocuments();
  }

  toggleTag(tag: string): void {
    const index = this.uploadForm.tags.indexOf(tag);
    if (index > -1) {
      this.uploadForm.tags.splice(index, 1);
    } else {
      this.uploadForm.tags.push(tag);
    }
    // Keep selectedTags in sync for backward compatibility
    this.selectedTags = [...this.uploadForm.tags];
  }

  isTagSelected(tag: string): boolean {
    return this.uploadForm.tags.includes(tag);
  }

  addCustomTag(): void {
    const customTag = this.uploadForm.customTag.trim();
    if (customTag && !this.uploadForm.tags.includes(customTag)) {
      this.uploadForm.tags.push(customTag);
      // Keep selectedTags in sync for backward compatibility
      this.selectedTags = [...this.uploadForm.tags];
      this.uploadForm.customTag = '';
      this.showCustomTagInput = false;
    }
  }

  removeTag(tag: string): void {
    const index = this.uploadForm.tags.indexOf(tag);
    if (index > -1) {
      this.uploadForm.tags.splice(index, 1);
      // Keep selectedTags in sync for backward compatibility
      this.selectedTags = [...this.uploadForm.tags];
    }
  }

  getCurrentCategoryTags(): string[] {
    return this.predefinedTags[this.uploadForm.category as keyof typeof this.predefinedTags] || [];
  }

  // Document action methods
  deleteDocument(doc: Document): void {
    Swal.fire({
      title: 'Delete Document?',
      text: `Are you sure you want to delete "${doc.name}"? This action cannot be undone.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Yes, Delete',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.performDeleteDocument(doc);
      }
    });
  }

  performDeleteDocument(doc: Document): void {
    console.log('🗑️ Deleting document:', doc.name);
    
    this.apiService.deleteDocument(doc.id).subscribe({
      next: (response) => {
        if (response.success) {
          console.log('✅ Document deleted successfully:', response.message);
          
          // Show success message
          Swal.fire({
            title: 'Deleted!',
            text: response.message || 'Document has been deleted successfully.',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
          });
          
          // Reload documents from server to ensure consistency
          console.log('🔄 Reloading documents to verify deletion...');
          this.loadDocuments();
        } else {
          console.error('❌ Delete failed:', response);
          this.showErrorMessage('Failed to delete document. Please try again.');
        }
      },
      error: (error) => {
        console.error('❌ Delete error:', error);
        this.showErrorMessage('Failed to delete document. Please try again.');
      }
    });
  }

  getFileIcon(fileName: string): string {
    const extension = fileName.toLowerCase().split('.').pop();
    switch (extension) {
      case 'pdf':
        return 'ri-file-pdf-line text-danger';
      case 'doc':
      case 'docx':
        return 'ri-file-word-line text-primary';
      case 'jpg':
      case 'jpeg':
      case 'png':
        return 'ri-image-line text-success';
      default:
        return 'ri-file-text-line text-muted';
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
    console.log('🏷️ Selected tags:', this.selectedTags);
    console.log('💡 UI suggestion:', uiSuggestion);
    
    // Upload each file individually using the real API
    const uploadPromises = this.uploadedFiles.map(file => {
      console.log('🏷️ Uploading with tags:', this.uploadForm.tags);
      
      return this.apiService.uploadClientDocument(
        this.clientId,
        file,
        this.uploadForm.title,
        this.uploadForm.category,
        this.uploadForm.year,
        this.uploadForm.description,
        this.uploadForm.tags,
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
          year: null,
          tags: [],
          customTag: ''
        };
        this.selectedTags = [];
        this.showCustomTagInput = false;
        
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
   * Parse title for suggestions and auto-add relevant tags
   */
  parseTitleForSuggestions(title: string): void {
    const suggestion = DocumentSuggestionUtil.parseTitleForSuggestions(title, this.suggestionConfig);
    
    if (suggestion.confidence > 0) {
      this.currentSuggestion = suggestion;
      this.showSuggestion = !this.suggestionMatchesCurrentForm(suggestion);
      
      // Auto-add tags based on identified keywords
      this.autoAddTagsFromTitle(title, suggestion);
      
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
   * Automatically add tags based on title keywords
   */
  private autoAddTagsFromTitle(title: string, suggestion: any): void {
    const lowerTitle = title.toLowerCase();
    const suggestedTags: string[] = [];
    
    // Define keyword-to-tag mappings
    const keywordMappings = {
      // Tax-related keywords
      'w2': 'W-2',
      'w-2': 'W-2',
      '1099': '1099',
      '1040': 'Tax Return',
      'tax return': 'Tax Return',
      'schedule': 'Tax Schedule',
      'irs': 'IRS',
      
      // Income keywords
      'salary': 'Income',
      'wages': 'Income',
      'income': 'Income',
      'payroll': 'Income',
      'earnings': 'Income',
      
      // Business keywords
      'receipt': 'Receipt',
      'invoice': 'Invoice',
      'expense': 'Expense',
      'bank statement': 'Bank Statement',
      'statement': 'Statement',
      
      // Mortgage keywords
      'mortgage': 'Mortgage',
      'loan': 'Mortgage',
      'property': 'Property',
      'real estate': 'Property',
      
      // Notice keywords
      'notice': 'Notice',
      'letter': 'Notice',
      'correspondence': 'Notice',
      'irs notice': 'IRS Notice',
      
      // Insurance keywords
      'insurance': 'Insurance',
      'policy': 'Insurance',
      'coverage': 'Insurance'
    };
    
    // Check for keyword matches
    for (const [keyword, tag] of Object.entries(keywordMappings)) {
      if (lowerTitle.includes(keyword)) {
        if (!suggestedTags.includes(tag)) {
          suggestedTags.push(tag);
        }
      }
    }
    
    // Add suggested tags to the form if not already present
    suggestedTags.forEach(tag => {
      if (!this.uploadForm.tags?.includes(tag)) {
        if (!this.uploadForm.tags) {
          this.uploadForm.tags = [];
        }
        this.uploadForm.tags.push(tag);
        console.log(`🏷️ Auto-added tag: "${tag}" based on title keyword`);
      }
    });
    
    // Show notification if tags were added
    if (suggestedTags.length > 0) {
      console.log(`✨ Auto-suggested ${suggestedTags.length} tag(s) based on title: ${suggestedTags.join(', ')}`);
      
      // Show UI notification
      this.autoSuggestedTags = suggestedTags;
      this.showAutoTagNotification = true;
      
      // Auto-hide notification after 5 seconds
      setTimeout(() => {
        this.showAutoTagNotification = false;
      }, 5000);
    }
  }

  /**
   * Dismiss the auto-tag notification
   */
  dismissAutoTagNotification(): void {
    this.showAutoTagNotification = false;
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
