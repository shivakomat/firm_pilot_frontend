import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, AcceptInvitationRequest } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class ClientRegistrationComponent implements OnInit {
  registrationForm!: UntypedFormGroup;
  submitted = false;
  loading = false;
  error = '';
  success = false;
  
  invitationToken: string = '';
  invitation: any = null;
  client: any = null;
  invitationLoading = true;
  invitationError = '';

  constructor(
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    // Get invitation token from URL
    this.invitationToken = this.route.snapshot.params['token'];
    
    if (!this.invitationToken) {
      this.invitationError = 'Invalid invitation link. Please check your invitation email.';
      this.invitationLoading = false;
      return;
    }

    // Initialize registration form
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });

    // Load invitation details
    this.loadInvitationDetails();
  }

  /**
   * Custom validator to check if passwords match
   */
  passwordMatchValidator(form: UntypedFormGroup) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }
    
    return null;
  }

  /**
   * Load invitation details using the token
   */
  loadInvitationDetails(): void {
    this.invitationLoading = true;
    this.invitationError = '';

    this.apiService.getInvitationByToken(this.invitationToken).subscribe({
      next: (response) => {
        console.log('Invitation details loaded:', response);
        if (response.success && response.invitation && response.client) {
          this.invitation = response.invitation;
          this.client = response.client;
          
          // Pre-fill form with client information
          this.registrationForm.patchValue({
            firstName: this.client.firstName || '',
            lastName: this.client.lastName || ''
          });
          
          // Check invitation status
          if (this.invitation.status === 'accepted') {
            this.invitationError = 'This invitation has already been accepted. Please contact your accountant if you need assistance.';
          } else if (this.invitation.status === 'expired') {
            this.invitationError = 'This invitation has expired. Please contact your accountant to request a new invitation.';
          }
        } else {
          this.invitationError = 'Invalid or expired invitation. Please check your invitation link.';
        }
        this.invitationLoading = false;
      },
      error: (error) => {
        console.error('Error loading invitation details:', error);
        this.invitationError = 'Unable to load invitation details. Please check your invitation link or try again later.';
        this.invitationLoading = false;
      }
    });
  }

  /**
   * Handle form submission to accept invitation and register
   */
  onSubmit(): void {
    this.submitted = true;
    this.error = '';

    if (this.registrationForm.invalid) {
      return;
    }

    this.loading = true;

    const registrationData: AcceptInvitationRequest = {
      firstName: this.registrationForm.value.firstName,
      lastName: this.registrationForm.value.lastName,
      password: this.registrationForm.value.password
    };

    this.apiService.acceptInvitation(this.invitationToken, registrationData).subscribe({
      next: (response) => {
        console.log('Invitation accepted:', response);
        if (response.success) {
          this.success = true;
          this.loading = false;
          
          // Redirect to login page after a delay
          setTimeout(() => {
            this.router.navigate(['/account/login'], { 
              queryParams: { 
                message: 'Registration successful! Please log in with your credentials.',
                email: this.client?.email 
              }
            });
          }, 3000);
        } else {
          this.error = response.message || 'Registration failed. Please try again.';
          this.loading = false;
        }
      },
      error: (error) => {
        console.error('Error accepting invitation:', error);
        this.error = error.error?.message || 'Registration failed. Please try again.';
        this.loading = false;
      }
    });
  }

  /**
   * Get form control for easy access in template
   */
  get f() { return this.registrationForm.controls; }

  /**
   * Check if invitation is valid for registration
   */
  isInvitationValid(): boolean {
    return this.invitation && 
           (this.invitation.status === 'pending' || this.invitation.status === 'sent') &&
           !this.invitationError;
  }

  /**
   * Format client name for display
   */
  getClientDisplayName(): string {
    if (!this.client) return '';
    return `${this.client.firstName || ''} ${this.client.lastName || ''}`.trim();
  }

  /**
   * Get firm name (could be dynamic based on invitation)
   */
  getFirmName(): string {
    return 'Firm Pilot'; // This could be dynamic based on the invitation
  }
}
