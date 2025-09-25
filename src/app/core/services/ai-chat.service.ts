import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface AIConversation {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
  messageCount: number;
}

export interface AIMessage {
  id: string;
  conversationId: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface CreateConversationRequest {
  title?: string;
}

export interface CreateConversationResponse {
  id: string;
  title: string;
  createdAt: string;
}

export interface SendMessageRequest {
  content: string;
}

export interface SendMessageResponse {
  userMessage: AIMessage;
  assistantMessage: AIMessage;
}

export interface GetConversationsResponse {
  conversations: AIConversation[];
}

export interface GetConversationResponse {
  conversation: AIConversation;
  messages: AIMessage[];
}

@Injectable({
  providedIn: 'root'
})
export class AiChatService {
  private baseUrl = environment.apiUrl || 'http://localhost:9000';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }

  /**
   * Create a new AI conversation
   */
  createConversation(request: CreateConversationRequest = {}): Observable<CreateConversationResponse> {
    if (!this.validateTokenAndRedirect()) {
      throw new Error('Authentication required');
    }
    
    return this.http.post<CreateConversationResponse>(
      `${this.baseUrl}/api/ai/conversations`,
      request,
      { headers: this.getHeaders() }
    );
  }

  /**
   * Get all AI conversations for the current user
   */
  getConversations(): Observable<GetConversationsResponse> {
    if (!this.validateTokenAndRedirect()) {
      throw new Error('Authentication required');
    }
    
    return this.http.get<GetConversationsResponse>(
      `${this.baseUrl}/api/ai/conversations`,
      { headers: this.getHeaders() }
    );
  }

  /**
   * Get a specific conversation with its messages
   */
  getConversation(conversationId: string): Observable<GetConversationResponse> {
    if (!this.validateTokenAndRedirect()) {
      throw new Error('Authentication required');
    }
    
    if (!conversationId || conversationId === 'undefined') {
      throw new Error('Invalid conversation ID');
    }
    
    return this.http.get<GetConversationResponse>(
      `${this.baseUrl}/api/ai/conversations/${conversationId}`,
      { headers: this.getHeaders() }
    );
  }

  /**
   * Send a message to an AI conversation and get response
   */
  sendMessage(conversationId: string, request: SendMessageRequest): Observable<SendMessageResponse> {
    if (!this.validateTokenAndRedirect()) {
      throw new Error('Authentication required');
    }
    
    if (!conversationId || conversationId === 'undefined') {
      throw new Error('Invalid conversation ID');
    }
    
    return this.http.post<SendMessageResponse>(
      `${this.baseUrl}/api/ai/conversations/${conversationId}/messages`,
      request,
      { headers: this.getHeaders() }
    );
  }

  /**
   * Get current user info
   */
  getCurrentUser(): any {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }

  /**
   * Validate JWT token and redirect if expired
   */
  validateTokenAndRedirect(): boolean {
    const token = localStorage.getItem('authToken');
    if (!token) {
      this.redirectToLogin();
      return false;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      
      if (payload.exp && payload.exp < currentTime) {
        console.log('Token expired, redirecting to login');
        localStorage.removeItem('authToken');
        localStorage.removeItem('currentUser');
        this.redirectToLogin();
        return false;
      }
      
      return true;
    } catch (error) {
      console.error('Error validating token:', error);
      this.redirectToLogin();
      return false;
    }
  }

  private redirectToLogin(): void {
    window.location.href = '/account/login';
  }
}
