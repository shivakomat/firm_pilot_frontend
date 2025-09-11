import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';

interface ChatMessage {
  id: number;
  sender: 'client' | 'accountant';
  message: string;
  timestamp: Date;
  senderName: string;
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;
  
  messages: ChatMessage[] = [];
  newMessage: string = '';
  currentUser: string = 'client';

  constructor() { }

  ngOnInit(): void {
    this.loadMessages();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  loadMessages(): void {
    // Mock data - in real app, this would come from API
    this.messages = [
      {
        id: 1,
        sender: 'accountant',
        message: 'Hello! Welcome to our chat system. How can I help you today?',
        timestamp: new Date('2024-02-10T09:00:00'),
        senderName: 'Sarah Johnson, CPA'
      },
      {
        id: 2,
        sender: 'client',
        message: 'Hi Sarah! I have a question about my quarterly tax payments.',
        timestamp: new Date('2024-02-10T09:15:00'),
        senderName: 'You'
      },
      {
        id: 3,
        sender: 'accountant',
        message: 'Of course! I\'d be happy to help with your quarterly payments. What specific question do you have?',
        timestamp: new Date('2024-02-10T09:16:00'),
        senderName: 'Sarah Johnson, CPA'
      },
      {
        id: 4,
        sender: 'client',
        message: 'I\'m not sure if I calculated the amount correctly for Q4. Could you review my calculations?',
        timestamp: new Date('2024-02-10T09:20:00'),
        senderName: 'You'
      },
      {
        id: 5,
        sender: 'accountant',
        message: 'Absolutely! Please upload your calculation worksheet or share the details here, and I\'ll review it for you.',
        timestamp: new Date('2024-02-10T09:22:00'),
        senderName: 'Sarah Johnson, CPA'
      }
    ];
  }

  sendMessage(): void {
    if (this.newMessage.trim()) {
      const message: ChatMessage = {
        id: this.messages.length + 1,
        sender: 'client',
        message: this.newMessage.trim(),
        timestamp: new Date(),
        senderName: 'You'
      };
      
      this.messages.push(message);
      this.newMessage = '';
      
      // In real app, send message to API
      console.log('Sending message:', message);
      
      // Simulate accountant response (in real app, this would come from websocket or polling)
      setTimeout(() => {
        this.simulateAccountantResponse();
      }, 2000);
    }
  }

  simulateAccountantResponse(): void {
    const responses = [
      'Thank you for your message. I\'ll review this and get back to you shortly.',
      'I understand your concern. Let me look into this for you.',
      'That\'s a great question. I\'ll need to check a few things and respond within the hour.',
      'I\'ve received your message and will provide a detailed response soon.'
    ];
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    
    const response: ChatMessage = {
      id: this.messages.length + 1,
      sender: 'accountant',
      message: randomResponse,
      timestamp: new Date(),
      senderName: 'Sarah Johnson, CPA'
    };
    
    this.messages.push(response);
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
}
