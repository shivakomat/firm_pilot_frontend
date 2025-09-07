import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface SignupRequest {
  role: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface SignupResponse {
  success: boolean;
  message?: string;
  user?: any;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  message?: string;
  token?: string;
  user?: any;
}

export interface LogoutResponse {
  success: boolean;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:9000';

  constructor(private http: HttpClient) { }

  /**
   * Register a new user with the backend API
   * @param signupData - User registration data
   */
  signup(signupData: SignupRequest): Observable<SignupResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<SignupResponse>(`${this.baseUrl}/auth/signup`, signupData, { headers });
  }

  /**
   * Login user with the backend API
   * @param loginData - User login data
   */
  login(loginData: LoginRequest): Observable<LoginResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/login`, loginData, { headers });
  }

  /**
   * Logout user with the backend API
   */
  logout(): Observable<LogoutResponse> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<LogoutResponse>(`${this.baseUrl}/auth/logout`, {}, { headers });
  }
}
