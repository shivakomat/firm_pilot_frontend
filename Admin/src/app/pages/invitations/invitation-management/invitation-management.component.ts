import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PagetitleComponent } from 'src/app/shared/ui/pagetitle/pagetitle.component';
import { ApiService, Invitation } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-invitation-management',
  templateUrl: './invitation-management.component.html',
  styleUrls: ['./invitation-management.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, PagetitleComponent]
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

  constructor(private apiService: ApiService) {}

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
        console.log('Invitations loaded:', response);
        if (response.success && response.invitations) {
          this.invitations = response.invitations;
          this.applyFilters();
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
        invitation.clientEmail?.toLowerCase().includes(term)
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
   * Resend an invitation
   */
  resendInvitation(invitation: Invitation): void {
    if (!invitation.id) return;

    const resendData = {
      message: invitation.message // Use existing message or could be customized
    };

    this.apiService.resendInvitation(invitation.id, resendData).subscribe({
      next: (response) => {
        console.log('Invitation resent:', response);
        if (response.success) {
          this.loadInvitations(); // Refresh the list
          console.log('Invitation resent successfully!');
        }
      },
      error: (error) => {
        console.error('Error resending invitation:', error);
        
        // Handle authentication errors
        if (error.status === 401 || error.status === 403) {
          console.error('Authentication failed. Please log in again.');
        }
      }
    });
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
   * Check if invitation can be resent
   */
  canResendInvitation(invitation: Invitation): boolean {
    return invitation.status === 'pending' || invitation.status === 'sent' || invitation.status === 'expired';
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
