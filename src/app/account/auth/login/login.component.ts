import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService, LoginRequest } from '../../../core/services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone:true,
  imports:[CommonModule,FormsModule,ReactiveFormsModule,RouterModule]
})

/**
 * Login component
 */
export class LoginComponent implements OnInit {

  loginForm: UntypedFormGroup;
  submitted: any = false;
  error: any = '';
  successMessage: string = '';
  returnUrl: string;
  fieldTextType!: boolean;
  loading: boolean = false;

  // set the current year
  year: number = new Date().getFullYear();

  constructor(
    private formBuilder: UntypedFormBuilder, 
    private route: ActivatedRoute, 
    private router: Router, 
    private apiService: ApiService
  ) { }

  ngOnInit() {
    // Check if user is already logged in
    if (localStorage.getItem('authToken')) {
      this.router.navigate(['/dashboard']);
    }
    
    // Get return url from route parameters or default to '/dashboard'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    
    // Check for registration success message
    const message = this.route.snapshot.queryParams['message'];
    if (message) {
      this.successMessage = message;
    }
    
    // Get pre-filled email from query params (from registration)
    const prefilledEmail = this.route.snapshot.queryParams['email'] || 'user@firmpilot.com';
    
    // form validation
    this.loginForm = this.formBuilder.group({
      email: [prefilledEmail, [Validators.required, Validators.email]],
      password: ['SecurePassword123!', [Validators.required]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;
    this.error = '';

    // Stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    const loginData: LoginRequest = {
      email: this.f['email'].value,
      password: this.f['password'].value
    };

    this.apiService.login(loginData).subscribe({
      next: (response) => {
        this.loading = false;
        
        // Check if 2FA is required
        if (response.requires2FA) {
          // Handle 2FA flow - for now, just show message
          this.error = '2FA verification required. Please implement 2FA flow.';
          return;
        }
        
        // Store authentication token if provided
        if (response.token) {
          localStorage.setItem('authToken', response.token);
        }
        
        // Store user information if provided
        if (response.user) {
          localStorage.setItem('currentUser', JSON.stringify(response.user));
          
          // Check user role and redirect accordingly
          const userRole = response.user.role?.toLowerCase();
          const userType = response.user.userType?.toLowerCase();
          const roleType = response.user.roleType?.toLowerCase();
          console.log('Login successful. User role:', userRole, 'userType:', userType, 'roleType:', roleType, 'Full user:', response.user);
          
          if (userRole === 'client' || userType === 'client' || roleType === 'client') {
            // Redirect CLIENT users to client portal
            console.log('Redirecting CLIENT user to client portal');
            this.router.navigate(['/client-portal']);
          } else {
            // Redirect other users to return url or dashboard
            console.log('Redirecting non-CLIENT user to dashboard');
            this.router.navigate([this.returnUrl]);
          }
        } else {
          // Fallback if no user data
          this.router.navigate([this.returnUrl]);
        }
      },
      error: (error) => {
        this.loading = false;
        this.error = error.error?.message || 'Login failed. Please check your credentials.';
      }
    });
  }

  /**
 * Password Hide/Show
 */
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}
