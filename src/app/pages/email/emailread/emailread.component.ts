import { Component, NO_ERRORS_SCHEMA, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Store } from '@ngrx/store';
import { fetchmailData } from 'src/app/store/Email/email.action';
import { selectData } from 'src/app/store/Email/email.selector';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-emailread',
  templateUrl: './emailread.component.html',
  styleUrls: ['./emailread.component.scss'],
  standalone:true,
  imports:[CommonModule, NgxEditorModule],
  schemas: [NO_ERRORS_SCHEMA]
})

/**
 * Email read Component
 */
export class EmailreadComponent implements OnInit {

  modalRef?: BsModalRef;
  emailData: any;
  returnedArray: any;
  public index: number;
  editor: Editor;
  html = '<p>Content of the editor.</p>';
  // bread crumb items
  breadCrumbItems: Array<{}>;
  
  // Gmail specific properties
  gmailMessageId: string = '';
  gmailMessageDetails: any = null;
  isLoadingGmailMessage: boolean = false;
  emailPreview: any = null;

  constructor(
    private route: ActivatedRoute, 
    private modalService: BsModalService, 
    public store: Store,
    private apiService: ApiService
  ) {
    this.route.params.subscribe(params => {
      this.gmailMessageId = params.id;
      console.log('📧 EmailRead component received Gmail ID:', this.gmailMessageId);
      
      // Load preview data from localStorage
      const previewData = localStorage.getItem('selectedGmailPreview');
      if (previewData) {
        this.emailPreview = JSON.parse(previewData);
        console.log('📧 Email preview data:', this.emailPreview);
      }
      
      // Fetch full Gmail message details
      this.loadGmailMessageDetails();
    });
  }

  ngOnInit() {
    this.editor = new Editor();
    this.breadCrumbItems = [{ label: 'Email' }, { label: 'Read Email', active: true }];
    // Fetch data
    this.store.dispatch(fetchmailData());
    this.store.select(selectData).subscribe(data => {
      this.emailData = data
      this.returnedArray = data
      // this.customersData = this.returnedArray.slice(0, 8)
    })
  }

  /**
   * Load Gmail message details using the API
   */
  async loadGmailMessageDetails(): Promise<void> {
    if (!this.gmailMessageId) {
      console.error('❌ No Gmail message ID provided');
      return;
    }

    this.isLoadingGmailMessage = true;
    console.log('📧 Loading Gmail message details for ID:', this.gmailMessageId);

    try {
      const response = await this.apiService.getGmailMessage(this.gmailMessageId);
      this.isLoadingGmailMessage = false;

      console.log('📧 Gmail message details response:', response);

      if (response.success && response.data?.messages && response.data.messages.length > 0) {
        this.gmailMessageDetails = response.data.messages[0];
        console.log('✅ Loaded Gmail message details:', this.gmailMessageDetails);
        
        // Update the email data for the template
        this.emailData = [{
          id: this.gmailMessageDetails.id,
          title: this.gmailMessageDetails.fromName 
            ? `${this.gmailMessageDetails.fromName} <${this.gmailMessageDetails.fromEmail}>`
            : this.gmailMessageDetails.fromEmail,
          subject: this.gmailMessageDetails.subject,
          snippet: this.gmailMessageDetails.snippet || this.gmailMessageDetails.bodyPreview,
          fromEmail: this.gmailMessageDetails.fromEmail,
          fromName: this.gmailMessageDetails.fromName,
          receivedAt: this.gmailMessageDetails.receivedAt,
          isRead: this.gmailMessageDetails.isRead,
          isStarred: this.gmailMessageDetails.isStarred,
          hasAttachments: this.gmailMessageDetails.hasAttachments,
          labels: this.gmailMessageDetails.labels
        }];
        
        this.returnedArray = this.emailData;
      } else if (response.needsAuth) {
        console.log('🔐 Gmail authentication required');
        // Handle auth required case
      } else {
        console.warn('⚠️ No Gmail message details found');
      }
    } catch (error) {
      this.isLoadingGmailMessage = false;
      console.error('❌ Error loading Gmail message details:', error);
    }
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  open(content) {
    this.modalRef = this.modalService.show(content);
  }
}
