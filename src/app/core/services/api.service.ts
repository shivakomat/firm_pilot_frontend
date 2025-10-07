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
  accountantId: number;
  clientName?: string;
  name: string;
  projectType: 'tax_return' | 'quarterly_filing' | 'business_setup' | 'audit' | 'consultation' | 'other';
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
  projectType: 'tax_return' | 'quarterly_filing' | 'business_setup' | 'audit' | 'consultation' | 'other';
  description?: string;
  taxYear?: number;
  dueDate?: string;
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

export interface IntakeFormSchema {
  id: number;
  accountantId: number;
  title: string;
  schemaJson: any;
  createdAt: string;
  updatedAt: string;
}

export interface IntakeFormResponse {
  id: number;
  clientId: number;
  formId: number;
  answersJson: any;
  status: 'draft' | 'submitted' | 'completed';
  submittedAt?: string;
}

export interface IntakeFormWithProject {
  form: IntakeFormSchema;
  projectId: number;
  projectName: string;
  response?: IntakeFormResponse;
}

export interface ClientInvitation {
  id: number;
  clientId: number;
  accountantId: number;
  email: string;
  invitationToken: string;
  status: 'pending' | 'sent' | 'accepted' | 'expired';
  invitedAt: string;
  acceptedAt?: string;
  expiresAt: string;
  resentCount: number;
  lastResentAt?: string;
}

export interface ClientDocument {
  id: number;
  clientId: number;
  projectId: number;
  filename: string;
  mimeType: string;
  storagePath: string;
  sizeBytes: number;
  tag: string;
  required: boolean;
  uploadedAt: string;
  sha256Hash: string;
}

export interface DocumentRequirement {
  id: number;
  clientId: number;
  documentType: string;
  description: string;
  required: boolean;
  fulfilled: boolean;
  dueDate?: string;
  createdAt: string;
}

export interface ClientDetails {
  client: Client;
  invitation?: ClientInvitation;
  projects: Project[];
  ongoingProjects: Project[];
  intakeForms: IntakeFormWithProject[];
  documents: ClientDocument[];
  documentRequirements: DocumentRequirement[];
}

export interface ClientDetailsResponse {
  success: boolean;
  clientDetails: ClientDetails;
  message?: string;
}

export interface AllDocumentsResponse {
  success: boolean;
  documents: ClientDocument[];
  message?: string;
}

export interface AccountantIntakeForm {
  id: number;
  clientId: number;
  clientName: string;
  clientEmail: string;
  projectId?: number;
  projectName?: string;
  formId: number;
  formTitle: string;
  formType?: 'tax-intake' | 'business-intake';
  submissionDate?: string;
  status: 'pending' | 'reviewed' | 'approved' | 'needs-revision';
  completionPercentage: number;
  lastModified?: string;
  responseData?: any;
}

export interface AccountantIntakeFormsResponse {
  success: boolean;
  message?: string;
  forms?: AccountantIntakeForm[];
}

// Gmail API Interfaces
export interface GmailMessage {
  id: string;
  threadId: string;
  labelIds: string[];
  snippet: string;
  historyId: string;
  internalDate: string;
  payload: {
    partId: string;
    mimeType: string;
    filename: string;
    headers: Array<{
      name: string;
      value: string;
    }>;
    body: {
      size: number;
      data?: string;
    };
    parts?: any[];
  };
  sizeEstimate: number;
}

export interface StandardGmailMessage {
  id: string;
  threadId: string;
  subject: string;
  snippet: string;
  fromEmail: string;
  fromName: string;
  toEmails: string[];
  receivedAt: string;
  isRead: boolean;
  isStarred: boolean;
  hasAttachments: boolean;
  labels: string[];
  bodyPreview: string;
}

export interface GmailMessagesResponse {
  success: boolean;
  data?: {
    messages: StandardGmailMessage[];
    totalCount: number;
    nextPageToken?: string;
    hasMore: boolean;
  };
  error?: string;
  needsAuth?: boolean;
  message?: string;
}

export interface GmailProfile {
  emailAddress: string;
  messagesTotal: number;
  threadsTotal: number;
  historyId: string;
}

export interface GmailProfileResponse {
  success: boolean;
  profile?: GmailProfile;
  message?: string;
}

export interface GmailStatusResponse {
  success: boolean;
  connected: boolean;
  email?: string;
  message?: string;
}

export interface GmailSendRequest {
  to: string;
  subject: string;
  body: string;
  cc?: string;
  bcc?: string;
}

