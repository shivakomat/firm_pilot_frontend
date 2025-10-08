import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SimplebarAngularModule } from 'simplebar-angular';
import { PagetitleComponent } from '../../shared/ui/pagetitle/pagetitle.component';
import { ChatService } from '../../core/services/chat.service';
import { ApiService } from '../../core/services/api.service';
import { ChatMessage, ChatThread, SendMessageRequest, ApiThreadResponse, ApiMessage } from '../../core/models/chat.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  standalone:true,
  imports:[PagetitleComponent,CommonModule,TabsModule,SimplebarAngularModule,ReactiveFormsModule,FormsModule]
})
export class ChatComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('scrollEle') scrollEle;
  @ViewChild('scrollRef') scrollRef;

  // Chat system properties
  threads: ChatThread[] = [];
  currentThread: ChatThread | null = null;
  messages: ChatMessage[] = [];
  currentUser: any;
  isClient: boolean;
  isLoading = false;
  
  // Add trackByIndex method
  trackByIndex(index: number, item: any): number {
    return index;
  }
  showEmojiPicker = false;
  chatSubmit = false;
  emoji: string = '';
  newMessageText: string = '';
  formData: UntypedFormGroup;
  private subscriptions: Subscription[] = [];
  
  // Breadcrumb
  breadCrumbItems: Array<{}>;

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private chatService: ChatService,
    private apiService: ApiService
  ) {
    this.currentUser = this.chatService.getCurrentUser();
    this.isClient = this.chatService.isClient();
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Firm Pilot' }, { label: 'Chat', active: true }];

    this.formData = this.formBuilder.group({
      message: ['', [Validators.required]],
    });

    this.initializeChat();
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private initializeChat() {
    if (this.isClient) {
      // Client portal: Load single thread with accountant
      this.loadClientThread();
    } else {
      // Accountant portal: Load all client threads
      this.loadAllThreads();
    }
  }

  private loadAllThreads() {
    this.isLoading = true;
    console.log('📋 Loading all client threads for accountant...');
    
    // First, load all clients to create potential threads
    const clientsSub = this.apiService.getClients().subscribe({
      next: (clientsResponse) => {
        console.log('✅ Clients loaded:', clientsResponse);
        
        if (clientsResponse.success && clientsResponse.clients) {
          // Convert clients to thread format for display
          this.threads = clientsResponse.clients.map(client => ({
            id: client.id,
            clientId: client.id,
            clientName: `${client.firstName} ${client.lastName}`.trim() || client.email,
            clientEmail: client.email,
            lastActivity: new Date(),
            unreadCount: 0,
            messages: [],
            lastMessage: undefined // Will be populated when messages are loaded
          }));
          
          console.log('📋 Created threads from clients:', this.threads);
          
          // Auto-select first client if available
          if (this.threads.length > 0) {
            this.selectThread(this.threads[0]);
          }
        }
        this.isLoading = false;
      },
      error: (error) => {
        console.error('❌ Error loading clients:', error);
        this.isLoading = false;
        
        // Fallback: try to load threads directly
        this.loadThreadsDirectly();
      }
    });
    this.subscriptions.push(clientsSub);
  }
  
  private loadThreadsDirectly() {
    console.log('🔄 Fallback: Loading threads directly...');
    const sub = this.chatService.getAllThreads().subscribe({
      next: (threads) => {
        this.threads = threads;
        this.isLoading = false;
        if (threads.length > 0) {
          this.selectThread(threads[0]);
        }
      },
      error: (error) => {
        console.error('❌ Error loading threads directly:', error);
        this.isLoading = false;
      }
    });
    this.subscriptions.push(sub);
  }

  private loadClientThread() {
    this.isLoading = true;
    const clientId = this.currentUser?.id || 1; // Fallback for testing
    const sub = this.chatService.getThread(clientId).subscribe({
      next: (response: ApiThreadResponse) => {
        if (response.success && response.thread) {
          // Convert API thread to our format
          this.currentThread = {
            id: response.thread.id,
            clientId: response.thread.clientId,
            clientName: 'Client',
            clientEmail: 'client@example.com',
            lastActivity: new Date(response.thread.createdAt),
            unreadCount: 0,
            messages: []
          };
          
          // Convert API messages to our format
          this.messages = response.messages.map((msg: ApiMessage) => ({
            id: msg.id,
            content: msg.body,
            senderId: msg.senderId,
            senderName: msg.senderId === clientId ? 'You' : 'Accountant',
            senderType: msg.senderId === clientId ? 'CLIENT' : 'ACCOUNTANT',
            timestamp: new Date(msg.createdAt),
            threadId: msg.threadId
          }));
        }
        this.isLoading = false;
        this.scrollToBottom();
      },
      error: (error) => {
        console.error('Error loading client thread:', error);
        this.isLoading = false;
      }
    });
    this.subscriptions.push(sub);
  }

  selectThread(thread: ChatThread) {
    console.log('📋 Selecting thread for client:', thread.clientName);
    this.currentThread = thread;
    this.messages = [];
    
    // Load messages for this client thread
    this.loadMessagesForClient(thread.clientId);
    this.scrollToBottom();
  }
  
  private loadMessagesForClient(clientId: number) {
    console.log('📨 Loading messages for client ID:', clientId);
    this.isLoading = true;
    
    const sub = this.chatService.getThread(clientId).subscribe({
      next: (response: ApiThreadResponse) => {
        console.log('✅ Thread messages response:', response);
        
        if (response.success && response.messages) {
          // Convert API messages to our format
          this.messages = response.messages.map((msg: ApiMessage) => ({
            id: msg.id,
            content: msg.body,
            senderId: msg.senderId,
            senderName: msg.senderId === clientId ? this.currentThread?.clientName || 'Client' : 'You',
            senderType: msg.senderId === clientId ? 'CLIENT' : 'ACCOUNTANT',
            timestamp: new Date(msg.createdAt),
            threadId: msg.threadId
          }));
          
          // Update the thread's last message
          if (this.currentThread && this.messages.length > 0) {
            this.currentThread.lastMessage = this.messages[this.messages.length - 1];
            this.currentThread.messages = this.messages;
          }
          
          console.log('📨 Loaded messages:', this.messages);
        } else {
          console.log('ℹ️ No messages found for this client yet');
          this.messages = [];
        }
        
        this.isLoading = false;
        this.scrollToBottom();
      },
      error: (error) => {
        console.error('❌ Error loading messages for client:', error);
        this.messages = [];
        this.isLoading = false;
      }
    });
    this.subscriptions.push(sub);
  }

  ngAfterViewInit() {
    this.scrollEle.SimpleBar.getScrollElement().scrollTop = 100;
    this.scrollRef.SimpleBar.getScrollElement().scrollTop = 200;
  }

  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }


  scrollToBottom() {
    if (this.scrollRef !== undefined) {
      setTimeout(() => {
        this.scrollRef.SimpleBar.getScrollElement().scrollTop =
          this.scrollRef.SimpleBar.getScrollElement().scrollHeight + 1500;
      }, 500);
    }
  }

  /**
   * Send message in chat
   */
  sendMessage() {
    const messageContent = this.newMessageText?.trim();
    if (!messageContent || !this.currentThread) {
      return;
    }

    const messageRequest: SendMessageRequest = {
      content: messageContent,
      senderType: this.isClient ? 'CLIENT' : 'ACCOUNTANT'
    };

    const clientId = this.isClient ? this.currentUser?.id : this.currentThread.clientId;
    
    const sub = this.chatService.sendMessage(clientId, messageRequest, this.currentThread?.id).subscribe({
      next: (newMessage) => {
        this.messages.push(newMessage);
        this.scrollToBottom();
        this.newMessageText = '';
        
        // Check if we should trigger AI response
        if (!this.isClient && messageContent.toLowerCase().includes('@ai')) {
          this.triggerAIResponse(messageContent);
        }
      },
      error: (error) => {
        console.error('Error sending message:', error);
      }
    });
    this.subscriptions.push(sub);
  }

  /**
   * Trigger AI Tax Agent response
   */
  private triggerAIResponse(userMessage: string) {
    if (!this.currentThread) return;

    const sub = this.chatService.getAIResponse(userMessage).subscribe({
      next: (aiResponse) => {
        const aiMessage: ChatMessage = {
          content: aiResponse.message,
          senderId: 0, // AI agent ID
          senderName: 'Tax AI Agent',
          senderType: 'AI_AGENT',
          timestamp: new Date(),
          threadId: this.currentThread!.id
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

  // Delete Message
  deleteMessage(event: any) {
    event.target.closest('li').remove();
  }

  // Copy Message
  copyMessage(event: any) {
    navigator.clipboard.writeText(event.target.closest('li').querySelector('p').innerHTML);
  }

  // Delete All Message
  deleteAllMessage(event: any) {
    var allMsgDelete: any = document.querySelector('.chat-conversation')?.querySelectorAll('li');
    allMsgDelete.forEach((item: any) => {
      item.remove();
    })
  }

  // Emoji Picker
  sets: any = [
    'native',
    'google',
    'twitter',
    'facebook',
    'emojione',
    'apple',
    'messenger'
  ]
  set: any = 'twitter';
  
  toggleEmojiPicker() {
    this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event: any) {
    const currentMessage = this.newMessageText || '';
    this.newMessageText = currentMessage + event.emoji.native;
    this.showEmojiPicker = false;
  }

  onKeyPress(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

  onFocus() {
    this.showEmojiPicker = false;
  }

  onBlur() {
  }

  closeReplay() {
    document.querySelector('.replyCard')?.classList.remove('show');
  }

  // Contact Search
  ContactSearch() {
    var input: any, filter: any, ul: any, li: any, a: any | undefined, i: any, txtValue: any;
    input = document.getElementById("searchContact") as HTMLAreaElement;
    filter = input.value.toUpperCase();
    ul = document.querySelectorAll(".chat-list");
    ul.forEach((item: any) => {
      li = item.getElementsByTagName("li");
      for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("h5")[0];
        txtValue = a?.innerText;
        if (txtValue?.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
        } else {
          li[i].style.display = "none";
        }
      }
    })
  }

}
