import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../../../core/services/chat.service';
import { ChatMessage, ChatThread, SendMessageRequest } from '../../../core/models/chat.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked, OnDestroy {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  
  messages: ChatMessage[] = [];
  newMessage: string = '';
  currentThread: ChatThread | null = null;
  currentUser: any;
  isLoading = false;
  private subscriptions: Subscription[] = [];

  constructor(private chatService: ChatService) {
    this.currentUser = this.chatService.getCurrentUser();
  }

  ngOnInit(): void {
    this.loadMessages();
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
    
    const sub = this.chatService.getThread(clientId).subscribe({
      next: (response) => {
        this.currentThread = response.thread;
        this.messages = response.messages;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Error loading messages:', error);
        this.isLoading = false;
        // Fallback to mock data for demo
        this.loadMockMessages();
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

  sendMessage(): void {
    if (this.newMessage.trim() && this.currentThread) {
      const messageRequest: SendMessageRequest = {
        content: this.newMessage.trim(),
        senderType: 'CLIENT'
      };

      const clientId = this.currentUser?.id || 1;
      
      const sub = this.chatService.sendMessage(clientId, messageRequest).subscribe({
        next: (newMessage) => {
          this.messages.push(newMessage);
          this.newMessage = '';
          this.scrollToBottom();
          
          // Check if message mentions AI agent
          if (messageRequest.content.toLowerCase().includes('@ai')) {
            this.triggerAIResponse(messageRequest.content);
          }
        },
        error: (error) => {
          console.error('Error sending message:', error);
          // Fallback to local message for demo
          this.addLocalMessage();
        }
      });
      this.subscriptions.push(sub);
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
        this.scrollToBottom();
      },
      error: (error) => {
        console.error('Error getting AI response:', error);
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

  formatTime(timestamp: Date): string {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(timestamp);
  }

  formatDate(timestamp: Date): string {
    const today = new Date();
    const messageDate = new Date(timestamp);
    
    if (messageDate.toDateString() === today.toDateString()) {
      return 'Today';
    }
    
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (messageDate.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    }
    
    return messageDate.toLocaleDateString();
  }

  shouldShowDateSeparator(index: number): boolean {
    if (index === 0) return true;
    
    const currentMessage = this.messages[index];
    const previousMessage = this.messages[index - 1];
    
    return currentMessage.timestamp.toDateString() !== previousMessage.timestamp.toDateString();
  }

  isMyMessage(message: ChatMessage): boolean {
    return message.senderType === 'CLIENT' && message.senderId === this.currentUser?.id;
  }

  isAIMessage(message: ChatMessage): boolean {
    return message.senderType === 'AI_AGENT';
  }
}
