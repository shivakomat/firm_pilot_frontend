import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

import { ChatComponent } from './chat.component';
import { ChatService } from '../../../core/services/chat.service';
import { AuthenticationService } from '../../../core/services/auth.service';

describe('ChatComponent', () => {
  let component: ChatComponent;
  let fixture: ComponentFixture<ChatComponent>;
  let mockChatService: jasmine.SpyObj<ChatService>;
  let mockAuthService: jasmine.SpyObj<AuthenticationService>;

  const mockUser = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    token: 'mock-jwt-token'
  };

  const mockApiResponse = {
    success: true,
    thread: {
      id: 1,
      clientId: 1
    },
    messages: [
      {
        id: 1,
        body: 'Hello, I need help with my taxes',
        senderId: 1,
        threadId: 1,
        createdAt: '2025-01-01T10:00:00Z'
      },
      {
        id: 2,
        body: 'I can help you with that. What specific questions do you have?',
        senderId: 2,
        threadId: 1,
        createdAt: '2025-01-01T10:05:00Z'
      }
    ]
  };

  beforeEach(async () => {
    const chatServiceSpy = jasmine.createSpyObj('ChatService', [
      'getThread',
      'sendMessage',
      'getCurrentUserClientId'
    ]);
    const authServiceSpy = jasmine.createSpyObj('AuthenticationService', [
      'currentUser'
    ]);

    await TestBed.configureTestingModule({
      declarations: [ChatComponent],
      imports: [FormsModule, HttpClientTestingModule],
      providers: [
        { provide: ChatService, useValue: chatServiceSpy },
        { provide: AuthenticationService, useValue: authServiceSpy }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ChatComponent);
    component = fixture.componentInstance;
    mockChatService = TestBed.inject(ChatService) as jasmine.SpyObj<ChatService>;
    mockAuthService = TestBed.inject(AuthenticationService) as jasmine.SpyObj<AuthenticationService>;

    // Setup default mocks
    mockAuthService.currentUser.and.returnValue(mockUser);
    mockChatService.getCurrentUserClientId.and.returnValue(1);
    mockChatService.getThread.and.returnValue(of(mockApiResponse));
    mockChatService.sendMessage.and.returnValue(of({
      id: 3,
      content: 'Test message',
      senderId: 1,
      senderName: 'You',
      senderType: 'CLIENT',
      timestamp: new Date(),
      threadId: 1
    }));

    // Mock localStorage
    spyOn(localStorage, 'getItem').and.returnValue('mock-auth-token');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct user data', () => {
    expect(component.currentUser).toEqual(mockUser);
    expect(component.userJWT).toBe('mock-auth-token');
    expect(component.clientId).toBe(1);
  });

  it('should initialize chat on ngOnInit', async () => {
    spyOn(component, 'initializeChatWithPolling');
    
    component.ngOnInit();
    
    expect(component.initializeChatWithPolling).toHaveBeenCalled();
  });

  it('should load existing messages on initialization', async () => {
    await component.initializeChat();
    
    expect(mockChatService.getThread).toHaveBeenCalledWith(1);
    expect(component.messages.length).toBe(2);
    expect(component.messages[0].content).toBe('Hello, I need help with my taxes');
    expect(component.messages[1].content).toBe('I can help you with that. What specific questions do you have?');
    expect(component.isInitialized).toBe(true);
    expect(component.isLoading).toBe(false);
  });

  it('should handle initialization error gracefully', async () => {
    mockChatService.getThread.and.returnValue(throwError('API Error'));
    spyOn(component, 'createNewThread');
    
    await component.initializeChat();
    
    expect(component.createNewThread).toHaveBeenCalled();
    expect(component.isInitialized).toBe(true);
    expect(component.isLoading).toBe(false);
  });

  it('should send message successfully', async () => {
    component.currentThread = {
      id: 1,
      clientId: 1,
      clientName: 'John Doe',
      clientEmail: 'john.doe@example.com',
      lastActivity: new Date(),
      unreadCount: 0,
      messages: []
    };
    component.newMessage = 'Test message';
    
    await component.sendMessage();
    
    expect(mockChatService.sendMessage).toHaveBeenCalledWith(
      1,
      { content: 'Test message', senderType: 'CLIENT' },
      1
    );
    expect(component.newMessage).toBe('');
    expect(component.messages.length).toBe(1);
  });

  it('should not send empty message', async () => {
    component.newMessage = '   ';
    
    await component.sendMessage();
    
    expect(mockChatService.sendMessage).not.toHaveBeenCalled();
  });

  it('should not send message without current thread', async () => {
    component.currentThread = null;
    component.newMessage = 'Test message';
    
    await component.sendMessage();
    
    expect(mockChatService.sendMessage).not.toHaveBeenCalled();
  });

  it('should identify own messages correctly', () => {
    spyOn(component, 'getCurrentUserId').and.returnValue(1);
    
    expect(component['isMyMessage'](1)).toBe(true);
    expect(component['isMyMessage'](2)).toBe(false);
  });

  it('should format time correctly', () => {
    const testDate = new Date('2025-01-01T14:30:00Z');
    const formattedTime = component.formatTime(testDate);
    
    expect(formattedTime).toContain('2:30');
    expect(formattedTime).toContain('PM');
  });

  it('should format date correctly', () => {
    const testDate = new Date('2025-01-01T14:30:00Z');
    const formattedDate = component.formatDate(testDate);
    
    expect(formattedDate).toContain('Wednesday');
    expect(formattedDate).toContain('January');
    expect(formattedDate).toContain('2025');
  });

  it('should handle keypress events', () => {
    spyOn(component, 'sendMessage');
    const enterEvent = new KeyboardEvent('keypress', { key: 'Enter', shiftKey: false });
    const shiftEnterEvent = new KeyboardEvent('keypress', { key: 'Enter', shiftKey: true });
    
    component.onKeyPress(enterEvent);
    expect(component.sendMessage).toHaveBeenCalled();
    
    component.onKeyPress(shiftEnterEvent);
    // Should not call sendMessage again for shift+enter
    expect(component.sendMessage).toHaveBeenCalledTimes(1);
  });

  it('should clean up subscriptions on destroy', () => {
    const mockSubscription = jasmine.createSpyObj('Subscription', ['unsubscribe']);
    component.subscriptions = [mockSubscription];
    
    component.ngOnDestroy();
    
    expect(mockSubscription.unsubscribe).toHaveBeenCalled();
  });

  it('should check for new messages', () => {
    component.currentThread = {
      id: 1,
      clientId: 1,
      clientName: 'John Doe',
      clientEmail: 'john.doe@example.com',
      lastActivity: new Date(),
      unreadCount: 0,
      messages: []
    };
    component.messages = []; // Start with no messages
    
    component['checkForNewMessages']();
    
    expect(mockChatService.getThread).toHaveBeenCalledWith(1);
  });

  it('should create new thread when no existing thread', () => {
    component['createNewThread']();
    
    expect(component.currentThread).toBeDefined();
    expect(component.currentThread?.clientId).toBe(1);
    expect(component.currentThread?.clientName).toBe('John Doe');
    expect(component.messages).toEqual([]);
  });
});
