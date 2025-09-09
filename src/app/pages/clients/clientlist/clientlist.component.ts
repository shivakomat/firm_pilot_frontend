import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { PagetitleComponent } from 'src/app/shared/ui/pagetitle/pagetitle.component';
import { ApiService, CreateClientRequest, Client } from 'src/app/core/services/api.service';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-clientlist',
  templateUrl: './clientlist.component.html',
  styleUrls: ['./clientlist.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PagetitleComponent, ModalModule]
})
export class ClientlistComponent implements OnInit {
  breadCrumbItems: any[];
  clients: Client[] = [];
  filteredClients: Client[] = [];
  searchTerm: string = '';
  
  // Filter options
  statusFilter: string = 'all';
  statusOptions = [
    { value: 'all', label: 'All Clients' },
    { value: 'invited', label: 'Invited' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'pending', label: 'Pending' }
  ];

  // Form for creating new clients
  createClientForm!: UntypedFormGroup;
  submitted = false;
  loading = false;
  error = '';

  // Form for editing existing clients
  editClientForm!: UntypedFormGroup;
  editSubmitted = false;
  editLoading = false;
  selectedClient: any = null;

  // Form for inviting clients
  inviteClientForm!: UntypedFormGroup;
  inviteSubmitted = false;
  inviteLoading = false;

  @ViewChild('newClientModal', { static: false }) newClientModal?: ModalDirective;
  @ViewChild('editClientModal', { static: false }) editClientModal?: ModalDirective;
  @ViewChild('inviteClientModal', { static: false }) inviteClientModal?: ModalDirective;

  constructor(private apiService: ApiService, private formBuilder: UntypedFormBuilder) {}



  /**
   * Apply search and status filters
   */
  applyFilters(): void {
    let filtered = [...this.clients];

    // Apply status filter
    if (this.statusFilter !== 'all') {
      filtered = filtered.filter(client => client.status === this.statusFilter);
    }

    // Apply search filter
    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase();
      filtered = filtered.filter(client => 
        client.firstName?.toLowerCase().includes(term) ||
        client.lastName?.toLowerCase().includes(term) ||
        client.email?.toLowerCase().includes(term)
      );
    }

