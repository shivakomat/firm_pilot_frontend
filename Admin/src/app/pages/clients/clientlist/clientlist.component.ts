import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { PagetitleComponent } from 'src/app/shared/ui/pagetitle/pagetitle.component';
import { CrudService } from 'src/app/core/services/crud.service';
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
  clients: any[] = [];
  filteredClients: any[] = [];
  searchTerm: string = '';
  createClientForm!: UntypedFormGroup;
  submitted = false;

  @ViewChild('newClientModal', { static: false }) newClientModal?: ModalDirective;

  constructor(private api: CrudService, private formBuilder: UntypedFormBuilder) {}

  formatPhoneNumber(phone: string): string {
    if (!phone) return '';
    // Remove all non-digits
    const cleaned = phone.replace(/\D/g, '');
    // Format as (XXX) XXX-XXXX
    if (cleaned.length === 10) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    }
    return phone; // Return original if not 10 digits
  }

  searchClients(): void {
    if (!this.searchTerm.trim()) {
      this.filteredClients = [...this.clients];
    } else {
      const term = this.searchTerm.toLowerCase();
      this.filteredClients = this.clients.filter(client => 
        client.name?.toLowerCase().includes(term) ||
        client.email?.toLowerCase().includes(term) ||
        client.phone_number?.includes(term) ||
        client.status?.toLowerCase().includes(term)
      );
    }
  }

  // Format phone number input as user types
  formatPhoneInput(event: any): void {
    let value = event.target.value.replace(/\D/g, ''); // Remove non-digits
    
    if (value.length >= 6) {
      value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
    } else if (value.length >= 3) {
      value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    
    event.target.value = value;
    this.createClientForm.patchValue({ phone_number: value });
  }

  // Format budget input with commas
  formatBudgetInput(event: any): void {
    let value = event.target.value.replace(/[^\d]/g, ''); // Remove non-digits
    
    if (value) {
      // Add commas for thousands
      value = parseInt(value).toLocaleString();
    }
    
    event.target.value = value;
    this.createClientForm.patchValue({ budget: value.replace(/,/g, '') }); // Store without commas
  }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Clients' }, { label: 'Clients List', active: true }];
    
    // Initialize the form
    this.createClientForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.pattern(/^\(\d{3}\) \d{3}-\d{4}$/)]],
      budget: ['', [Validators.required]],
      event_date: ['', [Validators.required]], // Project deadline
      status: ['New', [Validators.required]],
      notes: [''],
      business_id: [1] // Default business ID
    });

// Load initial clients data
    this.loadClients();
  }

  // Save Client
  saveClient() {
    this.submitted = true;
    
    if (this.createClientForm.valid) {
      const formData = this.createClientForm.value;
      
      // Format event_date from YYYY-MM-DD to YYYYMMDD
      const eventDate = new Date(formData.event_date);
      const eventDateFormatted = eventDate.getFullYear().toString() + 
                                (eventDate.getMonth() + 1).toString().padStart(2, '0') + 
                                eventDate.getDate().toString().padStart(2, '0');
      
      // Format current date for created_date and modified_date
      const currentDate = new Date();
      const currentDateFormatted = currentDate.getFullYear().toString() + 
                                  (currentDate.getMonth() + 1).toString().padStart(2, '0') + 
                                  currentDate.getDate().toString().padStart(2, '0');
      
      // Clean phone number (remove formatting for API)
      const cleanPhoneNumber = formData.phone_number.replace(/\D/g, '');
      
      // Prepare client data for API
      const clientData = {
        name: formData.name,
        phone_number: cleanPhoneNumber,
        email: formData.email,
        budget: parseInt(formData.budget) || 0, // Ensure it's a number
        event_date: parseInt(eventDateFormatted), // Project deadline as YYYYMMDD number
        status: formData.status,
        notes: formData.notes || '',
        business_id: formData.business_id,
        created_date: parseInt(currentDateFormatted),
        modified_date: parseInt(currentDateFormatted)
      };
      
      console.log('Saving client with formatted data:', clientData);
      
      // Call API to save client - POST to /businesses/clients
      this.api.addData('/businesses/clients', clientData).subscribe({
        next: (response) => {
          console.log('Client saved successfully:', response);
          // Refresh the clients list
          this.loadClients();
          // Hide modal and reset form
          this.newClientModal?.hide();
          this.createClientForm.reset();
          this.createClientForm.patchValue({ status: 'New', business_id: 1 });
          this.submitted = false;
        },
        error: (error) => {
          console.error('Error saving client:', error);
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
    this.api.fetchData('/businesses/clients/1').subscribe({
      next: (data) => {
        console.log('API Response:', data);
        // Parse the backend response structure: { data: [[{...}, 1]], msg: "..." }
        if (data && (data as any).data && Array.isArray((data as any).data)) {
          // Extract from data.data[0] and filter out non-objects
          const nestedArray = (data as any).data[0];
          if (Array.isArray(nestedArray)) {
            this.clients = nestedArray.filter(item => typeof item === 'object' && item !== null && item.id);
            this.filteredClients = [...this.clients]; // Initialize filtered list
          } else {
            this.clients = [];
            this.filteredClients = [];
          }
        } else {
          this.clients = [];
          this.filteredClients = [];
        }
        console.log('Parsed clients:', this.clients);
      },
      error: (error) => {
        console.error('API Error:', error);
      }
    });
  }
}
