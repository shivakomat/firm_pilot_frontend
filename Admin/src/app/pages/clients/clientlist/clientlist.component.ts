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
    
    // Initialize the simplified form for your backend API
    this.createClientForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });

    // Initialize the edit form with all editable fields
    this.editClientForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email]],
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
      
      const clientData: CreateClientRequest = {
        firstName: this.createClientForm.value.firstName,
        lastName: this.createClientForm.value.lastName,
        email: this.createClientForm.value.email
      };
      
      console.log('Creating client:', clientData);
      
      // Call API to create client - POST to /clients
      this.apiService.createClient(clientData).subscribe({
        next: (response) => {
          console.log('Client created successfully:', response);
          this.loading = false;
          
          // Refresh the clients list
          this.loadClients();
          
          // Hide modal and reset form
          this.newClientModal?.hide();
          this.createClientForm.reset();
          this.submitted = false;
        },
        error: (error) => {
          console.error('Error creating client:', error);
          this.loading = false;
          // You could add user-friendly error handling here
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

  // Open edit modal and populate form with client data
  openEditModal(client: any) {
    this.selectedClient = client;
    this.editClientForm.patchValue({
      firstName: client.firstName || '',
      lastName: client.lastName || '',
      email: client.email || '',
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