    this.filteredClients = filtered;
  }

  /**
   * Handle search input change
   */
  searchClients(): void {
    this.applyFilters();
  }

  /**
   * Handle status filter change
   */
  onStatusFilterChange(): void {
    this.applyFilters();
  }



  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Clients' }, { label: 'Clients List', active: true }];
    
    // Initialize the form for your backend API with all required fields
    this.createClientForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: [''], // Optional field
      entityType: ['', [Validators.required]],
      status: ['invited', [Validators.required]] // Default to 'invited'
    });

    // Initialize the edit form with all editable fields
    this.editClientForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email]],
      phoneNumber: [''], // Optional field
      entityType: [''],
      status: ['']
    });

    // Initialize the invitation form
    this.inviteClientForm = this.formBuilder.group({
      emailTemplate: [this.getDefaultEmailTemplate()]
    });

    // Load initial clients data
    this.loadClients();
  }

  // Save Client
  saveClient() {
    this.submitted = true;
    
    if (this.createClientForm.valid) {
      this.loading = true;
      this.error = '';
      
      // Debug token status before making request
      this.apiService.debugTokenStatus();
      
      // Build the client data object with required fields
      const clientData: CreateClientRequest = {
        email: this.createClientForm.value.email,
        firstName: this.createClientForm.value.firstName,
        lastName: this.createClientForm.value.lastName
      };
      
      // Only add optional fields if they have values
      if (this.createClientForm.value.phoneNumber && this.createClientForm.value.phoneNumber.trim()) {
        clientData.phone = this.cleanPhoneNumber(this.createClientForm.value.phoneNumber);
      }
      
      if (this.createClientForm.value.entityType) {
        clientData.entityType = this.createClientForm.value.entityType;
      }
      
      if (this.createClientForm.value.status) {
        clientData.status = this.createClientForm.value.status;
      }

      this.apiService.createClient(clientData).subscribe({
        next: (response) => {
          this.loading = false;
          if (response.success) {
            // Show success message
            Swal.fire({
              title: 'Success!',
              text: 'Client has been created successfully.',
              icon: 'success',
              confirmButtonColor: '#3085d6',
              confirmButtonText: 'OK'
            });

            // Reset form and close modal
            this.createClientForm.reset();
            this.createClientForm.patchValue({
              entityType: 'INDIVIDUAL',
              status: 'invited'
            });
            this.submitted = false;
            
            // Reload clients list
            this.loadClients();
            
            // Close modal
            this.newClientModal?.hide();
          } else {
            this.error = response.message || 'Failed to create client';
            Swal.fire({
              title: 'Error!',
              text: this.error,
              icon: 'error',
              confirmButtonColor: '#d33',
              confirmButtonText: 'OK'
            });
          }
        },
        error: (error) => {
          this.loading = false;
          console.error('Error creating client:', error);
          
          let errorMessage = 'Failed to create client. Please try again.';
          
          // Check if it's an authentication error
          if (error.status === 401 || error.status === 403) {
            errorMessage = 'Authentication failed. Please log in again.';
          } else if (error.error?.message) {
            errorMessage = error.error.message;
          } else if (error.message) {
            errorMessage = error.message;
          }
          
          this.error = errorMessage;
          
          // Show error modal
          Swal.fire({
            title: 'Error!',
            text: errorMessage,
            icon: 'error',
            confirmButtonColor: '#d33',
            confirmButtonText: 'OK'
          });
        }
      });
    } else {
      console.log('Form is invalid');
      // Mark all fields as touched to show validation errors
      Object.keys(this.createClientForm.controls).forEach(key => {
        this.createClientForm.get(key)?.markAsTouched();
      });
    }
  }

  // Load clients data
  loadClients() {
    this.apiService.getClients().subscribe({
      next: (response) => {
        console.log('Clients response:', response);
        if (response.success && response.clients) {
          this.clients = response.clients;
          this.applyFilters();
        } else {
          console.warn('No clients found in response');
          this.clients = [];
          this.filteredClients = [];
        }
      },
      error: (error) => {
        console.error('Error loading clients:', error);
        this.clients = [];
        this.filteredClients = [];
      }
    });
  }

  // Convenience getters for easy access to form fields
  get f() { return this.createClientForm.controls; }
  get ef() { return this.editClientForm.controls; }

  // Format phone number as user types
  formatPhoneNumber(event: any): void {
    let value = event.target.value.replace(/\D/g, ''); // Remove all non-digits
    
    if (value.length >= 6) {
      value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
    } else if (value.length >= 3) {
      value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    
    // Limit to 14 characters: (XXX) XXX-XXXX
    if (value.length > 14) {
      value = value.slice(0, 14);
    }
    
    event.target.value = value;
    
    // Update form control with formatted value
    if (event.target.id === 'client-phone-input') {
      this.createClientForm.patchValue({ phoneNumber: value });
    } else if (event.target.id === 'editPhoneNumber') {
      this.editClientForm.patchValue({ phoneNumber: value });
    }
  }

  // Clean phone number for API (remove formatting)
  cleanPhoneNumber(phone: string): string {
    return phone ? phone.replace(/\D/g, '') : '';
  }

  // Format phone number for display in table
  formatPhoneForDisplay(phone: string): string {
    if (!phone) return 'N/A';
    
    // Remove all non-digits
    const cleaned = phone.replace(/\D/g, '');
    
    // Format as (XXX) XXX-XXXX for 10-digit numbers
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    
    // Return original if not 10 digits
    return phone || 'N/A';
  }

  // Open edit modal and populate form with client data
  openEditModal(client: any) {
    this.selectedClient = client;
    this.editClientForm.patchValue({
      firstName: client.firstName || '',
      lastName: client.lastName || '',
      email: client.email || '',
      phoneNumber: client.phone || '', // Backend uses 'phone' field name
      entityType: client.entityType || '',
      status: client.status || ''
    });
    this.editSubmitted = false;
    this.editClientModal?.show();
  }

  // Update existing client
  updateClient() {
    this.editSubmitted = true;

    if (this.editClientForm.invalid) {
      return;
    }

    this.editLoading = true;
    const clientData = {
      firstName: this.ef['firstName'].value,
      lastName: this.ef['lastName'].value,
      email: this.ef['email'].value || undefined,
      phone: this.ef['phoneNumber'].value ? this.cleanPhoneNumber(this.ef['phoneNumber'].value) : undefined,
      entityType: this.ef['entityType'].value || undefined,
      status: this.ef['status'].value || undefined
    };

    this.apiService.updateClient(this.selectedClient.id, clientData).subscribe({
      next: (response) => {
        console.log('Client updated:', response);
        if (response.success) {
          // Show success message
          Swal.fire({
            title: 'Success!',
            text: 'Client has been updated successfully.',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          });

          this.editClientModal?.hide();
          this.loadClients(); // Refresh the client list
          this.editClientForm.reset();
          this.selectedClient = null;
        } else {
          // Show error message
          Swal.fire({
            title: 'Error!',
            text: response.message || 'Failed to update client.',
            icon: 'error',
            confirmButtonColor: '#d33',
            confirmButtonText: 'OK'
          });
        }
        this.editLoading = false;
      },
      error: (error) => {
        console.error('Error updating client:', error);
        this.editLoading = false;
        
        let errorMessage = 'Failed to update client. Please try again.';
        if (error.error?.message) {
          errorMessage = error.error.message;
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        // Show error modal
        Swal.fire({
          title: 'Error!',
          text: errorMessage,
          icon: 'error',
          confirmButtonColor: '#d33',
          confirmButtonText: 'OK'
        });
      }
    });
  }

  // Invitation-related methods

  /**
   * Get default email template for invitations
   */
  getDefaultEmailTemplate(): string {
    return `Dear {clientName},

You have been invited to access your client portal for Firm Pilot.

As a valued client, you now have secure access to:
• View your account information
• Upload and manage documents
• Track the progress of your services
• Communicate directly with our team

To get started, please click the link below to set up your account:
{invitationLink}

This invitation will expire on {expiryDate}. If you have any questions, please don't hesitate to contact us.

Best regards,
{firmName}`;
  }

  /**
   * Open invitation modal for a client
   */
  openInviteModal(client: Client) {
    this.selectedClient = client;
    
    // Reset form with default values
    this.inviteClientForm.patchValue({
      emailTemplate: this.getDefaultEmailTemplate()
    });
    
    this.inviteSubmitted = false;
    this.inviteClientModal?.show();
  }

  /**
   * Send invitation to client
   */
  sendInvitation() {
    this.inviteSubmitted = true;

    if (this.inviteClientForm.invalid || !this.selectedClient?.id) {
      return;
    }

    this.inviteLoading = true;
    
    const inviteData = {
      message: this.inviteClientForm.value.emailTemplate || undefined
    };

    this.apiService.inviteClient(this.selectedClient.id, inviteData).subscribe({
      next: (response) => {
        console.log('Invitation sent:', response);
        if (response.success) {
          // Show success message
          Swal.fire({
            title: 'Success!',
            text: 'Invitation has been sent successfully.',
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK'
          });

          this.inviteClientModal?.hide();
          this.loadClients(); // Refresh the client list to update invitation status
          this.inviteClientForm.reset();
          this.selectedClient = null;
        } else {
          // Show error message
          Swal.fire({
            title: 'Error!',
            text: response.message || 'Failed to send invitation.',
            icon: 'error',
            confirmButtonColor: '#d33',
            confirmButtonText: 'OK'
          });
        }
        this.inviteLoading = false;
      },
      error: (error) => {
        console.error('Error sending invitation:', error);
        this.inviteLoading = false;
        
        let errorMessage = 'Failed to send invitation. Please try again.';
        
        // Handle authentication errors
        if (error.status === 401 || error.status === 403) {
          errorMessage = 'Authentication failed. Please log in again.';
        } else if (error.error?.message) {
          errorMessage = error.error.message;
        } else if (error.message) {
          errorMessage = error.message;
        }
        
        // Show error modal
        Swal.fire({
          title: 'Error!',
          text: errorMessage,
          icon: 'error',
          confirmButtonColor: '#d33',
          confirmButtonText: 'OK'
        });
      }
    });
  }

  /**
   * Get CSS class for invitation status badge
   */
  getInvitationStatusClass(status?: string): string {
    switch (status) {
      case 'pending':
        return 'bg-warning';
      case 'sent':
        return 'bg-info';
      case 'accepted':
        return 'bg-success';
      case 'expired':
        return 'bg-danger';
      case 'not_invited':
      default:
        return 'bg-secondary';
    }
  }

  /**
   * Get display text for invitation status
   */
  getInvitationStatusText(status?: string): string {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'sent':
        return 'Sent';
      case 'accepted':
        return 'Accepted';
      case 'expired':
        return 'Expired';
      case 'not_invited':
        return 'Not Invited';
      default:
        return 'Not Invited';
    }
  }

  /**
   * Get form controls for invitation form (convenience getter)
   */
  get if() { return this.inviteClientForm.controls; }

  /**
   * Get summary statistics for clients
   */
  getClientStats() {
    const total = this.clients.length;
    const invited = this.clients.filter(client => client.status === 'invited').length;
    const active = this.clients.filter(client => client.status === 'active').length;
    const inactive = this.clients.filter(client => client.status === 'inactive').length;
    const pending = this.clients.filter(client => client.status === 'pending').length;

    return { total, invited, active, inactive, pending };
  }

  /**
   * Get CSS class for client status badge
   */
  getClientStatusClass(status?: string): string {
    switch (status) {
      case 'active':
        return 'bg-success';
      case 'invited':
        return 'bg-info';
      case 'pending':
        return 'bg-warning';
      case 'inactive':
        return 'bg-secondary';
      default:
        return 'bg-secondary';
    }
  }

  /**
   * Get display text for client status
   */
  getClientStatusText(status?: string): string {
    switch (status) {
      case 'active':
        return 'Active';
      case 'invited':
        return 'Invited';
      case 'pending':
        return 'Pending';
      case 'inactive':
        return 'Inactive';
      default:
        return 'Unknown';
    }
  }
}
