import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../../core/services/chat.service';
import { AiChatService, AIConversation, AIMessage } from '../../../core/services/ai-chat.service';
import { ChatMessage, ChatThread, SendMessageRequest } from '../../../core/models/chat.model';
import { AuthenticationService } from '../../../core/services/auth.service';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { marked } from 'marked';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  
  // Chat mode: 'accountant' or 'ai'
  chatMode: 'accountant' | 'ai' = 'accountant';
  
  // Accountant chat
  messages: ChatMessage[] = [];
  currentThread: ChatThread | null = null;
  
  // AI chat
  aiConversations: AIConversation[] = [];
  currentAIConversation: AIConversation | null = null;
  aiMessages: AIMessage[] = [];
  showConversationsList = false;
  
  // Common
  newMessage: string = '';
  currentUser: any;
  isLoading = false;
  isInitialized = false; // Add initialization flag
  private subscriptions: Subscription[] = [];
  private destroy$ = new Subject<void>();

  constructor(
    private chatService: ChatService,
    private aiChatService: AiChatService,
    private authService: AuthenticationService
  ) {
    this.currentUser = this.authService.currentUser();
    
    // Initialize message arrays to prevent undefined errors
    this.messages = [];
    this.aiMessages = [];
    this.aiConversations = [];
    
    // Configure marked for better formatting
    marked.setOptions({
      breaks: true,
      gfm: true
    });
  }

  ngOnInit(): void {
    console.log('🚀 Chat Component ngOnInit started');
    
    // Ensure arrays are properly initialized to prevent race conditions
    this.messages = this.messages || [];
    this.aiMessages = this.aiMessages || [];
    this.aiConversations = this.aiConversations || [];
    
    console.log('📊 Initial arrays state:', {
      messages: this.messages,
      aiMessages: this.aiMessages,
      aiConversations: this.aiConversations,
      chatMode: this.chatMode
    });
    
    // Set initialization flag to false until everything is loaded
    this.isInitialized = false;
    
    // Load data and mark as initialized when done
    Promise.all([
      this.loadMessagesPromise(),
      this.loadAIConversationsPromise()
    ]).then(() => {
      console.log('✅ All data loaded successfully, setting isInitialized = true');
      this.isInitialized = true;
    }).catch((error) => {
      console.error('❌ Error during initialization:', error);
      this.isInitialized = true; // Still mark as initialized to show UI
    });
  }

  private loadMessagesPromise(): Promise<void> {
    console.log('📝 loadMessagesPromise started', {
      chatMode: this.chatMode,
      currentAIConversation: this.currentAIConversation
    });
    
    return new Promise((resolve) => {
      if (this.chatMode === 'ai' && this.currentAIConversation) {
        console.log('🤖 Loading AI conversation messages for ID:', this.currentAIConversation.id);
        
        // Load AI conversation messages from API
        this.aiChatService.getConversation(this.currentAIConversation.id)
          .pipe(takeUntil(this.destroy$))
          .subscribe({
            next: (response) => {
              console.log('✅ AI messages API response:', response);
              
              this.aiMessages = response.messages.map(msg => ({
                ...msg,
                timestamp: msg.timestamp ? new Date(msg.timestamp) : new Date()
              }));
              
              console.log('📋 Processed AI messages:', this.aiMessages);
              resolve();
            },
            error: (error) => {
              console.error('❌ Error loading AI messages:', error);
              this.aiMessages = [];
              resolve();
            }
          });
      } else {
        console.log('💬 Loading regular chat messages (mock data)');
        
        // Load regular chat messages (fallback to mock for now)
        try {
          this.loadMessages();
          console.log('📋 Loaded regular messages:', this.messages);
          resolve();
        } catch (error) {
          console.error('❌ Error loading messages:', error);
          resolve();
        }
      }
    });
  }

  private loadAIConversationsPromise(): Promise<void> {
    console.log('🗂️ loadAIConversationsPromise started');
    
    return new Promise((resolve) => {
      this.isLoading = true;
      
      const sub = this.aiChatService.getConversations()
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: (response) => {
            console.log('✅ AI conversations API response:', response);
            
            // Handle the response properly - it might be an array or an object with conversations
            const conversations = Array.isArray(response) ? response : (response?.conversations || []);
            this.aiConversations = conversations;
            this.isLoading = false;
            
            console.log('📋 Processed AI conversations:', this.aiConversations);
            
            // Auto-select first conversation if available
            if (conversations && conversations.length > 0 && !this.currentAIConversation) {
              console.log('🎯 Auto-selecting first conversation:', conversations[0]);
              this.selectAIConversation(conversations[0]);
            }
            resolve();
          },
          error: (error) => {
            console.error('❌ Error loading AI conversations:', error);
            this.aiConversations = [];
            this.isLoading = false;
            resolve();
          }
        });
      
      this.subscriptions.push(sub);
    });
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  loadMessages(): void {
    this.isLoading = true;
    const clientId = this.currentUser?.id || 1;
    
    // First try to load from localStorage
    const savedMessages = this.loadMessagesFromStorage(clientId);
    if (savedMessages.length > 0) {
      this.messages = savedMessages;
      this.isLoading = false;
      return;
    }
    
    const sub = this.chatService.getThread(clientId).subscribe({
      next: (response) => {
        this.currentThread = response.thread;
        this.messages = response.messages;
        this.saveMessagesToStorage(clientId, this.messages);
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading messages:', error);
        this.isLoading = false;
        // Fallback to mock data for demo
        this.loadMockMessages();
        this.saveMessagesToStorage(clientId, this.messages);
      }
    });
    this.subscriptions.push(sub);
  }

  private loadMockMessages(): void {
    this.messages = [
      {
        content: 'Hello! Welcome to our chat system. How can I help you today?',
        senderId: 1,
        senderName: 'Sarah Johnson, CPA',
        senderType: 'ACCOUNTANT',
        timestamp: new Date('2024-02-10T09:00:00'),
        threadId: 1
      },
      {
        content: 'Hi Sarah! I have a question about my quarterly tax payments.',
        senderId: this.currentUser?.id || 2,
        senderName: 'You',
        senderType: 'CLIENT',
        timestamp: new Date('2024-02-10T09:15:00'),
        threadId: 1
      },
      {
        content: 'Of course! I\'d be happy to help with your quarterly payments. What specific question do you have?',
        senderId: 1,
        senderName: 'Sarah Johnson, CPA',
        senderType: 'ACCOUNTANT',
        timestamp: new Date('2024-02-10T09:16:00'),
        threadId: 1
      }
    ];
  }

  private loadMessagesFromStorage(clientId: number): ChatMessage[] {
    try {
      const storageKey = `chat_messages_client_${clientId}`;
      const savedData = localStorage.getItem(storageKey);
      if (savedData) {
        const messages = JSON.parse(savedData);
        // Convert timestamp strings back to Date objects
        return messages.map((msg: any) => ({
          ...msg,
          timestamp: msg.timestamp ? new Date(msg.timestamp) : new Date()
        }));
      }
    } catch (error) {
      console.error('Error loading messages from storage:', error);
    }
    return [];
  }

  private saveMessagesToStorage(clientId: number, messages: ChatMessage[]): void {
    try {
      const storageKey = `chat_messages_client_${clientId}`;
      localStorage.setItem(storageKey, JSON.stringify(messages));
    } catch (error) {
      console.error('Error saving messages to storage:', error);
    }
  }

  sendMessage(): void {
    if (!this.newMessage.trim()) return;
    
    if (this.chatMode === 'accountant') {
      this.sendAccountantMessage();
    } else {
      this.sendAIMessage();
    }
  }

  private addLocalMessage(): void {
    const message: ChatMessage = {
      content: this.newMessage.trim(),
      senderId: this.currentUser?.id || 2,
      senderName: 'You',
      senderType: 'CLIENT',
      timestamp: new Date(),
      threadId: this.currentThread?.id || 1
    };
    
    this.messages.push(message);
    this.newMessage = '';
    
    // Simulate accountant response
    setTimeout(() => {
      this.simulateAccountantResponse();
    }, 2000);
  }

  private simulateAccountantResponse(): void {
    const responses = [
      'Thank you for your message. I\'ll review this and get back to you shortly.',
      'I understand your concern. Let me look into this for you.',
      'That\'s a great question. I\'ll need to check a few things and respond within the hour.',
      'I\'ve received your message and will provide a detailed response soon.'
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    const response: ChatMessage = {
      content: randomResponse,
      senderId: 1,
      senderName: 'Sarah Johnson, CPA',
      senderType: 'ACCOUNTANT',
      timestamp: new Date(),
      threadId: this.currentThread?.id || 1
    };
    
    this.messages.push(response);
    const clientId = this.currentUser?.id || 1;
    this.saveMessagesToStorage(clientId, this.messages);
  }

  private handleAIResponse(userMessage: string): void {
    setTimeout(() => {
      const aiResponses = [
        "I understand you're asking about tax matters. Based on current tax regulations, here's what I can tell you: For quarterly payments, you should calculate 25% of your expected annual tax liability and submit by the quarterly deadlines.",
        "That's a great tax question! Here's some guidance: Business expenses must be ordinary and necessary for your trade or business. Keep detailed records and receipts for all deductions.",
        "I can help with that tax inquiry. Here's what you should know: The standard deduction for 2024 is $14,600 for single filers and $29,200 for married filing jointly.",
        "Thank you for your tax question. Here's some helpful information: Self-employment tax is 15.3% of your net self-employment earnings, covering Social Security and Medicare taxes."
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage: ChatMessage = {
        content: randomResponse,
        senderId: 0,
        senderName: 'Tax AI Agent',
        senderType: 'AI_AGENT',
        timestamp: new Date(),
        threadId: this.currentThread?.id || 1
      };
      
      this.messages.push(aiMessage);
      const clientId = this.currentUser?.id || 1;
      this.saveMessagesToStorage(clientId, this.messages);
      this.scrollToBottom();
    }, 1500);
  }

  private triggerAIResponse(userMessage: string): void {
    const sub = this.chatService.getAIResponse(userMessage).subscribe({
      next: (aiResponse) => {
        const aiMessage: ChatMessage = {
          content: aiResponse.message,
          senderId: 0,
          senderName: 'Tax AI Agent',
          senderType: 'AI_AGENT',
          timestamp: new Date(),
          threadId: this.currentThread?.id || 1
        };
        
        this.messages.push(aiMessage);
        const clientId = this.currentUser?.id || 1;
        this.saveMessagesToStorage(clientId, this.messages);
        this.scrollToBottom();
      },
      error: (error) => {
        console.error('Error getting AI response:', error);
        // Fallback to local AI response
        this.handleAIResponse(userMessage);
      }
    });
    this.subscriptions.push(sub);
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  private scrollToBottom(): void {
    try {
      if (this.messagesContainer) {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      }
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }

  formatTime(timestamp: Date | string | null | undefined): string {
    if (!timestamp) {
      return new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
    }
    
    try {
      const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
      
      // Check if date is valid
      if (isNaN(date.getTime())) {
        return new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
      }
      
      return new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      }).format(date);
    } catch (error) {
      console.error('Error formatting time:', error, timestamp);
      return new Date().toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      });
    }
  }

  formatDate(timestamp: Date | string | null | undefined): string {
    if (!timestamp) {
      return 'Today';
    }
    
    try {
      const today = new Date();
      const messageDate = timestamp instanceof Date ? timestamp : new Date(timestamp);
      
      // Check if date is valid
      if (isNaN(messageDate.getTime())) {
        return 'Today';
      }
      
      if (messageDate.toDateString() === today.toDateString()) {
        return 'Today';
      }
      
      const yesterday = new Date(today);
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (messageDate.toDateString() === yesterday.toDateString()) {
        return 'Yesterday';
      }
      
      return messageDate.toLocaleDateString();
    } catch (error) {
      console.error('Error formatting date:', error, timestamp);
      return 'Today';
    }
  }

  shouldShowDateSeparator(index: number): boolean {
    console.log('📅 shouldShowDateSeparator called:', {
      index,
      chatMode: this.chatMode,
      aiMessagesLength: this.aiMessages?.length,
      messagesLength: this.messages?.length
    });
    
    if (index === 0) return true;
    
    const currentMessages = this.chatMode === 'ai' ? this.aiMessages : this.messages;
    
    console.log('📋 Current messages array:', currentMessages);
    
    // Extra safety checks
    if (!currentMessages || currentMessages.length === 0) {
      console.log('⚠️ No messages array or empty array');
      return false;
    }
    if (index >= currentMessages.length || index < 0) {
      console.log('⚠️ Index out of bounds:', { index, length: currentMessages.length });
      return false;
    }
    
    const currentMessage = currentMessages[index];
    const previousMessage = currentMessages[index - 1];
    
    console.log('📨 Messages for comparison:', {
      currentMessage,
      previousMessage,
      currentTimestamp: currentMessage?.timestamp,
      previousTimestamp: previousMessage?.timestamp
    });
    
    if (!currentMessage || !previousMessage || !currentMessage.timestamp || !previousMessage.timestamp) {
      console.log('⚠️ Missing message or timestamp data');
      return false;
    }
    
    try {
      const currentDate = currentMessage.timestamp instanceof Date ? 
        currentMessage.timestamp : new Date(currentMessage.timestamp);
      const previousDate = previousMessage.timestamp instanceof Date ? 
        previousMessage.timestamp : new Date(previousMessage.timestamp);
      
      // Check if dates are valid
      if (isNaN(currentDate.getTime()) || isNaN(previousDate.getTime())) {
        return false;
      }
      
      return currentDate.toDateString() !== previousDate.toDateString();
    } catch (error) {
      console.error('Error in shouldShowDateSeparator:', error);
      return false;
    }
  }

  // === AI CHAT METHODS ===

  switchChatMode(mode: 'accountant' | 'ai'): void {
    this.chatMode = mode;
    this.showConversationsList = false;
    
    if (mode === 'ai') {
      if (this.aiConversations.length === 0) {
        this.loadAIConversations();
      }
      // If no current conversation is selected, try to select the first one
      if (!this.currentAIConversation && this.aiConversations.length > 0) {
        this.selectAIConversation(this.aiConversations[0]);
      }
    }
  }

  loadAIConversations(): void {
    const sub = this.aiChatService.getConversations().subscribe({
      next: (response) => {
        this.aiConversations = response.conversations.map(conv => ({
          ...conv,
          createdAt: new Date(conv.createdAt),
          updatedAt: new Date(conv.updatedAt)
        }));
        
        // Auto-select the most recent conversation
        if (this.aiConversations.length > 0 && !this.currentAIConversation) {
          this.selectAIConversation(this.aiConversations[0]);
        }
      },
      error: (error) => {
        console.error('Error loading AI conversations:', error);
      }
    });
    this.subscriptions.push(sub);
  }

  startNewConversation(): void {
    const sub = this.aiChatService.createConversation({ title: 'New Tax Question' }).subscribe({
      next: (response) => {
        const newConversation: AIConversation = {
          id: response.id,
          title: response.title,
          createdAt: new Date(response.createdAt),
          updatedAt: new Date(response.createdAt),
          messageCount: 0
        };
        
        this.aiConversations.unshift(newConversation);
        this.selectAIConversation(newConversation);
        
        Swal.fire({
          icon: 'success',
          title: 'New Conversation Started',
          text: 'You can now ask your tax questions to the AI assistant.',
          timer: 2000,
          showConfirmButton: false
        });
      },
      error: (error) => {
        console.error('Error creating conversation:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to create new conversation. Please try again.'
        });
      }
    });
    this.subscriptions.push(sub);
  }

  selectAIConversation(conversation: AIConversation): void {
    this.currentAIConversation = conversation;
    this.loadAIMessages(conversation.id);
    this.showConversationsList = false;
  }

  loadAIMessages(conversationId: string): void {
    this.isLoading = true;
    const sub = this.aiChatService.getConversation(conversationId).subscribe({
      next: (response) => {
        this.aiMessages = response.messages.map(msg => ({
          ...msg,
          timestamp: msg.timestamp ? new Date(msg.timestamp) : new Date()
        }));
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading AI messages:', error);
        this.aiMessages = [];
        this.isLoading = false;
      }
    });
    this.subscriptions.push(sub);
  }

  sendAIMessage(): void {
    if (!this.currentAIConversation) {
      // Create a new conversation first, then send the message
      this.createConversationAndSendMessage();
      return;
    }

    const messageContent = this.newMessage.trim();
    this.isLoading = true;
    
    const sub = this.aiChatService.sendMessage(this.currentAIConversation.id, {
      content: messageContent
    }).subscribe({
      next: (response) => {
        // Add both user and AI messages
        this.aiMessages.push({
          ...response.userMessage,
          timestamp: response.userMessage.timestamp ? new Date(response.userMessage.timestamp) : new Date()
        });
        
        this.aiMessages.push({
          ...response.assistantMessage,
          timestamp: response.assistantMessage.timestamp ? new Date(response.assistantMessage.timestamp) : new Date()
        });
        
        // Update conversation message count
        if (this.currentAIConversation) {
          this.currentAIConversation.messageCount += 2;
          this.currentAIConversation.updatedAt = new Date();
        }
        
        this.newMessage = '';
        this.isLoading = false;
        this.scrollToBottom();
      },
      error: (error) => {
        console.error('Error sending AI message:', error);
        this.isLoading = false;
        
        Swal.fire({
          icon: 'error',
          title: 'Message Failed',
          text: 'Failed to send message to AI assistant. Please try again.'
        });
      }
    });
    this.subscriptions.push(sub);
  }

  private createConversationAndSendMessage(): void {
    const messageContent = this.newMessage.trim();
    this.isLoading = true;
    
    const sub = this.aiChatService.createConversation({ 
      title: `Tax Question: ${messageContent.substring(0, 30)}...` 
    }).subscribe({
      next: (response) => {
        const newConversation: AIConversation = {
          id: response.id,
          title: response.title,
          createdAt: new Date(response.createdAt),
          updatedAt: new Date(response.createdAt),
          messageCount: 0
        };
        
        this.aiConversations.unshift(newConversation);
        this.currentAIConversation = newConversation;
        this.aiMessages = [];
        
        // Now send the message
        this.sendAIMessageToConversation(messageContent);
      },
      error: (error) => {
        console.error('Error creating conversation:', error);
        this.isLoading = false;
        
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to create new conversation. Please try again.'
        });
      }
    });
    this.subscriptions.push(sub);
  }

  private sendAIMessageToConversation(messageContent: string): void {
    if (!this.currentAIConversation) {
      this.isLoading = false;
      return;
    }

    const sub = this.aiChatService.sendMessage(this.currentAIConversation.id, {
      content: messageContent
    }).subscribe({
      next: (response) => {
        // Add both user and AI messages with safe timestamp handling
        this.aiMessages.push({
          ...response.userMessage,
          timestamp: response.userMessage.timestamp ? new Date(response.userMessage.timestamp) : new Date()
        });
        
        this.aiMessages.push({
          ...response.assistantMessage,
          timestamp: response.assistantMessage.timestamp ? new Date(response.assistantMessage.timestamp) : new Date()
        });
        
        // Update conversation message count
        if (this.currentAIConversation) {
          this.currentAIConversation.messageCount += 2;
          this.currentAIConversation.updatedAt = new Date();
        }
        
        this.newMessage = '';
        this.isLoading = false;
        this.scrollToBottom();
      },
      error: (error) => {
        console.error('Error sending AI message:', error);
        this.isLoading = false;
        
        Swal.fire({
          icon: 'error',
          title: 'Message Failed',
          text: 'Failed to send message to AI assistant. Please try again.'
        });
      }
    });
    this.subscriptions.push(sub);
  }

  sendAccountantMessage(): void {
    if (!this.currentThread) {
      this.addLocalMessage();
      return;
    }

    const messageRequest: SendMessageRequest = {
      content: this.newMessage.trim(),
      senderType: 'CLIENT'
    };

    const clientId = this.currentUser?.id || 1;
    
    const sub = this.chatService.sendMessage(clientId, messageRequest).subscribe({
      next: (response) => {
        const newMessage: ChatMessage = {
          content: this.newMessage,
          senderId: this.currentUser?.id || 2,
          senderName: 'You',
          senderType: 'CLIENT',
          timestamp: new Date(),
          threadId: this.currentThread?.id || 1
        };
        this.messages.push(newMessage);
        this.saveMessagesToStorage(clientId, this.messages);
        this.newMessage = '';
      },
      error: (error) => {
        console.error('Error sending message:', error);
        const newMessage: ChatMessage = {
          content: this.newMessage,
          senderId: this.currentUser?.id || 2,
          senderName: 'You',
          senderType: 'CLIENT',
          timestamp: new Date(),
          threadId: this.currentThread?.id || 1
        };
        this.messages.push(newMessage);
        this.saveMessagesToStorage(clientId, this.messages);
        this.newMessage = '';
      }
    });
    this.subscriptions.push(sub);
  }

  showConversations(): void {
    this.showConversationsList = true;
  }

  hideConversations(): void {
    this.showConversationsList = false;
  }

  // Get current messages based on chat mode
  getCurrentMessages(): (ChatMessage | AIMessage)[] {
    if (this.chatMode === 'ai') {
      return this.aiMessages;
    }
    return this.messages;
  }

  // Check if message is from current user
  isMyAIMessage(message: AIMessage): boolean {
    return message.role === 'user';
  }

  // Format AI message for display
  formatAIMessage(message: AIMessage): any {
    return {
      content: message.content,
      senderId: message.role === 'user' ? this.currentUser?.id || 2 : 0,
      senderName: message.role === 'user' ? 'You' : 'AI Tax Assistant',
      senderType: message.role === 'user' ? 'CLIENT' : 'AI_AGENT',
      timestamp: message.timestamp ? new Date(message.timestamp) : new Date(),
      threadId: 1
    };
  }

  /**
   * Format message content with markdown parsing for AI messages
   */
  formatMessageContent(message: any): string {
    if (this.chatMode === 'ai' && message.role === 'assistant') {
      return this.formatAIResponse(message.content);
    } else if (this.chatMode === 'accountant' && this.isAIMessage(message)) {
      return this.formatAIResponse(message.content);
    }
    
    return this.formatPlainText(message.content);
  }

  /**
   * Format AI response with proper paragraph breaks and structure
   */
  private formatAIResponse(content: string): string {
    if (!content) return '';
    
    // First, normalize line breaks and clean up the text
    let formatted = content.trim();
    
    // Replace multiple spaces with single spaces
    formatted = formatted.replace(/\s+/g, ' ');
    
    // Split by common paragraph indicators and rejoin with proper breaks
    formatted = formatted.replace(/\.\s+([A-Z])/g, '.</p><p>$1');
    formatted = formatted.replace(/:\s+([A-Z])/g, ':</p><p>$1');
    formatted = formatted.replace(/\?\s+([A-Z])/g, '?</p><p>$1');
    formatted = formatted.replace(/!\s+([A-Z])/g, '!</p><p>$1');
    
    // Handle numbered lists
    formatted = formatted.replace(/(\d+\.)\s+/g, '</p><p><strong>$1</strong> ');
    
    // Handle bullet points
    formatted = formatted.replace(/[-•]\s+/g, '</p><p>• ');
    
    // Handle special formatting markers
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>');
    formatted = formatted.replace(/`(.*?)`/g, '<code>$1</code>');
    
    // Handle section headers (words followed by colon and capital letter)
    formatted = formatted.replace(/([A-Z][a-z\s]+):\s*([A-Z])/g, '<strong>$1:</strong></p><p>$2');
    
    // Wrap in paragraph tags and clean up
    formatted = '<p>' + formatted + '</p>';
    
    // Clean up empty paragraphs and fix multiple paragraph tags
    formatted = formatted.replace(/<p><\/p>/g, '');
    formatted = formatted.replace(/<\/p><p>/g, '</p><p>');
    formatted = formatted.replace(/<p>\s*<p>/g, '<p>');
    formatted = formatted.replace(/<\/p>\s*<\/p>/g, '</p>');
    
    return formatted;
  }

  /**
   * Format plain text with basic formatting
   */
  private formatPlainText(content: string): string {
    if (!content) return '';
    
    // Convert line breaks to HTML
    let formatted = content.replace(/\n/g, '<br>');
    
    // Add basic formatting for common patterns
    formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Bold
    formatted = formatted.replace(/\*(.*?)\*/g, '<em>$1</em>'); // Italic
    formatted = formatted.replace(/`(.*?)`/g, '<code>$1</code>'); // Inline code
    
    // Format numbered lists
    formatted = formatted.replace(/^(\d+\.\s)/gm, '<br><strong>$1</strong>');
    
    // Format bullet points
    formatted = formatted.replace(/^[-•]\s/gm, '<br>• ');
    
    return formatted;
  }

  isMyMessage(message: any): boolean {
    return message.senderId === this.currentUser?.id;
  }

  isUserMessage(message: any): boolean {
    if (this.chatMode === 'ai') {
      return message.role === 'user';
    } else {
      return message.senderId === this.currentUser?.id;
    }
  }

  isAIMessage(message: any): boolean {
    return message.senderType === 'AI_AGENT' || message.role === 'assistant';
  }

  trackByMessage(index: number, message: any): any {
    return message ? (message.id || message.timestamp || index) : index;
  }

  getMessagesForCurrentMode(): any[] {
    const result = this.chatMode === 'ai' ? (this.aiMessages || []) : (this.messages || []);
    
    console.log('📨 getMessagesForCurrentMode called:', {
      chatMode: this.chatMode,
      isInitialized: this.isInitialized,
      aiMessages: this.aiMessages,
      messages: this.messages,
      result: result,
      resultLength: result.length
    });
    
    return result;
  }
}
