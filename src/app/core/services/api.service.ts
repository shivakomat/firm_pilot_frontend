import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

export interface SignupRequest {
  role: 'ACCOUNTANT' | 'CLIENT';
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
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
  requires2FA?: boolean;
}

export interface TwoFactorRequest {
  token: string;
  totpCode: string;
}

export interface LogoutResponse {
  success: boolean;
  message?: string;
}

export interface Project {
  id: number;
  clientId: number;
  name: string;
  type: 'tax_return' | 'quarterly_filing' | 'business_setup' | 'audit' | 'consultation' | 'other';
  status: 'active' | 'in_progress' | 'completed' | 'on_hold' | 'cancelled';
  taxYear?: number;
  dueDate?: string;
  description?: string;
  createdAt: string;
  updatedAt: string;
  preparedDocuments?: ProjectDocument[];
  intakeFormData?: any;
}

export interface ProjectDocument {
  id: number;
  projectId: number;
  fileName: string;
  originalName: string;
  fileSize: number;
  mimeType: string;
  uploadedAt: string;
  uploadedBy: number;
}

export interface UploadDocumentRequest {
  file: File;
  description?: string;
}

export interface UploadDocumentResponse {
  success: boolean;
  message?: string;
  document?: ProjectDocument;
}

export interface ProjectDetailResponse {
  success: boolean;
  message?: string;
  project?: Project;
  intakeForm?: any;
}

export interface CreateProjectRequest {
  name: string;
  type: 'tax_return' | 'quarterly_filing' | 'business_setup' | 'audit' | 'consultation' | 'other';
  status?: 'active' | 'in_progress' | 'completed' | 'on_hold' | 'cancelled';
  taxYear?: number;
  dueDate?: string;
  description?: string;
}

export interface ProjectResponse {
  success: boolean;
  message?: string;
  project?: Project;
}

export interface ProjectsResponse {
  success: boolean;
  message?: string;
  projects?: Project[];
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
  clientId?: number;
  formId?: number;
  answersJson?: any;
  responseJson?: string;
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
  response?: IntakeResponse;
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

  constructor(private http: HttpClient, private router: Router) { }

