import { Component, OnInit, OnDestroy, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from '../../../core/services/chat.service';
import { AuthenticationService } from '../../../core/services/auth.service';

// Types based on the API structure from memories
interface ChatMessage {
  id?: number;
  content: string;
  senderId: number;
  senderName: string;
  senderType: 'CLIENT' | 'ACCOUNTANT';
  timestamp: Date;
  threadId: number;
  status?: 'sending' | 'sent' | 'failed'; // Message delivery status
  error?: string; // Error message for failed sends
}

interface ChatThread {
  id: number;
  clientId: number;
  clientName: string;
  clientEmail: string;
  lastActivity: Date;
  unreadCount: number;
  messages: ChatMessage[];
  lastMessage?: ChatMessage;
}

interface SendMessageRequest {
  content: string;
  senderType: 'CLIENT' | 'ACCOUNTANT';
}

interface ApiMessage {
  id: number;
  body: string;
  senderId: number;
  threadId: number;
  createdAt: string;
}

interface ApiThread {
  id: number;
  clientId: number;
}

interface ApiThreadResponse {
  success: boolean;
  thread: ApiThread;
  messages: ApiMessage[];
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {
  @ViewChild('messagesContainer') messagesContainer!: ElementRef;

  // Core properties for ClientChatManager approach
  messages: ChatMessage[] = [];
  currentThread: ChatThread | null = null;
  currentUser: any = null;
  newMessage: string = '';
  isLoading: boolean = false;
  isInitialized: boolean = false;
  subscriptions: Subscription[] = [];
  userJWT: string = '';
  clientId: number = 0;

  // UI state properties (for template compatibility)
  showConversationsList: boolean = false;
  chatMode: string = 'accountant'; // Always accountant mode for client portal
  aiConversations: any[] = [];
  currentAIConversation: any = null;

  constructor(
    private chatService: ChatService,
    private authService: AuthenticationService,
    private cdr: ChangeDetectorRef
  ) {
    // Get current user and JWT token
    this.currentUser = this.authService.currentUser();
    this.userJWT = localStorage.getItem('authToken') || '';
    this.clientId = this.getCurrentUserClientId();
    
    console.log('🔧 Chat Component initialized with client ID:', this.clientId);
  }

  ngOnInit(): void {
    console.log('🔄 Client Chat Manager initializing...');
    this.initializeChatWithPolling();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  // Initialize chat - load existing thread and messages (ClientChatManager approach)
  async initializeChat(): Promise<void> {
    this.isLoading = true;
    
    try {
      console.log('📋 Loading chat for client ID:', this.clientId);
      
      const sub = this.chatService.getThread(this.clientId).subscribe({
        next: (response: ApiThreadResponse) => {
          console.log('✅ Chat initialization response:', response);
          
          if (response.success) {
            // Store thread information
            this.currentThread = {
              id: response.thread.id,
              clientId: this.clientId,
              clientName: this.getClientDisplayName(),
              clientEmail: this.currentUser?.email || '',
              lastActivity: new Date(),
              unreadCount: 0,
              messages: []
            };
            
            // Convert and store messages
            if (response.messages && response.messages.length > 0) {
              this.messages = response.messages.map((msg: ApiMessage) => ({
                id: msg.id,
                content: msg.body,
                senderId: msg.senderId,
                senderName: this.isMyMessage(msg.senderId) ? 'You' : 'Tax Consultant',
                senderType: this.isMyMessage(msg.senderId) ? 'CLIENT' as const : 'ACCOUNTANT' as const,
                timestamp: new Date(msg.createdAt),
                threadId: msg.threadId
              }));
              
              this.currentThread.messages = [...this.messages]; // Create new array reference
              console.log('📨 Loaded existing messages:', this.messages.length);
            } else {
              console.log('ℹ️ No existing messages - ready for new conversation');
              this.messages = [];
            }
          } else {
            console.log('⚠️ Creating new thread structure');
            this.createNewThread();
          }
          
          this.isLoading = false;
          this.isInitialized = true;
          this.cdr.detectChanges(); // Ensure UI updates after initialization
          this.scrollToBottom();
        },
        error: (error) => {
          console.error('❌ Chat initialization error:', error);
          this.createNewThread();
          this.isLoading = false;
          this.isInitialized = true;
        }
      });
      
      this.subscriptions.push(sub);
      
    } catch (error) {
      console.error('❌ Failed to initialize chat:', error);
      this.createNewThread();
      this.isLoading = false;
      this.isInitialized = true;
    }
  }

  // Send message to accountant (ClientChatManager approach)
  async sendMessage(): Promise<void> {
    if (!this.newMessage.trim() || !this.currentThread) {
      return;
    }
    
    const messageContent = this.newMessage.trim();
    console.log('📤 Sending message:', messageContent);
    
    // Create optimistic message for immediate UI update
    const optimisticMessage: ChatMessage = {
      id: Date.now(), // Temporary ID
      content: messageContent,
      senderId: this.getCurrentUserId(),
      senderName: 'You',
      senderType: 'CLIENT',
      timestamp: new Date(),
      threadId: this.currentThread.id,
      status: 'sending' // Show as sending initially
    };
    
    // Immediately add to UI for fluid experience
    this.messages.push(optimisticMessage);
    this.newMessage = ''; // Clear input immediately
    this.cdr.detectChanges(); // Force change detection
    this.scrollToBottom();
    
    // Update thread's last message optimistically
    if (this.currentThread) {
      this.currentThread.lastMessage = optimisticMessage;
      this.currentThread.messages = [...this.messages]; // Create new array reference
    }
    
    try {
      const messageRequest: SendMessageRequest = {
        content: messageContent,
        senderType: 'CLIENT'
      };
      
      const sub = this.chatService.sendMessage(this.clientId, messageRequest, this.currentThread.id).subscribe({
        next: (response) => {
          console.log('✅ Message sent successfully:', response);
          
          // Find and update the optimistic message with server response
          const messageIndex = this.messages.findIndex(msg => msg.id === optimisticMessage.id);
          if (messageIndex !== -1 && response.id) {
            this.messages[messageIndex] = {
              ...this.messages[messageIndex],
              id: response.id, // Update with real server ID
              timestamp: response.timestamp || this.messages[messageIndex].timestamp,
              status: 'sent' // Mark as successfully sent
            };
            
            // Update thread's last message with real data
            if (this.currentThread) {
              this.currentThread.lastMessage = this.messages[messageIndex];
              this.currentThread.messages = [...this.messages];
            }
            
            this.cdr.detectChanges(); // Ensure UI updates
          }
        },
        error: (error) => {
          console.error('❌ Failed to send message:', error);
          
          // Mark the optimistic message as failed instead of removing it
          const messageIndex = this.messages.findIndex(msg => msg.id === optimisticMessage.id);
          if (messageIndex !== -1) {
            this.messages[messageIndex] = {
              ...this.messages[messageIndex],
              status: 'failed',
              error: 'Unable to send message. Please try again.'
            };
            this.cdr.detectChanges();
            
            // Update thread state
            if (this.currentThread) {
              this.currentThread.messages = [...this.messages];
              this.currentThread.lastMessage = this.messages[this.messages.length - 1];
            }
          }
        }
      });
      
      this.subscriptions.push(sub);
      
    } catch (error) {
      console.error('❌ Send message error:', error);
      
      // Mark optimistic message as failed on exception
      const messageIndex = this.messages.findIndex(msg => msg.id === optimisticMessage.id);
      if (messageIndex !== -1) {
        this.messages[messageIndex] = {
          ...this.messages[messageIndex],
          status: 'failed',
          error: 'Unable to send message. Please check your connection.'
        };
        this.cdr.detectChanges();
        
        // Update thread state
        if (this.currentThread) {
          this.currentThread.messages = [...this.messages];
          this.currentThread.lastMessage = this.messages[this.messages.length - 1];
        }
      }
    }
  }

  // Helper methods
  private createNewThread(): void {
    this.currentThread = {
      id: 0, // Will be assigned when first message is sent
      clientId: this.clientId,
      clientName: this.getClientDisplayName(),
      clientEmail: this.currentUser?.email || '',
      lastActivity: new Date(),
      unreadCount: 0,
      messages: []
    };
    this.messages = [];
  }
  
  private isMyMessage(senderId: number): boolean {
    const currentUserId = this.getCurrentUserId();
    return senderId === currentUserId;
  }
  
  private getCurrentUserId(): number {
    try {
      if (this.userJWT) {
        const payload = JSON.parse(atob(this.userJWT.split('.')[1]));
        return payload.userId || payload.id || this.currentUser?.id || 0;
      }
    } catch (error) {
      console.error('Error extracting user ID from JWT:', error);
    }
    return this.currentUser?.id || 0;
  }
  
  private getCurrentUserClientId(): number {
    const clientId = this.chatService.getCurrentUserClientId() || this.currentUser?.id || 0;
    console.log('🆔 Client ID determined:', clientId);
    return clientId;
  }
  
  private getClientDisplayName(): string {
    if (this.currentUser?.firstName || this.currentUser?.lastName) {
      return `${this.currentUser.firstName || ''} ${this.currentUser.lastName || ''}`.trim();
    }
    return this.currentUser?.email || 'You';
  }
  
  private scrollToBottom(): void {
    try {
      setTimeout(() => {
        if (this.messagesContainer) {
          const element = this.messagesContainer.nativeElement;
          element.scrollTop = element.scrollHeight;
        }
      }, 100);
    } catch (error) {
      console.error('Error scrolling to bottom:', error);
    }
  }

  // Keyboard event handler
  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  // Format message timestamp
  formatTime(timestamp: Date | string): string {
    try {
      const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;
      return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
    } catch (error) {
      return 'Now';
    }
  }

  // Format message date
  formatDate(timestamp: Date | string): string {
    try {
      const date = typeof timestamp === 'string' ? new Date(timestamp) : timestamp;
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return 'Today';
    }
  }

  // Check for new messages periodically (real-time updates)
  private startMessagePolling(): void {
    // Poll for new messages every 5 seconds
    const pollInterval = setInterval(() => {
      if (this.currentThread && this.isInitialized) {
        this.checkForNewMessages();
      }
    }, 5000);

    // Clean up interval on component destroy
    this.subscriptions.push({
      unsubscribe: () => clearInterval(pollInterval)
    } as Subscription);
  }

  private checkForNewMessages(): void {
    if (!this.currentThread) return;

    const sub = this.chatService.getThread(this.clientId).subscribe({
      next: (response: ApiThreadResponse) => {
        if (response.success && response.messages) {
          const newMessages = response.messages.filter(apiMsg => 
            !this.messages.some(existingMsg => existingMsg.id === apiMsg.id)
          );

          if (newMessages.length > 0) {
            console.log('📨 Received new messages:', newMessages.length);
            
            const convertedMessages = newMessages.map((msg: ApiMessage) => ({
              id: msg.id,
              content: msg.body,
              senderId: msg.senderId,
              senderName: this.isMyMessage(msg.senderId) ? 'You' : 'Tax Consultant',
              senderType: this.isMyMessage(msg.senderId) ? 'CLIENT' as const : 'ACCOUNTANT' as const,
              timestamp: new Date(msg.createdAt),
              threadId: msg.threadId
            }));

            this.messages.push(...convertedMessages);
            
            if (this.currentThread) {
              this.currentThread.messages = [...this.messages]; // Create new array reference
              this.currentThread.lastMessage = convertedMessages[convertedMessages.length - 1];
            }
            
            this.cdr.detectChanges(); // Force change detection for new messages
            this.scrollToBottom();
          }
        }
      },
      error: (error) => {
        console.error('❌ Failed to check for new messages:', error);
      }
    });

    this.subscriptions.push(sub);
  }

  // Enhanced initialization with polling
  async initializeChatWithPolling(): Promise<void> {
    await this.initializeChat();
    
    // Start polling for new messages after successful initialization
    if (this.isInitialized) {
      this.startMessagePolling();
      console.log('🔄 Message polling started');
    }
  }

  // Retry failed message
  retryMessage(message: ChatMessage): void {
    if (message.status !== 'failed' || !this.currentThread) {
      return;
    }
    
    console.log('🔄 Retrying failed message:', message.content);
    
    // Update message status to sending
    const messageIndex = this.messages.findIndex(msg => msg.id === message.id);
    if (messageIndex !== -1) {
      this.messages[messageIndex] = {
        ...this.messages[messageIndex],
        status: 'sending',
        error: undefined
      };
      this.cdr.detectChanges();
      
      // Retry the API call
      const messageRequest: SendMessageRequest = {
        content: message.content,
        senderType: 'CLIENT'
      };
      
      const sub = this.chatService.sendMessage(this.clientId, messageRequest, this.currentThread.id).subscribe({
        next: (response) => {
          console.log('✅ Message retry successful:', response);
          
          if (messageIndex !== -1 && response.id) {
            this.messages[messageIndex] = {
              ...this.messages[messageIndex],
              id: response.id,
              timestamp: response.timestamp || this.messages[messageIndex].timestamp,
              status: 'sent'
            };
            this.cdr.detectChanges();
          }
        },
        error: (error) => {
          console.error('❌ Message retry failed:', error);
          
          if (messageIndex !== -1) {
            this.messages[messageIndex] = {
              ...this.messages[messageIndex],
              status: 'failed',
              error: 'Unable to send message. Please try again.'
            };
            this.cdr.detectChanges();
          }
        }
      });
      
      this.subscriptions.push(sub);
    }
  }

  // Template compatibility methods (for existing HTML)
  hideConversations(): void {
    this.showConversationsList = false;
  }

  selectAIConversation(conversation: any): void {
    // Not used in client portal, but needed for template compatibility
    console.log('AI conversation selection not available in client portal');
  }
}
