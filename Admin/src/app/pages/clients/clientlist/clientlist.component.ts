import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { PagetitleComponent } from 'src/app/shared/ui/pagetitle/pagetitle.component';
import { ApiService, CreateClientRequest, Client } from 'src/app/core/services/api.service';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';

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

  @ViewChild('newClientModal', { static: false }) newClientModal?: ModalDirective;
  @ViewChild('editClientModal', { static: false }) editClientModal?: ModalDirective;

  constructor(private apiService: ApiService, private formBuilder: UntypedFormBuilder) {}



  searchClients(): void {
    if (!this.searchTerm.trim()) {
      this.filteredClients = [...this.clients];
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredClients = this.clients.filter(client => 
        client.firstName?.toLowerCase().includes(term) ||
        client.lastName?.toLowerCase().includes(term) ||
        client.email?.toLowerCase().includes(term)
      );
    }
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
            // Reset form and close modal
            this.createClientForm.reset();
            this.createClientForm.patchValue({
              entityType: 'INDIVIDUAL',
              status: 'invited'
            });
            
            // Reload clients list
            this.loadClients();
            
            // Close modal (you might need to adjust this based on your modal implementation)
            // this.closeModal();
          } else {
            this.error = response.message || 'Failed to create client';
          }
        },
        error: (error) => {
          this.loading = false;
          console.error('Error creating client:', error);
          
          // Check if it's an authentication error
          if (error.status === 401 || error.status === 403) {
            this.error = 'Authentication failed. Please log in again.';
            // Optionally redirect to login
            // this.router.navigate(['/auth/login']);
          } else {
            this.error = error.error?.message || 'Failed to create client. Please check the console for details.';
          }
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
          this.filteredClients = [...this.clients];
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
          this.editClientModal?.hide();
          this.loadClients(); // Refresh the client list
          this.editClientForm.reset();
          this.selectedClient = null;
        }
        this.editLoading = false;
      },
      error: (error) => {
        console.error('Error updating client:', error);
        this.editLoading = false;
      }
    });
  }
}
