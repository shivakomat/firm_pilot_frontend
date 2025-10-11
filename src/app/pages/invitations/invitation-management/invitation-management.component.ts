import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagetitleComponent } from 'src/app/shared/ui/pagetitle/pagetitle.component';
import { ApiService, Invitation } from 'src/app/core/services/api.service';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-invitation-management',
  templateUrl: './invitation-management.component.html',
  styleUrls: ['./invitation-management.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PagetitleComponent, ModalModule]
})
export class InvitationManagementComponent implements OnInit {
  breadCrumbItems: any[];
  invitations: Invitation[] = [];
  filteredInvitations: Invitation[] = [];
  searchTerm: string = '';
  loading = false;
  error = '';

  // Filter options
  statusFilter: string = 'all';
  statusOptions = [
    { value: 'all', label: 'All Invitations' },
    { value: 'pending', label: 'Pending' },
    { value: 'sent', label: 'Sent' },
    { value: 'accepted', label: 'Accepted' },
    { value: 'expired', label: 'Expired' }
  ];

  // Modal properties
  @ViewChild('resendInvitationModal', { static: false }) resendInvitationModal?: ModalDirective;
  selectedInvitation: Invitation | null = null;
  resendInvitationForm: FormGroup;
  resendLoading = false;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    // Initialize the resend invitation form
    this.resendInvitationForm = this.formBuilder.group({
      emailTemplate: ['Dear {clientName},\n\nYou have been invited to access our client portal. Please click the link below to get started:\n\n{invitationLink}\n\nThis invitation will expire on {expiryDate}.\n\nBest regards,\n{firmName}', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: 'Invitations' }, 
      { label: 'Invitation Management', active: true }
    ];
    
    this.loadInvitations();
  }

  /**
   * Load all invitations from the API
   */
  loadInvitations(): void {
    this.loading = true;
    this.error = '';

    this.apiService.getInvitations().subscribe({
      next: (response) => {
        console.log('Invitations API Response:', response);
        console.log('Response type:', typeof response);
        console.log('Response keys:', Object.keys(response || {}));
        
        if (response && response.success && response.invitations) {
          console.log('Invitations array:', response.invitations);
          console.log('Invitations count:', response.invitations.length);
          this.invitations = response.invitations;
          this.applyFilters();
        } else {
          console.warn('No invitations found in response or response format unexpected');
          this.invitations = [];
          this.filteredInvitations = [];
        }
        this.loading = false;
      },
      error: (error) => {
        console.error('Error loading invitations:', error);
        this.error = 'Failed to load invitations. Please try again.';
        this.loading = false;

        // Handle authentication errors
        if (error.status === 401 || error.status === 403) {
          this.error = 'Authentication failed. Please log in again.';
        }
      }
    });
  }

  /**
   * Apply search and status filters
   */
  applyFilters(): void {
    let filtered = [...this.invitations];

    // Apply status filter
    if (this.statusFilter !== 'all') {
      filtered = filtered.filter(invitation => invitation.status === this.statusFilter);
    }

    // Apply search filter
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(invitation => 
        invitation.clientName?.toLowerCase().includes(term) ||
        invitation.email?.toLowerCase().includes(term)
      );
    }

    this.filteredInvitations = filtered;
  }

  /**
   * Handle search input change
   */
  onSearchChange(): void {
    this.applyFilters();
  }

  /**
   * Handle status filter change
   */
  onStatusFilterChange(): void {
    this.applyFilters();
  }

  /**
   * Check if invitation can be resent
   */
  canResendInvitation(invitation: Invitation): boolean {
    return invitation.status === 'pending' || invitation.status === 'expired';
  }

  /**
   * Resend an invitation
   */
  resendInvitation(invitation: Invitation): void {
    console.log('Sending invitation to:', invitation.clientName);
    
    if (!invitation.id) {
      console.error('No invitation ID provided');
      return;
    }

    // Show confirmation before sending
    if (!confirm(`Send invitation email to ${invitation.clientName || invitation.email}?`)) {
      return;
    }

    this.apiService.resendInvitation(invitation.id).subscribe({
      next: (response) => {
        if (response.success) {
          this.loadInvitations(); // Refresh the list
          console.log('Invitation sent successfully!');
          alert(`Invitation email sent successfully to ${invitation.clientName || invitation.email}!`);
        }
      },
      error: (error) => {
        console.error('Error sending invitation:', error);
        alert('Failed to send invitation email. Please try again.');
      }
    });
  }

  /**
   * Navigate to client detail page
   */
  viewClientDetail(invitation: Invitation): void {
    if (invitation.clientId) {
      this.router.navigate(['/clients/detail', invitation.clientId]);
    }
  }

  /**
   * Get CSS class for invitation status badge
   */
  getInvitationStatusClass(status: string): string {
    switch (status) {
      case 'pending':
        return 'bg-warning';
      case 'sent':
        return 'bg-info';
      case 'accepted':
        return 'bg-success';
      case 'expired':
        return 'bg-danger';
      default:
        return 'bg-secondary';
    }
  }

  /**
   * Get display text for invitation status
   */
  getInvitationStatusText(status: string): string {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'sent':
        return 'Sent';
      case 'accepted':
        return 'Accepted';
      case 'expired':
        return 'Expired';
      default:
        return 'Unknown';
    }
  }

  /**
   * Open resend invitation modal
   */
  openResendModal(invitation: Invitation): void {
    this.selectedInvitation = invitation;
    this.resendInvitationModal?.show();
  }

  /**
   * Send invitation from modal
   */
  sendInvitationFromModal(): void {
    if (!this.selectedInvitation?.id) {
      console.error('No invitation selected');
      return;
    }

    this.resendLoading = true;

    this.apiService.resendInvitation(this.selectedInvitation.id).subscribe({
      next: (response) => {
        if (response.success) {
          this.loadInvitations(); // Refresh the list
          console.log('Invitation sent successfully!');
          alert(`Invitation email sent successfully to ${this.selectedInvitation?.clientName || this.selectedInvitation?.email}!`);
          this.resendInvitationModal?.hide();
          this.selectedInvitation = null;
        }
        this.resendLoading = false;
      },
      error: (error) => {
        console.error('Error sending invitation:', error);
        alert('Failed to send invitation email. Please try again.');
        this.resendLoading = false;
      }
    });
  }

  /**
   * Get summary statistics
   */
  getInvitationStats() {
    const total = this.invitations.length;
    const pending = this.invitations.filter(inv => inv.status === 'pending').length;
    const sent = this.invitations.filter(inv => inv.status === 'sent').length;
    const accepted = this.invitations.filter(inv => inv.status === 'accepted').length;
    const expired = this.invitations.filter(inv => inv.status === 'expired').length;

    return { total, pending, sent, accepted, expired };
  }
}
