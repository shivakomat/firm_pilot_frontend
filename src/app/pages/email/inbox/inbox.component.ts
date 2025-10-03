import { Component, OnInit, ViewChild, TemplateRef, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import { Editor } from 'ngx-editor';
import Swal from 'sweetalert2';
import { PagetitleComponent } from 'src/app/shared/ui/pagetitle/pagetitle.component';
import { LoaderComponent } from 'src/app/shared/ui/loader/loader.component';
import { NgxEditorModule } from 'ngx-editor';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ApiService, GmailMessage, GmailStatusResponse } from '../../../core/services/api.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.scss'],
  standalone:true,
  imports:[CommonModule,NgxEditorModule,BsDropdownModule,ModalModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

/**
 * Email Inbox component
 */
export class InboxComponent implements OnInit {

  modalRef?: BsModalRef;

  editor: Editor;
  html = '<p>Content of the editor.</p>';
  // bread crumb items
  breadCrumbItems: Array<{}>;

  emailIds: number[] = [];
  emailData: any;
  // page number
  page: number = 1;
  // default page size
  pageSize: number = 15;
  // total number of records
  totalRecords: number = 0;
  returnedArray: any
  // start and end index
  startIndex: number = 1;
  endIndex: number = 15;

  // Gmail integration properties
  isGmailConnected: boolean = false;
  gmailEmail: string = '';
  isLoadingGmail: boolean = false;
  isCheckingStatus: boolean = true;
  gmailMessages: GmailMessage[] = [];

  constructor(
    private modalService: BsModalService, 
    private apiService: ApiService
  ) {
  }

  ngOnInit() {
    this.editor = new Editor();
    this.breadCrumbItems = [{ label: 'Email' }, { label: 'Inbox', active: true }];
    
    // Disable OAuth return handling until backend is ready
    // const oauthReturn = this.apiService.handleOAuthReturn();
    // if (oauthReturn === true) {
    //   // OAuth was successful, show success message
    //   Swal.fire({
    //     title: 'Gmail Connected!',
    //     text: 'Successfully connected to your Gmail account',
    //     icon: 'success',
    //     timer: 2000,
    //     showConfirmButton: false
    //   });
    // } else if (oauthReturn === false) {
    //   // OAuth failed, show error message
    //   Swal.fire({
    //     title: 'Connection Failed',
    //     text: 'Unable to connect to Gmail. Please try again.',
    //     icon: 'error'
    //   });
    // }
    
    // Skip automatic status check until OAuth backend is ready
    // this.checkGmailStatus();
    this.isCheckingStatus = false;
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }

  open(content) {
    this.modalRef = this.modalService.show(content);
  }

  markUnread() {
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < this.emailIds.length; i++) {
      const obj = this.emailData.find(o => o.id === this.emailIds[i]);
      const index = this.emailData.indexOf(obj);
      this.emailData[index].unread = true;
    }
    this.emailIds = [];
  }

  selectMail(event, id) {
    if (event.target.checked) {
      this.emailIds.push(id);
    } else {
      this.emailIds.splice(this.emailIds.indexOf(id), 1);
    }
  }

  deleteMail() {
    const found = this.emailData.some(r => this.emailIds.indexOf(r.id) >= 0);
    if (found) {
      // tslint:disable-next-line: prefer-for-of
      for (let i = 0; i < this.emailIds.length; i++) {
        const obj = this.emailData.find(o => o.id === this.emailIds[i]);
        this.emailData.splice(this.emailData.indexOf(obj), 1);
      }
    }
    this.emailIds = [];
  }

  confirm() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.value) {
        this.deleteMail();
        Swal.fire('Deleted!', 'Mail has been deleted.', 'success');
      }
    });
  }

  /**
   * Handle on page click event
   */
  onPageChange(page: any): void {
    this.startIndex = (page - 1) * this.pageSize + 1;
    this.endIndex = (page - 1) * this.pageSize + this.pageSize;
    if (this.endIndex > this.totalRecords) {
      this.endIndex = this.totalRecords;
    }
    this.emailData = this.returnedArray.slice(this.startIndex - 1, this.endIndex - 1);
  }

  /**
   * Category Filtering  
   */
  categoryFilter(e: any, name: any) {
    var removeClass = document.querySelectorAll('.mail-list a');
    removeClass.forEach((element: any) => {
      element.classList.remove('active');
    });
    e.target.closest('.mail-list a').classList.add('active')
    if (name == 'all') {
      this.emailData = this.returnedArray
    }
    else {
      this.emailData = this.returnedArray.filter((email: any) => {
        return email.category === name;
      });
    }
  }

  // ===== GMAIL INTEGRATION METHODS =====

  /**
   * Check Gmail connection status
   */
  checkGmailStatus(): void {
    this.isCheckingStatus = true;
    console.log('📧 Checking Gmail connection status...');
    
    this.apiService.getGmailStatus().subscribe({
      next: (response: GmailStatusResponse) => {
        this.isCheckingStatus = false;
        this.isGmailConnected = response.connected;
        this.gmailEmail = response.email || '';
        
        console.log('✅ Gmail status:', response);
        
        if (this.isGmailConnected) {
          // Load Gmail messages if connected
          this.loadGmailMessages();
        } else {
          // Load mock data if not connected
          this.loadMockData();
        }
      },
      error: (error) => {
        this.isCheckingStatus = false;
        console.error('❌ Error checking Gmail status:', error);
        
        // Fallback to mock data
        this.loadMockData();
        
        Swal.fire({
          title: 'Connection Check Failed',
          text: 'Unable to check Gmail connection status. Using offline mode.',
          icon: 'warning',
          timer: 3000,
          showConfirmButton: false
        });
      }
    });
  }

  /**
   * Start Gmail OAuth flow (temporarily disabled)
   */
  connectGmail(): void {
    console.log('🔗 Gmail OAuth temporarily disabled...');
    
    Swal.fire({
      title: 'OAuth Not Ready',
      text: 'Gmail OAuth backend is not configured yet. Please wait for backend implementation.',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  }

  /**
   * Disconnect Gmail
   */
  disconnectGmail(): void {
    Swal.fire({
      title: 'Disconnect Gmail?',
      text: 'This will remove access to your Gmail account.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, disconnect'
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiService.disconnectGmail().subscribe({
          next: (response) => {
            if (response.success) {
              this.isGmailConnected = false;
              this.gmailEmail = '';
              this.gmailMessages = [];
              this.loadMockData();
              
              Swal.fire({
                title: 'Disconnected',
                text: 'Gmail account has been disconnected.',
                icon: 'success',
                timer: 2000,
                showConfirmButton: false
              });
            }
          },
          error: (error) => {
            console.error('❌ Error disconnecting Gmail:', error);
            Swal.fire({
              title: 'Disconnect Failed',
              text: 'Unable to disconnect Gmail. Please try again.',
              icon: 'error'
            });
          }
        });
      }
    });
  }

  /**
   * Load Gmail messages
   */
  loadGmailMessages(): void {
    this.isLoadingGmail = true;
    console.log('📬 Loading Gmail messages...');
    
    this.apiService.getGmailMessages(50).subscribe({
      next: (response) => {
        this.isLoadingGmail = false;
        
        if (response.success && response.messages) {
          this.gmailMessages = response.messages;
          this.convertGmailToEmailData();
          console.log('✅ Loaded Gmail messages:', response.messages.length);
        } else {
          console.warn('⚠️ No Gmail messages found');
          this.loadMockData();
        }
      },
      error: (error) => {
        this.isLoadingGmail = false;
        console.error('❌ Error loading Gmail messages:', error);
        
        // Fallback to mock data
        this.loadMockData();
        
        Swal.fire({
          title: 'Load Failed',
          text: 'Unable to load Gmail messages. Using offline mode.',
          icon: 'warning',
          timer: 3000,
          showConfirmButton: false
        });
      }
    });
  }

  /**
   * Convert Gmail messages to email data format
   */
  private convertGmailToEmailData(): void {
    this.emailData = this.gmailMessages.map((message, index) => {
      const headers = message.payload.headers;
      const fromHeader = headers.find(h => h.name.toLowerCase() === 'from');
      const subjectHeader = headers.find(h => h.name.toLowerCase() === 'subject');
      const dateHeader = headers.find(h => h.name.toLowerCase() === 'date');
      
      return {
        id: index + 1,
        gmailId: message.id,
        title: fromHeader?.value || 'Unknown Sender',
        subject: subjectHeader?.value || 'No Subject',
        snippet: message.snippet,
        date: dateHeader?.value ? new Date(dateHeader.value).toLocaleDateString() : 'Unknown Date',
        time: dateHeader?.value ? new Date(dateHeader.value).toLocaleTimeString() : 'Unknown Time',
        category: 'all',
        unread: !message.labelIds.includes('UNREAD'),
        isIcon: message.labelIds.includes('STARRED')
      };
    });
    
    this.returnedArray = this.emailData;
    this.totalRecords = this.emailData.length;
    this.onPageChange(1); // Reset to first page
  }

  /**
   * Load mock data when Gmail is not connected
   */
  private loadMockData(): void {
    this.emailData = [
      {
        id: 1,
        title: 'John Doe',
        subject: 'Tax Document Review',
        snippet: 'Please review the attached tax documents for Q4 filing...',
        category: 'important',
        time: '10:30 AM',
        date: new Date().toLocaleDateString(),
        unread: true,
        isIcon: false
      },
      {
        id: 2,
        title: 'Jane Smith',
        subject: 'Meeting Confirmation',
        snippet: 'Confirming our meeting for tomorrow at 2 PM...',
        category: 'all',
        time: '9:15 AM',
        date: new Date().toLocaleDateString(),
        unread: false,
        isIcon: true
      }
    ];
    this.returnedArray = this.emailData;
    this.totalRecords = this.emailData.length;
  }

}
