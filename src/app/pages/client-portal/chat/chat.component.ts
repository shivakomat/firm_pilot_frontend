import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../../core/services/chat.service';
import { AiChatService, AIConversation, AIMessage } from '../../../core/services/ai-chat.service';
import { ChatMessage, ChatThread, SendMessageRequest } from '../../../core/models/chat.model';
import { Subscription } from 'rxjs';
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
  private subscriptions: Subscription[] = [];

  constructor(
    private chatService: ChatService,
    private aiChatService: AiChatService
  ) {
    this.currentUser = this.chatService.getCurrentUser();
    
    // Configure marked for better formatting
    marked.setOptions({
      breaks: true,
      gfm: true
    });
  }

  ngOnInit(): void {
    this.loadMessages();
    this.loadAIConversations();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  ngOnDestroy(): void {
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
          timestamp: new Date(msg.timestamp)
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

  formatTime(timestamp: Date | string): string {
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

  formatDate(timestamp: Date | string): string {
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
    if (index === 0) return true;
    
    const currentMessages = this.chatMode === 'ai' ? this.aiMessages : this.messages;
    const currentMessage = currentMessages[index];
    const previousMessage = currentMessages[index - 1];
    
    if (!currentMessage || !previousMessage) return false;
    
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

  isMyMessage(message: ChatMessage): boolean {
    return message.senderType === 'CLIENT' && message.senderId === this.currentUser?.id;
  }

  isAIMessage(message: ChatMessage): boolean {
    return message.senderType === 'AI_AGENT';
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
          timestamp: new Date(response.userMessage.timestamp)
        });
        
        this.aiMessages.push({
          ...response.assistantMessage,
          timestamp: new Date(response.assistantMessage.timestamp)
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
      timestamp: message.timestamp,
      threadId: 1
    };
  }

  /**
   * Format message content with markdown parsing for AI messages
   */
  formatMessageContent(message: any): string {
    if (this.chatMode === 'ai' && message.role === 'assistant') {
      try {
        return marked.parse(message.content) as string;
      } catch (error) {
        console.error('Error parsing markdown:', error);
        return this.formatPlainText(message.content);
      }
    } else if (this.chatMode === 'accountant' && this.isAIMessage(message)) {
      try {
        return marked.parse(message.content) as string;
      } catch (error) {
        console.error('Error parsing markdown:', error);
        return this.formatPlainText(message.content);
      }
    }
    
    return this.formatPlainText(message.content);
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
}
