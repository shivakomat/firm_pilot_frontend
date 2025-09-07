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

export interface CreateClientRequest {
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  entityType?: string;
  status?: string;
}

export interface CreateClientResponse {
  success: boolean;
  message?: string;
  client?: any;
}

export interface Client {
  id?: number;
  accountantId?: number;
  email?: string;
  phone?: string;
  firstName: string;
  lastName: string;
  entityType?: string;
  status?: string;
  invitationStatus?: 'not_invited' | 'pending' | 'sent' | 'accepted' | 'expired';
  lastInvitedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface GetClientsResponse {
  success: boolean;
  clients: Client[];
}

export interface UpdateClientRequest {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
  entityType?: string;
  status?: string;
}

export interface UpdateClientResponse {
  success: boolean;
  message?: string;
  client?: Client;
}

export interface InviteClientRequest {
  clientId: number;
  emailTemplate?: string;
  expiryDays?: number;
}

export interface InviteClientResponse {
  success: boolean;
  message?: string;
  invitationId?: string;
  invitationToken?: string;
}

export interface Invitation {
  id: string;
  clientId: number;
  clientName: string;
  clientEmail: string;
  status: 'pending' | 'sent' | 'accepted' | 'expired';
  sentAt?: string;
  acceptedAt?: string;
  expiresAt?: string;
  token?: string;
}

export interface GetInvitationsResponse {
  success: boolean;
  invitations: Invitation[];
}

export interface ResendInvitationResponse {
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
   * Debug method to check token status
   */
  debugTokenStatus(): void {
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('currentUser');
    console.log('=== TOKEN DEBUG ===');
    console.log('Token exists:', !!token);
    console.log('Token value:', token ? token.substring(0, 20) + '...' : 'null');
    console.log('User exists:', !!user);
    console.log('User data:', user ? JSON.parse(user) : 'null');
    console.log('==================');
  }

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

  /**
   * Create a new client
   * @param clientData - Client data to create
   */
  createClient(clientData: CreateClientRequest): Observable<CreateClientResponse> {
    const token = localStorage.getItem('authToken');
    
    // Debug token status
    console.log('=== CREATE CLIENT DEBUG ===');
    console.log('Token exists:', !!token);
    console.log('Token value:', token ? token.substring(0, 20) + '...' : 'null');
    console.log('Request data:', clientData);
    console.log('===========================');
    
    if (!token) {
      throw new Error('No authentication token found. Please log in again.');
    }
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<CreateClientResponse>(`${this.baseUrl}/clients`, clientData, { headers });
  }

  /**
   * Get all clients
   */
  getClients(): Observable<GetClientsResponse> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<GetClientsResponse>(`${this.baseUrl}/clients`, { headers });
  }

  /**
   * Update an existing client
   * @param clientId - ID of the client to update
   * @param clientData - Updated client data
   */
  updateClient(clientId: number, clientData: UpdateClientRequest): Observable<UpdateClientResponse> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.put<UpdateClientResponse>(`${this.baseUrl}/clients/${clientId}`, clientData, { headers });
  }

  /**
   * Send invitation to a client
   * @param inviteData - Invitation data
   */
  inviteClient(inviteData: InviteClientRequest): Observable<InviteClientResponse> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      throw new Error('No authentication token found. Please log in again.');
    }
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<InviteClientResponse>(`${this.baseUrl}/clients/${inviteData.clientId}/invite`, inviteData, { headers });
  }

  /**
   * Get all invitations
   */
  getInvitations(): Observable<GetInvitationsResponse> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<GetInvitationsResponse>(`${this.baseUrl}/invitations`, { headers });
  }

  /**
   * Resend an invitation
   * @param invitationId - ID of the invitation to resend
   */
  resendInvitation(invitationId: string): Observable<ResendInvitationResponse> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<ResendInvitationResponse>(`${this.baseUrl}/invitations/${invitationId}/resend`, {}, { headers });
  }
}
