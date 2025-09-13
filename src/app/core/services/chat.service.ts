import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject, Subject } from 'rxjs';
import { environment } from '../../../environments/environment';
import { 
  ChatThread, 
  ChatMessage, 
  SendMessageRequest, 
  ChatThreadResponse,
  AIAgentResponse 
} from '../models/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private baseUrl = environment.apiUrl || 'http://localhost:9000';
  
  // Real-time updates
  private threadsSubject = new BehaviorSubject<ChatThread[]>([]);
  private currentThreadSubject = new BehaviorSubject<ChatThread | null>(null);
  private newMessageSubject = new Subject<ChatMessage>();

  public threads$ = this.threadsSubject.asObservable();
  public currentThread$ = this.currentThreadSubject.asObservable();
  public newMessage$ = this.newMessageSubject.asObservable();

  constructor(private http: HttpClient) {}

  /**
   * Get all chat threads for accountant
   */
  getAllThreads(): Observable<ChatThread[]> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<ChatThread[]>(`${this.baseUrl}/threads`, { headers });
  }

  /**
   * Get specific chat thread with messages
   */
  getThread(clientId: number): Observable<ChatThreadResponse> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<ChatThreadResponse>(`${this.baseUrl}/threads/${clientId}`, { headers });
  }

  /**
   * Send message to a thread
   */
  sendMessage(clientId: number, messageRequest: SendMessageRequest): Observable<ChatMessage> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<ChatMessage>(
      `${this.baseUrl}/threads/${clientId}/messages`, 
      messageRequest, 
      { headers }
    );
  }

  /**
   * Get AI Agent response (mock implementation for now)
   */
  getAIResponse(message: string, context?: string): Observable<AIAgentResponse> {
    // Mock AI response - replace with actual AI service later
    const mockResponse: AIAgentResponse = {
      message: this.generateMockAIResponse(message),
      confidence: 0.85,
      suggestedActions: [
        'Schedule a consultation',
        'Review tax documents',
        'Check deduction eligibility'
      ]
    };

    return new Observable(observer => {
      setTimeout(() => {
        observer.next(mockResponse);
        observer.complete();
      }, 1000); // Simulate API delay
    });
  }

  /**
   * Update threads list
   */
  updateThreads(threads: ChatThread[]): void {
    this.threadsSubject.next(threads);
  }

  /**
   * Update current thread
   */
  updateCurrentThread(thread: ChatThread): void {
    this.currentThreadSubject.next(thread);
  }

  /**
   * Emit new message
   */
  emitNewMessage(message: ChatMessage): void {
    this.newMessageSubject.next(message);
  }

  /**
   * Get current user info
   */
  getCurrentUser(): any {
    const currentUser = localStorage.getItem('currentUser');
    return currentUser ? JSON.parse(currentUser) : null;
  }

  /**
   * Check if current user is client
   */
  isClient(): boolean {
    const user = this.getCurrentUser();
    if (!user) return false;
    
    const userRole = user.role?.toLowerCase();
    const userType = user.userType?.toLowerCase();
    const roleType = user.roleType?.toLowerCase();
    
    return userRole === 'client' || userType === 'client' || roleType === 'client';
  }

  /**
   * Generate mock AI response (temporary)
   */
  private generateMockAIResponse(message: string): string {
    const responses = [
      "I understand you're asking about tax matters. Let me help you with that information.",
      "Based on current tax regulations, here's what I can tell you about your question.",
      "That's a great question about taxes. Here's some guidance that might help.",
      "I can assist you with that tax-related inquiry. Let me provide some insights.",
      "Thank you for your question. Here's what you should know about this tax matter."
    ];
    
    return responses[Math.floor(Math.random() * responses.length)] + 
           " For specific advice regarding your situation, I recommend discussing this with your accountant.";
  }
}