export interface GmailSendResponse {
  success: boolean;
  messageId?: string;
  message?: string;
}

export interface GmailLoginRequest {
  email: string;
  password: string;
}

export interface GmailLoginResponse {
  success: boolean;
  message?: string;
  email?: string;
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
        
        // Safe router navigation with error handling
        try {
          if (this.router) {
            this.router.navigate(['/account/login']);
          } else {
            console.warn('Router not available, using window.location');
            window.location.href = '/account/login';
          }
        } catch (routerError) {
          console.error('Router navigation failed:', routerError);
          window.location.href = '/account/login';
        }
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
   * Get all projects for the logged-in accountant across all clients
   */
  getAccountantProjects(): Observable<ProjectsResponse> {
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

    return this.http.get<ProjectsResponse>(`${this.baseUrl}/my/accountant/projects`, { headers });
  }

  /**
   * Get all intake forms for the logged-in accountant across all clients WITH client info
   */
  getAccountantIntakeForms(): Observable<AccountantIntakeFormsResponse> {
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

    // Updated endpoint to get forms WITH client info
    return this.http.get<AccountantIntakeFormsResponse>(`${this.baseUrl}/intake/forms/all`, { headers });
  }

  /**
   * Get comprehensive client details including projects, forms, documents, and invitation
   * @param clientId - ID of the client
   */
  getClientDetails(clientId: number): Observable<ClientDetailsResponse> {
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

    return this.http.get<ClientDetailsResponse>(`${this.baseUrl}/clients/${clientId}/details`, { headers });
  }

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
   * Get all documents across all clients for the accountant
   */
  getAllDocuments(): Observable<AllDocumentsResponse> {
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

    return this.http.get<AllDocumentsResponse>(`${this.baseUrl}/documents`, { headers });
  }

  /**
   * Download a document by ID
   * @param documentId - ID of the document to download
   */
  downloadDocument(documentId: number): Observable<Blob> {
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
   * Create a new project for a client (Accountant)
   * @param clientId - ID of the client
   * @param projectData - Project data to create
   */
  createProject(clientId: number, projectData: any): Observable<any> {
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
  getProjectDetail(projectId: number): Observable<ProjectResponse> {
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

  // ===== GMAIL API METHODS =====

  /**
   * Check Gmail connection status
   */
  getGmailStatus(): Observable<GmailStatusResponse> {
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

    return this.http.get<GmailStatusResponse>(`${this.baseUrl}/gmail/status`, { headers });
  }

  /**
   * Start Gmail OAuth authentication
   */
  startGmailAuth(): Observable<{ success: boolean; authUrl?: string; message?: string }> {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('❌ No auth token found in localStorage');
      this.router.navigate(['/account/login']);
      throw new Error('No authentication token found. Please log in again.');
    }

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<{ success: boolean; authUrl?: string; message?: string }>(`${this.baseUrl}/auth/google`, { headers });
  }

  /**
   * Disconnect Gmail account
   */
  disconnectGmail(): Observable<{ success: boolean; message?: string }> {
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

    return this.http.post<{ success: boolean; message?: string }>(`${this.baseUrl}/auth/google/disconnect`, {}, { headers });
  }

  /**
   * Safe Gmail API call wrapper
   */
  private async safeGmailCall(endpoint: string, options: any = {}): Promise<any> {
    try {
      const token = localStorage.getItem('authToken');
      
      if (!token) {
        console.warn('❌ No auth token found for Gmail API call');
        return { success: false, needsAuth: true, error: 'No authentication token' };
      }

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        ...options.headers
      });

      const response: any = await this.http.get<any>(endpoint, {
        headers,
        withCredentials: true,
        ...options
      }).toPromise();

      // Check if backend indicates Gmail auth is needed
      if (response && response.needsAuth) {
        console.log('🔐 Gmail authentication required');
        return { success: false, needsAuth: true };
      }

      return response;
    } catch (error: any) {
      console.error('Gmail API error:', error);
      
      // Check for authentication errors
      if (error.status === 401 || error.status === 403) {
        return { success: false, needsAuth: true, error: 'Authentication required' };
      }
      
      return { success: false, error: error.message || 'Unknown error' };
    }
  }

  /**
   * Get Gmail messages with safe error handling
   */
  async getGmailMessages(maxResults: number = 50, pageToken?: string, q?: string): Promise<GmailMessagesResponse> {
    let params = new URLSearchParams();
    params.set('maxResults', maxResults.toString());
    if (pageToken) params.set('pageToken', pageToken);
    if (q) params.set('q', q);

    const endpoint = `${this.baseUrl}/gmail/messages${params.toString() ? '?' + params.toString() : ''}`;
    
    const result = await this.safeGmailCall(endpoint);
    
    // Convert to Observable-like response for compatibility
    return result;
  }

