import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService, LoginRequest } from '../../../core/services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone:true,
  imports:[CommonModule,FormsModule,ReactiveFormsModule]
})

/**
 * Login component
 */
export class LoginComponent implements OnInit {

  loginForm: UntypedFormGroup;
  submitted: any = false;
  error: any = '';
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
      this.router.navigate(['/']);
    }
    
    // Get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    
    // form validation
    this.loginForm = this.formBuilder.group({
      email: ['user@firmpilot.com', [Validators.required, Validators.email]],
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
        
        // Store authentication token if provided
        if (response.token) {
          localStorage.setItem('authToken', response.token);
        }
        
        // Store user information if provided
        if (response.user) {
          localStorage.setItem('currentUser', JSON.stringify(response.user));
        }
        
        // Redirect to return url or dashboard
        this.router.navigate([this.returnUrl]);
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