  /**
   * Check if JWT token is expired and redirect to login if needed
   * @param token - JWT token to validate
   * @returns boolean - true if token is valid, false if expired
   */
  private validateTokenAndRedirect(token: string): boolean {
    try {
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      const isExpired = tokenPayload.exp && tokenPayload.exp < currentTime;
      
      if (isExpired) {
        console.error('⏰ JWT token is EXPIRED - redirecting to login');
        localStorage.removeItem('authToken');
        localStorage.removeItem('currentUser');
        this.router.navigate(['/auth/auth/login']);
        return false;
      }
      return true;
    } catch (parseError) {
      console.error('🚨 Error parsing JWT token:', parseError);
      return true; // Let backend handle invalid tokens
    }
  }

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
   * Verify two-factor authentication code
   * @param twoFactorData - Token and TOTP code
   */
  verify2FA(twoFactorData: TwoFactorRequest): Observable<LoginResponse> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<LoginResponse>(`${this.baseUrl}/auth/2fa/verify`, twoFactorData, { headers });
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
   * Get assigned intake forms for logged-in client
   */
  getMyIntakeForms(): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.baseUrl}/my/intake/forms`, { headers });
  }

  /**
   * Get specific form details for logged-in client
   * @param formId - ID of the form
   */
  getMyIntakeForm(formId: number): Observable<any> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.baseUrl}/my/intake/forms/${formId}`, { headers });
  }

  /**
   * Get client's response for a specific form
   * @param formId - ID of the form
   */
  getMyIntakeResponse(formId: number): Observable<GetIntakeResponsesResponse> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('❌ No auth token found in localStorage');
      this.router.navigate(['/account/login']);
      throw new Error('No authentication token found. Please log in again.');
    }

    // Validate token and redirect if expired
    if (!this.validateTokenAndRedirect(token)) {
      throw new Error('Authentication token has expired. Redirecting to login.');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<GetIntakeResponsesResponse>(`${this.baseUrl}/my/intake/responses/${formId}`, { headers });
  }

  /**
   * Save draft response for logged-in client
   * @param formId - ID of the form
   * @param intakeData - Intake form data
   */
  saveMyIntakeDraft(formId: number, intakeData: any): Observable<SubmitIntakeResponse> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('❌ No auth token found in localStorage');
      this.router.navigate(['/account/login']);
      throw new Error('No authentication token found. Please log in again.');
    }

    // Validate token and redirect if expired
    if (!this.validateTokenAndRedirect(token)) {
      throw new Error('Authentication token has expired. Redirecting to login.');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<SubmitIntakeResponse>(`${this.baseUrl}/my/intake/responses/${formId}/draft`, intakeData, { headers });
  }

  /**
   * Submit final response for logged-in client
   * @param formId - ID of the form
   * @param intakeData - Intake form data
   */
  submitMyIntakeResponse(formId: number, intakeData: any): Observable<SubmitIntakeResponse> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('❌ No auth token found in localStorage');
      this.router.navigate(['/account/login']);
      throw new Error('No authentication token found. Please log in again.');
    }

    // Validate token and redirect if expired
    if (!this.validateTokenAndRedirect(token)) {
      throw new Error('Authentication token has expired. Redirecting to login.');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<SubmitIntakeResponse>(`${this.baseUrl}/my/intake/responses/${formId}/submit`, intakeData, { headers });
  }

  // ===== PROJECT MANAGEMENT METHODS =====

  /**
   * Get all projects for a specific client (Accountant view)
   * @param clientId - ID of the client
   */
  getClientProjects(clientId: number): Observable<ProjectsResponse> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('❌ No auth token found in localStorage');
      this.router.navigate(['/account/login']);
      throw new Error('No authentication token found. Please log in again.');
    }

    if (!this.validateTokenAndRedirect(token)) {
      throw new Error('Authentication token has expired. Redirecting to login.');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<ProjectsResponse>(`${this.baseUrl}/clients/${clientId}/projects`, { headers });
  }

  /**
   * Create a new project for a client (Accountant)
   * @param clientId - ID of the client
   * @param projectData - Project creation data
   */
  createClientProject(clientId: number, projectData: CreateProjectRequest): Observable<ProjectResponse> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('❌ No auth token found in localStorage');
      this.router.navigate(['/account/login']);
      throw new Error('No authentication token found. Please log in again.');
    }

    if (!this.validateTokenAndRedirect(token)) {
      throw new Error('Authentication token has expired. Redirecting to login.');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    console.log('Creating project for client:', clientId, 'with data:', projectData);
    console.log('Full API URL:', `${this.baseUrl}/clients/${clientId}/projects`);
    console.log('Request headers:', headers);
    
    return this.http.post<ProjectResponse>(`${this.baseUrl}/clients/${clientId}/projects`, projectData, { headers })
      .pipe(
        tap(response => console.log('API Response:', response)),
        catchError(error => {
          console.error('API Error Details:', {
            status: error.status,
            statusText: error.statusText,
            error: error.error,
            url: error.url,
            headers: error.headers
          });
          throw error;
        })
      );
  }

  /**
   * Get all projects for the logged-in client
   */
  getMyProjects(): Observable<ProjectsResponse> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('❌ No auth token found in localStorage');
      this.router.navigate(['/account/login']);
      throw new Error('No authentication token found. Please log in again.');
    }

    if (!this.validateTokenAndRedirect(token)) {
      throw new Error('Authentication token has expired. Redirecting to login.');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<ProjectsResponse>(`${this.baseUrl}/my/projects`, { headers });
  }

  /**
   * Get project details by ID
   * @param projectId - ID of the project
   */
  getProject(projectId: number): Observable<ProjectResponse> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('❌ No auth token found in localStorage');
      this.router.navigate(['/account/login']);
      throw new Error('No authentication token found. Please log in again.');
    }

    if (!this.validateTokenAndRedirect(token)) {
      throw new Error('Authentication token has expired. Redirecting to login.');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<ProjectResponse>(`${this.baseUrl}/projects/${projectId}`, { headers });
  }

  /**
   * Get project details with intake form data
   * @param projectId - ID of the project
   */
  getProjectDetail(projectId: number): Observable<ProjectDetailResponse> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('❌ No auth token found in localStorage');
      this.router.navigate(['/account/login']);
      throw new Error('No authentication token found. Please log in again.');
    }

    if (!this.validateTokenAndRedirect(token)) {
      throw new Error('Authentication token has expired. Redirecting to login.');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<ProjectDetailResponse>(`${this.baseUrl}/projects/${projectId}/detail`, { headers });
  }

  /**
   * Upload prepared document for a project
   * @param projectId - ID of the project
   * @param file - File to upload
   * @param description - Optional description
   */
  uploadProjectDocument(projectId: number, file: File, description?: string): Observable<UploadDocumentResponse> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('❌ No auth token found in localStorage');
      this.router.navigate(['/account/login']);
      throw new Error('No authentication token found. Please log in again.');
    }

    if (!this.validateTokenAndRedirect(token)) {
      throw new Error('Authentication token has expired. Redirecting to login.');
    }

    const formData = new FormData();
    formData.append('document', file);
    if (description) {
      formData.append('description', description);
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
      // Don't set Content-Type for FormData - browser will set it with boundary
    });

    return this.http.post<UploadDocumentResponse>(`${this.baseUrl}/projects/${projectId}/documents`, formData, { headers });
  }

  /**
   * Get project documents list
   * @param projectId - ID of the project
   */
  getProjectDocuments(projectId: number): Observable<{ success: boolean; documents: ProjectDocument[] }> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('❌ No auth token found in localStorage');
      this.router.navigate(['/account/login']);
      throw new Error('No authentication token found. Please log in again.');
    }

    if (!this.validateTokenAndRedirect(token)) {
      throw new Error('Authentication token has expired. Redirecting to login.');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<{ success: boolean; documents: ProjectDocument[] }>(`${this.baseUrl}/projects/${projectId}/documents`, { headers });
  }

  /**
   * Download project document
   * @param documentId - ID of the document
   */
  downloadProjectDocument(documentId: number): Observable<Blob> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('❌ No auth token found in localStorage');
      this.router.navigate(['/account/login']);
      throw new Error('No authentication token found. Please log in again.');
    }

    if (!this.validateTokenAndRedirect(token)) {
      throw new Error('Authentication token has expired. Redirecting to login.');
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(`${this.baseUrl}/documents/${documentId}/download`, { 
      headers, 
      responseType: 'blob' 
    });
  }

  /**
   * Update project details
   * @param projectId - ID of the project
   * @param projectData - Updated project data
   */
  updateProject(projectId: number, projectData: Partial<CreateProjectRequest>): Observable<ProjectResponse> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('❌ No auth token found in localStorage');
      this.router.navigate(['/account/login']);
      throw new Error('No authentication token found. Please log in again.');
    }

    if (!this.validateTokenAndRedirect(token)) {
      throw new Error('Authentication token has expired. Redirecting to login.');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.put<ProjectResponse>(`${this.baseUrl}/projects/${projectId}`, projectData, { headers });
  }

  /**
   * Submit client intake response (legacy method - kept for backward compatibility)
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
