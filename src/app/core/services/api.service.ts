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
  message?: string; // Optional custom message for the invitation
}

export interface InviteClientResponse {
  success: boolean;
  message?: string;
  invitationId?: string;
  invitationToken?: string;
}

export interface AcceptInvitationRequest {
  firstName: string;
  lastName: string;
  password: string;
}

export interface AcceptInvitationResponse {
  success: boolean;
  message?: string;
  user?: any;
}

export interface ResendInvitationRequest {
  message?: string; // Optional custom message for resend
}

export interface ResendInvitationResponse {
  success: boolean;
  message?: string;
}

export interface Invitation {
  id: number;
  clientId: number;
  clientName: string;
  clientEmail: string;
  status: 'pending' | 'sent' | 'accepted' | 'expired';
  sentAt?: string;
  acceptedAt?: string;
  expiresAt?: string;
  token?: string;
  message?: string;
}

export interface GetInvitationsResponse {
  success: boolean;
  invitations: Invitation[];
}

export interface GetInvitationByTokenResponse {
  success: boolean;
  invitation?: Invitation;
  client?: Client;
}

export interface IntakeResponse {
  id?: number;
  clientId: number;
  personalInfo?: any;
  incomeInfo?: any;
  deductionsInfo?: any;
  documentsInfo?: any;
  status?: string;
  submittedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface GetIntakeResponsesResponse {
  success: boolean;
  responses?: IntakeResponse;
  message?: string;
}

export interface SubmitIntakeRequest {
  formId: number;
  responseJson: string;
}

export interface SubmitIntakeResponse {
  success: boolean;
  message?: string;
  response?: IntakeResponse;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl;

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
   * @param clientId - ID of the client to invite
   * @param inviteData - Invitation data with optional message
   */
  inviteClient(clientId: number, inviteData: InviteClientRequest): Observable<InviteClientResponse> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      throw new Error('No authentication token found. Please log in again.');
    }
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<InviteClientResponse>(`${this.baseUrl}/clients/${clientId}/invite`, inviteData, { headers });
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
   * @param resendData - Optional message for resend
   */
  resendInvitation(invitationId: number, resendData: ResendInvitationRequest = {}): Observable<ResendInvitationResponse> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<ResendInvitationResponse>(`${this.baseUrl}/invitations/${invitationId}/resend`, resendData, { headers });
  }

  /**
   * Get invitation by token (for public access)
   * @param token - Invitation token
   */
  getInvitationByToken(token: string): Observable<GetInvitationByTokenResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get<GetInvitationByTokenResponse>(`${this.baseUrl}/invitations/${token}`, { headers });
  }

  /**
   * Accept an invitation (public endpoint)
   * @param token - Invitation token
   * @param acceptData - User registration data
   */
  acceptInvitation(token: string, acceptData: AcceptInvitationRequest): Observable<AcceptInvitationResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<AcceptInvitationResponse>(`${this.baseUrl}/invitations/${token}/accept`, acceptData, { headers });
  }

  /**
   * Cancel an invitation
   * @param invitationId - ID of the invitation to cancel
   */
  cancelInvitation(invitationId: number): Observable<{ success: boolean; message?: string }> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.delete<{ success: boolean; message?: string }>(`${this.baseUrl}/invitations/${invitationId}`, { headers });
  }

  /**
   * Get client intake responses
   * @param clientId - ID of the client
   */
  getClientIntakeResponses(clientId: number): Observable<GetIntakeResponsesResponse> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<GetIntakeResponsesResponse>(`${this.baseUrl}/clients/${clientId}/intake`, { headers });
  }

  /**
   * Submit client intake response
   * @param clientId - ID of the client
   * @param intakeData - Intake form data
   */
  submitClientIntakeResponse(clientId: number, intakeData: SubmitIntakeRequest): Observable<SubmitIntakeResponse> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<SubmitIntakeResponse>(`${this.baseUrl}/clients/${clientId}/intake/submit`, intakeData, { headers });
  }
}