  /**
   * Get specific Gmail message details
   */
  getGmailMessage(messageId: string): Observable<{ success: boolean; message?: GmailMessage; error?: string }> {
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

    return this.http.get<{ success: boolean; message?: GmailMessage; error?: string }>(`${this.baseUrl}/gmail/messages/${messageId}`, { headers });
  }

  /**
   * Start Gmail OAuth flow by redirecting to backend OAuth endpoint
   */
  startGmailOAuth(): void {
    const token = localStorage.getItem('authToken');
    
    if (!token) {
      console.error('❌ No auth token found in localStorage');
      this.router.navigate(['/account/login']);
      return;
    }

    if (!this.validateTokenAndRedirect(token)) {
      return;
    }

    // Store current page URL to return after OAuth
    localStorage.setItem('gmail_oauth_return_url', window.location.href);
    
    // Redirect to backend OAuth endpoint with JWT token
    const oauthUrl = `${this.baseUrl}/gmail/login?token=${encodeURIComponent(token)}`;
    console.log('🔗 Redirecting to Gmail OAuth:', oauthUrl);
    
    // Full page redirect to start OAuth flow
    window.location.href = oauthUrl;
  }

  /**
   * Check if we're returning from OAuth callback and extract session data
   */
  handleOAuthReturn(): boolean | null {
    const urlParams = new URLSearchParams(window.location.search);
    const success = urlParams.get('oauth_success');
    const error = urlParams.get('oauth_error') || urlParams.get('error');
    
    // Debug: Log all URL parameters
    console.log('🔍 OAuth Return Debug:');
    console.log('  - oauth_success:', success);
    console.log('  - oauth_error:', error);
    console.log('  - URL search:', window.location.search);
    
    if (success === 'true') {
      console.log('✅ Gmail OAuth successful - will fetch session data from API');
      
      // Clean up URL parameters
      window.history.replaceState({}, document.title, window.location.pathname);
      return true;
    } else if (success === 'false' || error) {
      console.error('❌ Gmail OAuth failed:', error);
      
      // Check for specific database errors
      if (error && error.includes('gmail_tokens') && error.includes('does not exist')) {
        console.error('🗄️ Database table missing: gmail_tokens table not found');
      }
      
      // Clean up URL parameters
      window.history.replaceState({}, document.title, window.location.pathname);
      return false;
    }
    
    // No OAuth parameters found
    return null;
  }

  /**
   * Get Gmail session data after OAuth success
   */
  getGmailSessionData(): Observable<any> {
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

    console.log('📡 Fetching Gmail session data from backend...');
    return this.http.get<any>(`${this.baseUrl}/gmail/status`, { 
      headers,
      withCredentials: true  // Important for session cookies
    });
  }

  /**
   * Check if Gmail tokens are valid and not expired
   */
  isGmailTokenValid(): boolean {
    const accessToken = localStorage.getItem('gmail_access_token');
    const expiresAt = localStorage.getItem('gmail_expires_at');
    
    if (!accessToken || !expiresAt) {
      console.log('❌ Gmail tokens not found');
      return false;
    }
    
    const expirationTime = parseInt(expiresAt);
    const currentTime = Date.now();
    
    if (currentTime >= expirationTime) {
      console.log('❌ Gmail tokens expired');
      // Clear expired tokens
      this.clearGmailTokens();
      return false;
    }
    
    console.log('✅ Gmail tokens are valid');
    return true;
  }

  /**
   * Clear Gmail tokens from localStorage
   */
  clearGmailTokens(): void {
    localStorage.removeItem('gmail_access_token');
    localStorage.removeItem('gmail_refresh_token');
    localStorage.removeItem('gmail_expires_at');
    localStorage.removeItem('gmail_user_id');
    console.log('🗑️ Cleared Gmail tokens');
  }

  /**
   * Send email via Gmail
   */
  sendGmailMessage(emailData: GmailSendRequest): Observable<GmailSendResponse> {
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

    return this.http.post<GmailSendResponse>(`${this.baseUrl}/gmail/send`, emailData, { headers });
  }

  /**
   * Get Gmail profile information
   */
  getGmailProfile(): Observable<GmailProfileResponse> {
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

    return this.http.get<GmailProfileResponse>(`${this.baseUrl}/gmail/profile`, { headers });
  }
}
