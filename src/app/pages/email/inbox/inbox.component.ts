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

  constructor(private modalService: BsModalService) {
  }

  ngOnInit() {
    this.editor = new Editor();
    this.breadCrumbItems = [{ label: 'Email' }, { label: 'Inbox', active: true }];
    
    // Mock email data for now
    this.emailData = [
      {
        id: 1,
        name: 'John Doe',
        subject: 'Tax Document Review',
        message: 'Please review the attached tax documents...',
        category: 'important',
        time: '10:30 AM'
      },
      {
        id: 2,
        name: 'Jane Smith',
        subject: 'Meeting Confirmation',
        message: 'Confirming our meeting for tomorrow...',
        category: 'all',
        time: '9:15 AM'
      }
    ];
    this.returnedArray = this.emailData;
    this.totalRecords = this.emailData.length;
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


}
