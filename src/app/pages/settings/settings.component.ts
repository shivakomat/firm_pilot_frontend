import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { PagetitleComponent } from 'src/app/shared/ui/pagetitle/pagetitle.component';
import { LoaderComponent } from 'src/app/shared/ui/loader/loader.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  standalone: true,
  imports: [CommonModule, PagetitleComponent, LoaderComponent]
})
export class SettingsComponent implements OnInit {
  modalRef?: BsModalRef;
  @ViewChild('emailIntegrationModal') emailIntegrationModal: TemplateRef<any>;

  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Integration status
  isGmailConnected: boolean = false;
  isCalendarConnected: boolean = false;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Settings', active: true }];
  }

  /**
   * Open email integration modal
   */
  openEmailIntegrationModal() {
    this.modalRef = this.modalService.show(this.emailIntegrationModal);
  }

  /**
   * Connect Gmail account
   */
  connectGmail() {
    // This would integrate with Google OAuth2 API
    // For now, show a success message
    Swal.fire({
      icon: 'info',
      title: 'Gmail Integration',
      text: 'Gmail integration will be implemented in the next phase. This will allow you to sync your Gmail emails and manage client communications.',
      confirmButtonColor: '#556ee6'
    });
    this.modalRef?.hide();
  }

  /**
   * Connect Google Calendar
   */
  connectCalendar() {
    // This would integrate with Google Calendar API
    // For now, show a success message
    Swal.fire({
      icon: 'info',
      title: 'Calendar Integration',
      text: 'Google Calendar integration will be implemented in the next phase. This will allow you to sync your calendar events.',
      confirmButtonColor: '#556ee6'
    });
  }

  /**
   * Disconnect Gmail account
   */
  disconnectGmail() {
    Swal.fire({
      title: 'Disconnect Gmail?',
      text: 'This will remove access to your Gmail account. You can reconnect at any time.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f46a6a',
      cancelButtonColor: '#556ee6',
      confirmButtonText: 'Yes, disconnect'
    }).then((result) => {
      if (result.isConfirmed) {
        this.isGmailConnected = false;
        Swal.fire('Disconnected!', 'Gmail account has been disconnected.', 'success');
      }
    });
  }

  /**
   * Disconnect Google Calendar
   */
  disconnectCalendar() {
    Swal.fire({
      title: 'Disconnect Calendar?',
      text: 'This will remove access to your Google Calendar. You can reconnect at any time.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f46a6a',
      cancelButtonColor: '#556ee6',
      confirmButtonText: 'Yes, disconnect'
    }).then((result) => {
      if (result.isConfirmed) {
        this.isCalendarConnected = false;
        Swal.fire('Disconnected!', 'Google Calendar has been disconnected.', 'success');
      }
    });
  }
}
