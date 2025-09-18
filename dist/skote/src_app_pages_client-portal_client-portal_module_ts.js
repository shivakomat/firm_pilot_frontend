"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_client-portal_client-portal_module_ts"],{

/***/ 61278:
/*!************************************************************!*\
  !*** ./src/app/pages/client-portal/chat/chat.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChatComponent: () => (/* binding */ ChatComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _core_services_chat_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/chat.service */ 85538);






const _c0 = ["messagesContainer"];
function ChatComponent_div_24_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17)(1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.formatDate(message_r2.timestamp));
  }
}
function ChatComponent_div_24_div_3_i_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 53);
  }
}
function ChatComponent_div_24_div_3_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "i", 54);
  }
}
function ChatComponent_div_24_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 49)(1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ChatComponent_div_24_div_3_i_2_Template, 1, 0, "i", 51)(3, ChatComponent_div_24_div_3_i_3_Template, 1, 0, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bg-primary", message_r2.senderType === "ACCOUNTANT")("bg-gradient-ai", ctx_r2.isAIMessage(message_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r2.senderType === "ACCOUNTANT");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isAIMessage(message_r2));
  }
}
function ChatComponent_div_24_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const message_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r2.senderName);
  }
}
function ChatComponent_div_24_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 56)(1, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function ChatComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatComponent_div_24_div_1_Template, 3, 1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ChatComponent_div_24_div_3_Template, 4, 6, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ChatComponent_div_24_div_5_Template, 2, 1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, ChatComponent_div_24_div_10_Template, 3, 0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const message_r2 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.shouldShowDateSeparator(i_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("message-sent", ctx_r2.isMyMessage(message_r2))("message-received", !ctx_r2.isMyMessage(message_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.isMyMessage(message_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("bubble-sent", ctx_r2.isMyMessage(message_r2))("bubble-received", message_r2.senderType === "ACCOUNTANT")("bubble-ai", ctx_r2.isAIMessage(message_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.isMyMessage(message_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r2.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.formatTime(message_r2.timestamp));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.isMyMessage(message_r2));
  }
}
function ChatComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 59)(1, "div", 60)(2, "span", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Loading messages...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class ChatComponent {
  constructor(chatService) {
    this.chatService = chatService;
    this.messages = [];
    this.newMessage = '';
    this.currentThread = null;
    this.isLoading = false;
    this.subscriptions = [];
    this.currentUser = this.chatService.getCurrentUser();
  }
  ngOnInit() {
    this.loadMessages();
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
  loadMessages() {
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
      next: response => {
        this.currentThread = response.thread;
        this.messages = response.messages;
        this.saveMessagesToStorage(clientId, this.messages);
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading messages:', error);
        this.isLoading = false;
        // Fallback to mock data for demo
        this.loadMockMessages();
        this.saveMessagesToStorage(clientId, this.messages);
      }
    });
    this.subscriptions.push(sub);
  }
  loadMockMessages() {
    this.messages = [{
      content: 'Hello! Welcome to our chat system. How can I help you today?',
      senderId: 1,
      senderName: 'Sarah Johnson, CPA',
      senderType: 'ACCOUNTANT',
      timestamp: new Date('2024-02-10T09:00:00'),
      threadId: 1
    }, {
      content: 'Hi Sarah! I have a question about my quarterly tax payments.',
      senderId: this.currentUser?.id || 2,
      senderName: 'You',
      senderType: 'CLIENT',
      timestamp: new Date('2024-02-10T09:15:00'),
      threadId: 1
    }, {
      content: 'Of course! I\'d be happy to help with your quarterly payments. What specific question do you have?',
      senderId: 1,
      senderName: 'Sarah Johnson, CPA',
      senderType: 'ACCOUNTANT',
      timestamp: new Date('2024-02-10T09:16:00'),
      threadId: 1
    }];
  }
  loadMessagesFromStorage(clientId) {
    try {
      const storageKey = `chat_messages_client_${clientId}`;
      const savedData = localStorage.getItem(storageKey);
      if (savedData) {
        const messages = JSON.parse(savedData);
        // Convert timestamp strings back to Date objects
        return messages.map(msg => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
      }
    } catch (error) {
      console.error('Error loading messages from storage:', error);
    }
    return [];
  }
  saveMessagesToStorage(clientId, messages) {
    try {
      const storageKey = `chat_messages_client_${clientId}`;
      localStorage.setItem(storageKey, JSON.stringify(messages));
    } catch (error) {
      console.error('Error saving messages to storage:', error);
    }
  }
  sendMessage() {
    if (this.newMessage.trim() && this.currentThread) {
      const messageRequest = {
        content: this.newMessage.trim(),
        senderType: 'CLIENT'
      };
      const clientId = this.currentUser?.id || 1;
      const sub = this.chatService.sendMessage(clientId, messageRequest).subscribe({
        next: response => {
          // Add the sent message to the UI
          const newMessage = {
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
          // Handle AI response if message contains @ai
          if (newMessage.content.toLowerCase().includes('@ai')) {
            this.handleAIResponse(newMessage.content);
          }
        },
        error: error => {
          console.error('Error sending message:', error);
          // Still add message to UI for demo purposes
          const newMessage = {
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
          // Handle AI response if message contains @ai
          if (newMessage.content.toLowerCase().includes('@ai')) {
            this.handleAIResponse(newMessage.content);
          }
        }
      });
      this.subscriptions.push(sub);
    }
  }
  addLocalMessage() {
    const message = {
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
  simulateAccountantResponse() {
    const responses = ['Thank you for your message. I\'ll review this and get back to you shortly.', 'I understand your concern. Let me look into this for you.', 'That\'s a great question. I\'ll need to check a few things and respond within the hour.', 'I\'ve received your message and will provide a detailed response soon.'];
    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
    const response = {
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
  handleAIResponse(userMessage) {
    setTimeout(() => {
      const aiResponses = ["I understand you're asking about tax matters. Based on current tax regulations, here's what I can tell you: For quarterly payments, you should calculate 25% of your expected annual tax liability and submit by the quarterly deadlines.", "That's a great tax question! Here's some guidance: Business expenses must be ordinary and necessary for your trade or business. Keep detailed records and receipts for all deductions.", "I can help with that tax inquiry. Here's what you should know: The standard deduction for 2024 is $14,600 for single filers and $29,200 for married filing jointly.", "Thank you for your tax question. Here's some helpful information: Self-employment tax is 15.3% of your net self-employment earnings, covering Social Security and Medicare taxes."];
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      const aiMessage = {
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
  triggerAIResponse(userMessage) {
    const sub = this.chatService.getAIResponse(userMessage).subscribe({
      next: aiResponse => {
        const aiMessage = {
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
      error: error => {
        console.error('Error getting AI response:', error);
        // Fallback to local AI response
        this.handleAIResponse(userMessage);
      }
    });
    this.subscriptions.push(sub);
  }
  onKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
  scrollToBottom() {
    try {
      if (this.messagesContainer) {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      }
    } catch (err) {
      console.error('Error scrolling to bottom:', err);
    }
  }
  formatTime(timestamp) {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    }).format(timestamp);
  }
  formatDate(timestamp) {
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
  shouldShowDateSeparator(index) {
    if (index === 0) return true;
    const currentMessage = this.messages[index];
    const previousMessage = this.messages[index - 1];
    return currentMessage.timestamp.toDateString() !== previousMessage.timestamp.toDateString();
  }
  isMyMessage(message) {
    return message.senderType === 'CLIENT' && message.senderId === this.currentUser?.id;
  }
  isAIMessage(message) {
    return message.senderType === 'AI_AGENT';
  }
  static {
    this.ɵfac = function ChatComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_chat_service__WEBPACK_IMPORTED_MODULE_0__.ChatService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ChatComponent,
      selectors: [["app-chat"]],
      viewQuery: function ChatComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.messagesContainer = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 55,
      vars: 5,
      consts: [["messagesContainer", ""], [1, "chat-container"], [1, "chat-header"], [1, "d-flex", "align-items-center"], [1, "avatar-container", "me-3"], [1, "avatar-circle", "bg-primary"], [1, "ri-user-line", "text-white"], [1, "status-indicator"], [1, "mb-0", "chat-title"], [1, "text-muted"], [1, "chat-actions"], [1, "btn", "btn-light", "btn-sm", "me-2"], [1, "ri-search-line"], [1, "ri-settings-3-line"], [1, "btn", "btn-light", "btn-sm"], [1, "ri-more-2-line"], [1, "chat-messages"], [1, "date-separator"], [1, "date-label"], ["class", "message-container", 4, "ngFor", "ngForOf"], ["class", "loading-container", 4, "ngIf"], [1, "chat-input"], [1, "input-container"], [1, "btn", "btn-light", "attachment-btn"], [1, "ri-emotion-line"], [1, "ri-attachment-2"], [1, "ri-file-line"], [1, "input-wrapper"], ["placeholder", "Enter Message...", "rows", "1", 1, "message-input", 3, "ngModelChange", "keypress", "ngModel", "disabled"], ["type", "button", 1, "btn", "send-btn", 3, "click", "disabled"], [1, "ri-send-plane-fill"], [1, "card", "mt-3"], [1, "card-body"], [1, "card-title"], [1, "list-unstyled", "mb-0"], [1, "mb-2"], [1, "ri-time-line", "text-primary", "me-2"], [1, "ri-calendar-line", "text-primary", "me-2"], [1, "ri-file-line", "text-primary", "me-2"], [1, "ri-phone-line", "text-primary", "me-2"], [1, "message-container"], ["class", "date-separator", 4, "ngIf"], [1, "message-row"], ["class", "message-avatar", 4, "ngIf"], [1, "message-bubble"], ["class", "message-sender", 4, "ngIf"], [1, "message-text"], [1, "message-time"], ["class", "message-options", 4, "ngIf"], [1, "message-avatar"], [1, "avatar-circle"], ["class", "ri-user-3-line text-white", 4, "ngIf"], ["class", "ri-robot-2-line text-white", 4, "ngIf"], [1, "ri-user-3-line", "text-white"], [1, "ri-robot-2-line", "text-white"], [1, "message-sender"], [1, "message-options"], [1, "btn", "btn-sm", "btn-light"], [1, "ri-more-2-fill"], [1, "loading-container"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "text-primary"], [1, "visually-hidden"], [1, "text-muted", "ms-2"]],
      template: function ChatComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div")(8, "h5", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Sarah Johnson, CPA");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "small", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Active now");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10)(13, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 16, 0)(21, "div", 17)(22, "span", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Today");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ChatComponent_div_24_Template, 11, 16, "div", 19)(25, ChatComponent_div_25_Template, 6, 0, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 21)(27, "div", 22)(28, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "i", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 27)(35, "textarea", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function ChatComponent_Template_textarea_ngModelChange_35_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.newMessage, $event) || (ctx.newMessage = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function ChatComponent_Template_textarea_keypress_35_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.onKeyPress($event));
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatComponent_Template_button_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.sendMessage());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "i", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 31)(39, "div", 32)(40, "h6", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Chat Guidelines");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "ul", 34)(43, "li", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "Response time: Usually within 2-4 hours during business hours");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Business hours: Monday-Friday, 9 AM - 6 PM EST");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "li", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "i", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "For document sharing, please use the Documents section");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "i", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "For urgent matters, please call: (555) 123-4567");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messages);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.newMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.newMessage.trim() || ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel],
      styles: [".chat-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  max-height: 800px;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.chat-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  background: #ffffff;\n  border-bottom: 1px solid #f0f0f0;\n  position: sticky;\n  top: 0;\n  z-index: 10;\n}\n\n.avatar-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.avatar-circle[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n}\n\n.bg-gradient-ai[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n\n.status-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 2px;\n  right: 2px;\n  width: 12px;\n  height: 12px;\n  background: #10b981;\n  border: 2px solid #ffffff;\n  border-radius: 50%;\n}\n\n.chat-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n  font-size: 16px;\n}\n\n.chat-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 4px;\n}\n\n.chat-messages[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n  background: #f9fafb;\n  scroll-behavior: smooth;\n}\n\n.date-separator[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 20px 0;\n  position: relative;\n}\n\n.date-separator[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  height: 1px;\n  background: #e5e7eb;\n  z-index: 1;\n}\n\n.date-label[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #6b7280;\n  padding: 4px 12px;\n  font-size: 12px;\n  font-weight: 500;\n  position: relative;\n  z-index: 2;\n}\n\n.message-container[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n\n.message-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n\n.message-sent[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.message-received[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n.message-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n}\n\n.message-avatar[_ngcontent-%COMP%]   .avatar-circle[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  font-size: 14px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n\n.message-avatar[_ngcontent-%COMP%]   .bg-primary[_ngcontent-%COMP%] {\n  background: #6366f1 !important;\n}\n\n.message-avatar[_ngcontent-%COMP%]   .bg-gradient-ai[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;\n}\n\n.message-bubble[_ngcontent-%COMP%] {\n  max-width: 320px;\n  padding: 12px 16px;\n  border-radius: 18px;\n  position: relative;\n  word-wrap: break-word;\n}\n\n.bubble-sent[_ngcontent-%COMP%] {\n  background: #6366f1;\n  color: white;\n  border-bottom-right-radius: 6px;\n  margin-left: auto;\n}\n\n.bubble-received[_ngcontent-%COMP%] {\n  background: #ffffff;\n  color: #1f2937;\n  border: 1px solid #e5e7eb;\n  border-bottom-left-radius: 6px;\n}\n\n.bubble-ai[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  border-bottom-left-radius: 6px;\n}\n\n.message-sender[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6366f1;\n  margin-bottom: 4px;\n}\n\n.bubble-sent[_ngcontent-%COMP%]   .message-sender[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.bubble-ai[_ngcontent-%COMP%]   .message-sender[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.message-text[_ngcontent-%COMP%] {\n  line-height: 1.4;\n  font-size: 14px;\n}\n\n.message-time[_ngcontent-%COMP%] {\n  font-size: 11px;\n  opacity: 0.7;\n  margin-top: 4px;\n  text-align: right;\n}\n\n.bubble-received[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n\n.message-options[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n\n.message-row[_ngcontent-%COMP%]:hover   .message-options[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: #6b7280;\n}\n\n.chat-input[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  background: #ffffff;\n  border-top: 1px solid #f0f0f0;\n}\n\n.input-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 8px;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 24px;\n  padding: 8px 12px;\n  transition: border-color 0.2s;\n}\n\n.input-container[_ngcontent-%COMP%]:focus-within {\n  border-color: #6366f1;\n  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);\n}\n\n.attachment-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #6b7280;\n  padding: 8px;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n}\n\n.attachment-btn[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n  color: #374151;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.message-input[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n  background: transparent;\n  resize: none;\n  outline: none;\n  font-size: 14px;\n  line-height: 1.4;\n  padding: 8px 0;\n  color: #1f2937;\n  max-height: 120px;\n}\n\n.message-input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n\n.send-btn[_ngcontent-%COMP%] {\n  background: #6366f1;\n  border: none;\n  color: white;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.2s;\n  cursor: pointer;\n}\n\n.send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5856eb;\n  transform: scale(1.05);\n}\n\n.send-btn[_ngcontent-%COMP%]:disabled {\n  background: #d1d5db;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.chat-messages[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n}\n\n.chat-messages[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n.chat-messages[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #c1c1c1;\n  border-radius: 3px;\n}\n\n.chat-messages[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #a8a8a8;\n}\n\n@media (max-width: 768px) {\n  .chat-container[_ngcontent-%COMP%] {\n    height: 100vh;\n    border-radius: 0;\n  }\n  .message-bubble[_ngcontent-%COMP%] {\n    max-width: 280px;\n  }\n  .chat-header[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n  .chat-messages[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .chat-input[_ngcontent-%COMP%] {\n    padding: 12px 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xpZW50LXBvcnRhbC9jaGF0L2NoYXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsNkRBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLFFBQUE7QUFERjs7QUFLQTtFQUNFLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0FBRkY7O0FBS0E7RUFDRSwyQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtBQUZGOztBQUtBO0VBQ0UsOEJBQUE7QUFGRjs7QUFLQTtFQUNFLHdFQUFBO0FBRkY7O0FBS0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FBRkY7O0FBS0E7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0FBRkY7O0FBS0E7RUFDRSw2REFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSwrQkFBQTtBQUZGOztBQUtBO0VBQ0UsK0JBQUE7QUFGRjs7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUtBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7QUFGRjs7QUFLQTtFQUNFLFVBQUE7RUFDQSx3QkFBQTtBQUZGOztBQUtBO0VBQ0UsVUFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUZGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBSEY7O0FBTUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSw2Q0FBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxPQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUhGOztBQU9BO0VBQ0UsVUFBQTtBQUpGOztBQU9BO0VBQ0UsbUJBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0FBSkY7O0FBUUE7RUFDRTtJQUNFLGFBQUE7SUFDQSxnQkFBQTtFQUxGO0VBUUE7SUFDRSxnQkFBQTtFQU5GO0VBU0E7SUFDRSxrQkFBQTtFQVBGO0VBVUE7SUFDRSxhQUFBO0VBUkY7RUFXQTtJQUNFLGtCQUFBO0VBVEY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIENoYXQgQ29udGFpbmVyXG4uY2hhdC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBtYXgtaGVpZ2h0OiA4MDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8vIENoYXQgSGVhZGVyXG4uY2hhdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5hdmF0YXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uYXZhdGFyLWNpcmNsZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmJnLWdyYWRpZW50LWFpIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTtcbn1cblxuLnN0YXR1cy1pbmRpY2F0b3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMnB4O1xuICByaWdodDogMnB4O1xuICB3aWR0aDogMTJweDtcbiAgaGVpZ2h0OiAxMnB4O1xuICBiYWNrZ3JvdW5kOiAjMTBiOTgxO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jaGF0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxZjI5Mzc7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmNoYXQtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNHB4O1xufVxuXG4vLyBNZXNzYWdlcyBBcmVhXG4uY2hhdC1tZXNzYWdlcyB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICNmOWZhZmI7XG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xufVxuXG4uZGF0ZS1zZXBhcmF0b3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5kYXRlLXNlcGFyYXRvcjo6YmVmb3JlIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDFweDtcbiAgYmFja2dyb3VuZDogI2U1ZTdlYjtcbiAgei1pbmRleDogMTtcbn1cblxuLmRhdGUtbGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjZjlmYWZiO1xuICBjb2xvcjogIzZiNzI4MDtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xufVxuXG4ubWVzc2FnZS1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5tZXNzYWdlLXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG5cbi5tZXNzYWdlLXNlbnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ubWVzc2FnZS1yZWNlaXZlZCB7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbn1cblxuLm1lc3NhZ2UtYXZhdGFyIHtcbiAgd2lkdGg6IDMycHg7XG4gIGhlaWdodDogMzJweDtcbiAgZmxleC1zaHJpbms6IDA7XG59XG5cbi5tZXNzYWdlLWF2YXRhciAuYXZhdGFyLWNpcmNsZSB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG59XG5cbi5tZXNzYWdlLWF2YXRhciAuYmctcHJpbWFyeSB7XG4gIGJhY2tncm91bmQ6ICM2MzY2ZjEgIWltcG9ydGFudDtcbn1cblxuLm1lc3NhZ2UtYXZhdGFyIC5iZy1ncmFkaWVudC1haSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSkgIWltcG9ydGFudDtcbn1cblxuLm1lc3NhZ2UtYnViYmxlIHtcbiAgbWF4LXdpZHRoOiAzMjBweDtcbiAgcGFkZGluZzogMTJweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiAxOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbn1cblxuLmJ1YmJsZS1zZW50IHtcbiAgYmFja2dyb3VuZDogIzYzNjZmMTtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNnB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmJ1YmJsZS1yZWNlaXZlZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjMWYyOTM3O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlN2ViO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA2cHg7XG59XG5cbi5idWJibGUtYWkge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcbn1cblxuLm1lc3NhZ2Utc2VuZGVyIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzYzNjZmMTtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuXG4uYnViYmxlLXNlbnQgLm1lc3NhZ2Utc2VuZGVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbn1cblxuLmJ1YmJsZS1haSAubWVzc2FnZS1zZW5kZXIge1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xufVxuXG4ubWVzc2FnZS10ZXh0IHtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWVzc2FnZS10aW1lIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBvcGFjaXR5OiAwLjc7XG4gIG1hcmdpbi10b3A6IDRweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5idWJibGUtcmVjZWl2ZWQgLm1lc3NhZ2UtdGltZSB7XG4gIGNvbG9yOiAjNmI3MjgwO1xufVxuXG4ubWVzc2FnZS1vcHRpb25zIHtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xufVxuXG4ubWVzc2FnZS1yb3c6aG92ZXIgLm1lc3NhZ2Utb3B0aW9ucyB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbiAgY29sb3I6ICM2YjcyODA7XG59XG5cbi8vIENoYXQgSW5wdXRcbi5jaGF0LWlucHV0IHtcbiAgcGFkZGluZzogMTZweCAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjBmMDtcbn1cblxuLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgZ2FwOiA4cHg7XG4gIGJhY2tncm91bmQ6ICNmOWZhZmI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNWU3ZWI7XG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XG4gIHBhZGRpbmc6IDhweCAxMnB4O1xuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycztcbn1cblxuLmlucHV0LWNvbnRhaW5lcjpmb2N1cy13aXRoaW4ge1xuICBib3JkZXItY29sb3I6ICM2MzY2ZjE7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4xKTtcbn1cblxuLmF0dGFjaG1lbnQtYnRuIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICM2YjcyODA7XG4gIHBhZGRpbmc6IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB3aWR0aDogMzZweDtcbiAgaGVpZ2h0OiAzNnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG59XG5cbi5hdHRhY2htZW50LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNlNWU3ZWI7XG4gIGNvbG9yOiAjMzc0MTUxO1xufVxuXG4uaW5wdXQtd3JhcHBlciB7XG4gIGZsZXg6IDE7XG59XG5cbi5tZXNzYWdlLWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHJlc2l6ZTogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMS40O1xuICBwYWRkaW5nOiA4cHggMDtcbiAgY29sb3I6ICMxZjI5Mzc7XG4gIG1heC1oZWlnaHQ6IDEyMHB4O1xufVxuXG4ubWVzc2FnZS1pbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogIzljYTNhZjtcbn1cblxuLnNlbmQtYnRuIHtcbiAgYmFja2dyb3VuZDogIzYzNjZmMTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5zZW5kLWJ0bjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gIGJhY2tncm91bmQ6ICM1ODU2ZWI7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi5zZW5kLWJ0bjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQ6ICNkMWQ1ZGI7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIHRyYW5zZm9ybTogbm9uZTtcbn1cblxuLy8gU2Nyb2xsYmFyIHN0eWxpbmdcbi5jaGF0LW1lc3NhZ2VzOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA2cHg7XG59XG5cbi5jaGF0LW1lc3NhZ2VzOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNmMWYxZjE7XG59XG5cbi5jaGF0LW1lc3NhZ2VzOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICNjMWMxYzE7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cblxuLmNoYXQtbWVzc2FnZXM6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2E4YThhODtcbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuY2hhdC1jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgfVxuICBcbiAgLm1lc3NhZ2UtYnViYmxlIHtcbiAgICBtYXgtd2lkdGg6IDI4MHB4O1xuICB9XG4gIFxuICAuY2hhdC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgfVxuICBcbiAgLmNoYXQtbWVzc2FnZXMge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgXG4gIC5jaGF0LWlucHV0IHtcbiAgICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 84771:
/*!*********************************************************************!*\
  !*** ./src/app/pages/client-portal/client-portal-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientPortalRoutingModule: () => (/* binding */ ClientPortalRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _documents_documents_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./documents/documents.component */ 93532);
/* harmony import */ var _intake_intake_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./intake/intake.component */ 75462);
/* harmony import */ var _tax_intake_tax_intake_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tax-intake/tax-intake.component */ 12126);
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chat/chat.component */ 61278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);







const routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: 'dashboard',
  loadComponent: () => __webpack_require__.e(/*! import() */ "src_app_pages_client-portal_dashboard_dashboard_component_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./dashboard/dashboard.component */ 68796)).then(c => c.ClientDashboardComponent)
}, {
  path: 'documents',
  component: _documents_documents_component__WEBPACK_IMPORTED_MODULE_0__.DocumentsComponent
}, {
  path: 'intake',
  component: _intake_intake_component__WEBPACK_IMPORTED_MODULE_1__.IntakeComponent
}, {
  path: 'tax-intake',
  component: _tax_intake_tax_intake_component__WEBPACK_IMPORTED_MODULE_2__.TaxIntakeComponent
}, {
  path: 'chat',
  component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_3__.ChatComponent
}];
class ClientPortalRoutingModule {
  static {
    this.ɵfac = function ClientPortalRoutingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClientPortalRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: ClientPortalRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](ClientPortalRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 40546:
/*!*************************************************************!*\
  !*** ./src/app/pages/client-portal/client-portal.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ClientPortalModule: () => (/* binding */ ClientPortalModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _client_portal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-portal-routing.module */ 84771);
/* harmony import */ var _documents_documents_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./documents/documents.component */ 93532);
/* harmony import */ var _intake_intake_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intake/intake.component */ 75462);
/* harmony import */ var _tax_intake_tax_intake_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tax-intake/tax-intake.component */ 12126);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/ui/pagetitle/pagetitle.component */ 56551);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/ui/loader/loader.component */ 69295);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 54195);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/modal */ 2457);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 75119);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 76925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);






// UI Components


// Bootstrap modules





class ClientPortalModule {
  static {
    this.ɵfac = function ClientPortalModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || ClientPortalModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: ClientPortalModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _client_portal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientPortalRoutingModule, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_4__.PagetitleComponent, _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__.BsDropdownModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.ModalModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__.TabsModule, ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_12__.DropzoneModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ClientPortalModule, {
    declarations: [_documents_documents_component__WEBPACK_IMPORTED_MODULE_1__.DocumentsComponent, _intake_intake_component__WEBPACK_IMPORTED_MODULE_2__.IntakeComponent, _tax_intake_tax_intake_component__WEBPACK_IMPORTED_MODULE_3__.TaxIntakeComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _client_portal_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientPortalRoutingModule, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_4__.PagetitleComponent, _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__.BsDropdownModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_10__.ModalModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_11__.TabsModule, ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_12__.DropzoneModule]
  });
})();

/***/ }),

/***/ 93532:
/*!**********************************************************************!*\
  !*** ./src/app/pages/client-portal/documents/documents.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentsComponent: () => (/* binding */ DocumentsComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-dropzone-wrapper */ 76925);





const _c0 = ["uploadModal"];
function DocumentsComponent_tr_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td")(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td")(13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td")(17, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentsComponent_tr_44_Template_button_click_17_listener() {
      const doc_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.downloadDocument(doc_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const doc_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", doc_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](doc_r2.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](doc_r2.size);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](11, 7, doc_r2.uploadDate, "shortDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r2.getStatusClass(doc_r2.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](15, 10, doc_r2.status), " ");
  }
}
function DocumentsComponent_tr_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " No documents found matching your criteria. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function DocumentsComponent_div_46_div_33_li_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 52)(1, "div", 53)(2, "div", 54)(3, "div", 55)(4, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 58)(7, "div", 59)(8, "h6", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 62)(13, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentsComponent_div_46_div_33_li_4_Template_button_click_13_listener() {
      const i_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.removeUploadedFile(i_r6));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const file_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](file_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.formatFileSize(file_r7.size));
  }
}
function DocumentsComponent_div_46_div_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "h6", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Selected Files:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DocumentsComponent_div_46_div_33_li_4_Template, 15, 2, "li", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.uploadedFiles);
  }
}
function DocumentsComponent_div_46_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "span", 65);
  }
}
function DocumentsComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 31)(2, "div", 0)(3, "div", 32)(4, "div", 33)(5, "h5", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Upload Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentsComponent_div_46_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.closeUploadModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 1)(9, "form")(10, "div", 35)(11, "div", 36)(12, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Document Category *");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function DocumentsComponent_div_46_Template_select_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r2.uploadForm.category, $event) || (ctx_r2.uploadForm.category = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Select Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Tax Documents");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Financial Statements");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Receipts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 36)(26, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Description (Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function DocumentsComponent_div_46_Template_input_ngModelChange_28_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx_r2.uploadForm.description, $event) || (ctx_r2.uploadForm.description = $event);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"]($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 42)(30, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Upload Files");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "dropzone", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("success", function DocumentsComponent_div_46_Template_dropzone_success_32_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.onUploadSuccess($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, DocumentsComponent_div_46_div_33_Template, 5, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 45)(35, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentsComponent_div_46_Template_button_click_35_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.closeUploadModal());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentsComponent_div_46_Template_button_click_37_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.submitUpload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, DocumentsComponent_div_46_span_38_Template, 1, 0, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.uploadForm.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx_r2.uploadForm.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("config", ctx_r2.dropzoneConfig)("message", "Drop files here or click to upload.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.uploadedFiles.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r2.uploadedFiles.length === 0 || !ctx_r2.uploadForm.category || ctx_r2.isUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.isUploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r2.isUploading ? "Uploading..." : "Upload " + ctx_r2.uploadedFiles.length + " File(s)", " ");
  }
}
class DocumentsComponent {
  constructor() {
    this.documents = [];
    this.filteredDocuments = [];
    this.selectedCategory = 'all';
    this.searchTerm = '';
    // Upload form properties
    this.selectedFile = null;
    this.isUploading = false;
    this.showUploadModal = false;
    this.uploadedFiles = [];
    this.uploadForm = {
      category: '',
      description: ''
    };
    // Dropzone configuration
    this.dropzoneConfig = {
      url: '/upload',
      // Mock URL for client-side handling
      clickable: true,
      addRemoveLinks: false,
      previewsContainer: false,
      acceptedFiles: '.pdf,.jpg,.jpeg,.png,.doc,.docx',
      maxFilesize: 10,
      // 10MB
      maxFiles: 10,
      autoProcessQueue: false // Prevent automatic upload
    };
  }
  ngOnInit() {
    this.loadDocuments();
  }
  loadDocuments() {
    // Mock data - in real app, this would come from API
    this.documents = [{
      id: 1,
      name: 'W2_2024.pdf',
      type: 'PDF',
      size: '245 KB',
      uploadDate: '2024-01-15',
      status: 'approved',
      category: 'tax-documents'
    }, {
      id: 2,
      name: 'Bank_Statement_Jan2024.pdf',
      type: 'PDF',
      size: '1.2 MB',
      uploadDate: '2024-02-01',
      status: 'reviewed',
      category: 'financial-statements'
    }, {
      id: 3,
      name: 'Receipt_Office_Supplies.jpg',
      type: 'Image',
      size: '890 KB',
      uploadDate: '2024-02-10',
      status: 'pending',
      category: 'receipts'
    }];
    this.filteredDocuments = [...this.documents];
  }
  filterDocuments() {
    this.filteredDocuments = this.documents.filter(doc => {
      const matchesCategory = this.selectedCategory === 'all' || doc.category === this.selectedCategory;
      const matchesSearch = doc.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }
  onCategoryChange() {
    this.filterDocuments();
  }
  onSearchChange() {
    this.filterDocuments();
  }
  getStatusClass(status) {
    switch (status) {
      case 'approved':
        return 'badge bg-success';
      case 'reviewed':
        return 'badge bg-info';
      case 'pending':
        return 'badge bg-warning';
      default:
        return 'badge bg-secondary';
    }
  }
  downloadDocument(doc) {
    // In real app, this would trigger actual download
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
      title: 'Download Started',
      text: `Downloading ${doc.name}...`,
      icon: 'info',
      timer: 2000,
      showConfirmButton: false
    });
    console.log('Downloading document:', doc.name);
  }
  uploadDocument() {
    // Reset form
    this.selectedFile = null;
    this.uploadForm = {
      category: '',
      description: ''
    };
    // Show modal
    this.showUploadModal = true;
  }
  closeUploadModal() {
    this.showUploadModal = false;
  }
  onUploadSuccess(event) {
    setTimeout(() => {
      this.uploadedFiles.push(event[0]);
    }, 0);
  }
  removeUploadedFile(index) {
    this.uploadedFiles.splice(index, 1);
  }
  formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }
  submitUpload() {
    if (!this.selectedFile || !this.uploadForm.category) {
      return;
    }
    this.isUploading = true;
    // Simulate upload process
    setTimeout(() => {
      // Create new document entries for each uploaded file
      this.uploadedFiles.forEach(file => {
        const newDoc = {
          id: this.documents.length + 1,
          name: file.name,
          type: this.getFileTypeDisplay(file.type),
          size: this.formatFileSize(file.size),
          uploadDate: new Date().toISOString(),
          status: 'pending',
          category: this.uploadForm.category
        };
        // Add to documents list
        this.documents.unshift(newDoc);
      });
      this.filterDocuments();
      // Clear uploaded files
      this.uploadedFiles = [];
      this.isUploading = false;
      // Close modal
      this.showUploadModal = false;
      // Show success message
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Upload Successful!',
        text: 'Your document has been uploaded and is pending review.',
        icon: 'success',
        timer: 3000,
        showConfirmButton: false
      });
    }, 2000); // Simulate 2 second upload time
  }
  getFileTypeDisplay(mimeType) {
    switch (mimeType) {
      case 'application/pdf':
        return 'PDF';
      case 'image/jpeg':
      case 'image/jpg':
      case 'image/png':
        return 'Image';
      case 'application/msword':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return 'Document';
      default:
        return 'File';
    }
  }
  static {
    this.ɵfac = function DocumentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || DocumentsComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DocumentsComponent,
      selectors: [["app-documents"]],
      viewQuery: function DocumentsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.uploadModal = _t.first);
        }
      },
      decls: 59,
      vars: 5,
      consts: [[1, "card"], [1, "card-body"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "card-title", "mb-0"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "ri-upload-cloud-line", "me-1"], [1, "row", "mb-4"], [1, "col-md-6"], ["for", "categoryFilter", 1, "form-label"], ["id", "categoryFilter", 1, "form-select", 3, "ngModelChange", "change", "ngModel"], ["value", "all"], ["value", "tax-documents"], ["value", "financial-statements"], ["value", "receipts"], ["value", "other"], ["for", "searchInput", 1, "form-label"], ["type", "text", "id", "searchInput", "placeholder", "Search by document name...", 1, "form-control", 3, "ngModelChange", "input", "ngModel"], [1, "table-responsive"], [1, "table", "table-nowrap", "table-hover"], [1, "table-light"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["class", "row mb-4", 4, "ngIf"], [1, "alert", "alert-info", "mt-4"], [1, "alert-heading"], [1, "mb-0"], [1, "d-flex", "align-items-center"], [1, "ri-file-text-line", "me-2", "text-muted"], ["type", "button", 1, "btn", "btn-sm", "btn-outline-primary", 3, "click"], [1, "ri-download-line"], ["colspan", "6", 1, "text-center", "text-muted", "py-4"], [1, "col-12"], [1, "card-header"], [1, "d-flex", "justify-content-between", "align-items-center"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "row"], [1, "col-md-6", "mb-3"], ["for", "documentCategory", 1, "form-label"], ["id", "documentCategory", "name", "category", "required", "", 1, "form-select", 3, "ngModelChange", "ngModel"], ["value", ""], ["for", "documentDescription", 1, "form-label"], ["type", "text", "id", "documentDescription", "name", "description", "placeholder", "Add notes about this document...", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "mb-3"], [1, "form-label"], [1, "dropzone", 3, "success", "config", "message"], [1, "d-flex", "justify-content-end", "gap-2"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], ["class", "spinner-border spinner-border-sm me-2", "role", "status", 4, "ngIf"], [1, "mt-3"], [1, "list-unstyled", "mb-0"], ["class", "mt-2", 4, "ngFor", "ngForOf"], [1, "mt-2"], [1, "border", "rounded"], [1, "d-flex", "p-2"], [1, "flex-shrink-0", "me-3"], [1, "avatar-sm", "bg-light", "rounded", "d-flex", "align-items-center", "justify-content-center"], [1, "ri-file-text-line", "text-muted"], [1, "flex-grow-1"], [1, "pt-1"], [1, "fs-md", "mb-1"], [1, "fs-sm", "text-muted", "mb-0"], [1, "flex-shrink-0", "ms-3"], [1, "btn", "btn-sm", "btn-outline-danger", 3, "click"], [1, "ri-delete-bin-line"], ["role", "status", 1, "spinner-border", "spinner-border-sm", "me-2"]],
      template: function DocumentsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Documents");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DocumentsComponent_Template_button_click_5_listener() {
            return ctx.uploadDocument();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Upload Document ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6)(9, "div", 7)(10, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Filter by Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "select", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function DocumentsComponent_Template_select_ngModelChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.selectedCategory, $event) || (ctx.selectedCategory = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function DocumentsComponent_Template_select_change_12_listener() {
            return ctx.onCategoryChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "All Categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Tax Documents");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Financial Statements");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Receipts");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Other");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7)(24, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Search Documents");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayListener"]("ngModelChange", function DocumentsComponent_Template_input_ngModelChange_26_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayBindingSet"](ctx.searchTerm, $event) || (ctx.searchTerm = $event);
            return $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function DocumentsComponent_Template_input_input_26_listener() {
            return ctx.onSearchChange();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 17)(28, "table", 18)(29, "thead", 19)(30, "tr")(31, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Document Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Size");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Upload Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Status");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "th");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Actions");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "tbody");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, DocumentsComponent_tr_44_Template, 19, 12, "tr", 20)(45, DocumentsComponent_tr_45_Template, 3, 0, "tr", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, DocumentsComponent_div_46_Template, 40, 8, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 23)(48, "h6", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Upload Guidelines:");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "ul", 25)(51, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Accepted formats: PDF, JPG, PNG, DOC, DOCX");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Maximum file size: 10MB");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Please organize documents by category for easier processing");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Uploaded documents will be reviewed within 1-2 business days");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.selectedCategory);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtwoWayProperty"]("ngModel", ctx.searchTerm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.filteredDocuments);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.filteredDocuments.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showUploadModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_4__.DropzoneComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
      styles: [".table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  font-weight: 600;\n  border-top: none;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n}\n\n.alert-info[_ngcontent-%COMP%] {\n  border-left: 4px solid #17a2b8;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xpZW50LXBvcnRhbC9kb2N1bWVudHMvZG9jdW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZSB0aCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGJvcmRlci10b3A6IG5vbmU7XG59XG5cbi50YWJsZSB0ZCB7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5idG4tc20ge1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbn1cblxuLmFsZXJ0LWluZm8ge1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICMxN2EyYjg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 75462:
/*!****************************************************************!*\
  !*** ./src/app/pages/client-portal/intake/intake.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntakeComponent: () => (/* binding */ IntakeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 60316);




function IntakeComponent_div_7_span_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Completed ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function IntakeComponent_div_7_span_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Continue ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function IntakeComponent_div_7_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Start Form ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function IntakeComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "div", 1)(3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14)(14, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](17, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntakeComponent_div_7_Template_button_click_22_listener() {
      const form_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.openForm(form_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, IntakeComponent_div_7_span_23_Template, 3, 0, "span", 19)(24, IntakeComponent_div_7_span_24_Template, 3, 0, "span", 19)(25, IntakeComponent_div_7_span_25_Template, 3, 0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const form_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("border-success", form_r2.status === "completed")("border-warning", form_r2.status === "in-progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.getStatusIcon(form_r2.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.getStatusClass(form_r2.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](8, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 17, form_r2.status), "-", " "));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](form_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](form_r2.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Due: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](17, 23, form_r2.dueDate, "shortDate"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", form_r2.category, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", form_r2.status === "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", form_r2.status === "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", form_r2.status === "in-progress");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", form_r2.status === "not-started");
  }
}
function IntakeComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div", 25)(3, "div", 26)(4, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntakeComponent_div_8_Template_button_click_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.closeForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29)(8, "form", 30)(9, "div", 4)(10, "div", 31)(11, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Business Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 31)(15, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Business Type *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 35)(18, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Select Business Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "LLC");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Corporation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Partnership");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Sole Proprietorship");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4)(29, "div", 31)(30, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Tax ID (EIN) *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 31)(34, "label", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Phone Number *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14)(38, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Business Address *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "textarea", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4)(42, "div", 31)(43, "label", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Email Address *");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 31)(47, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Annual Revenue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 4)(51, "div", 31)(52, "label", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Number of Employees");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 14)(56, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Business Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "textarea", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 55)(60, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntakeComponent_div_8_Template_button_click_60_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.closeForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntakeComponent_div_8_Template_button_click_62_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.saveForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Save Draft");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IntakeComponent_div_8_Template_button_click_64_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Submit Form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r2.showFormModal ? "block" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx_r2.showFormModal);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.selectedForm == null ? null : ctx_r2.selectedForm.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.currentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.currentForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.currentForm.valid);
  }
}
function IntakeComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 59);
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx_r2.showFormModal);
  }
}
class IntakeComponent {
  constructor(fb) {
    this.fb = fb;
    this.intakeForms = [];
    this.selectedForm = null;
    this.showFormModal = false;
    this.currentForm = this.fb.group({
      businessName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      businessType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      taxId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
      annualRevenue: [''],
      numberOfEmployees: [''],
      businessDescription: ['']
    });
  }
  ngOnInit() {
    this.loadIntakeForms();
  }
  loadIntakeForms() {
    // Mock data - in real app, this would come from API
    this.intakeForms = [{
      id: 1,
      title: 'Business Information Form',
      description: 'Basic business details and contact information',
      status: 'completed',
      dueDate: '2024-01-15',
      category: 'Business Setup'
    }, {
      id: 2,
      title: 'Tax Preparation Questionnaire',
      description: 'Annual tax preparation information and documentation requirements',
      status: 'in-progress',
      dueDate: '2024-03-15',
      category: 'Tax Preparation'
    }, {
      id: 3,
      title: 'Bookkeeping Services Setup',
      description: 'Monthly bookkeeping service preferences and requirements',
      status: 'not-started',
      dueDate: '2024-02-28',
      category: 'Bookkeeping'
    }];
  }
  getStatusClass(status) {
    switch (status) {
      case 'completed':
        return 'badge bg-success';
      case 'in-progress':
        return 'badge bg-warning';
      case 'not-started':
        return 'badge bg-secondary';
      default:
        return 'badge bg-secondary';
    }
  }
  getStatusIcon(status) {
    switch (status) {
      case 'completed':
        return 'ri-check-line';
      case 'in-progress':
        return 'ri-time-line';
      case 'not-started':
        return 'ri-file-list-line';
      default:
        return 'ri-file-list-line';
    }
  }
  openForm(form) {
    this.selectedForm = form;
    this.showFormModal = true;
    // In a real app, you would load the actual form data based on form.id
    if (form.id === 1) {
      this.currentForm.patchValue({
        businessName: 'Sample Business LLC',
        businessType: 'LLC',
        taxId: '12-3456789',
        address: '123 Main St, City, State 12345',
        phone: '(555) 123-4567',
        email: 'business@example.com',
        annualRevenue: '500000',
        numberOfEmployees: '5',
        businessDescription: 'Professional services company'
      });
    }
  }
  closeForm() {
    this.showFormModal = false;
    this.selectedForm = null;
  }
  saveForm() {
    if (this.currentForm.valid && this.selectedForm) {
      // In real app, save form data to API
      console.log('Saving form data:', this.currentForm.value);
      // Update status to in-progress or completed
      this.selectedForm.status = 'in-progress';
      this.closeForm();
    }
  }
  submitForm() {
    if (this.currentForm.valid && this.selectedForm) {
      // In real app, submit form data to API
      console.log('Submitting form data:', this.currentForm.value);
      // Update status to completed
      this.selectedForm.status = 'completed';
      this.closeForm();
    }
  }
  static {
    this.ɵfac = function IntakeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IntakeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: IntakeComponent,
      selectors: [["app-intake"]],
      decls: 10,
      vars: 3,
      consts: [[1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "text-muted", "mb-4"], [1, "row"], ["class", "col-lg-4 col-md-6 mb-4", 4, "ngFor", "ngForOf"], ["class", "modal fade", "tabindex", "-1", 3, "show", "display", 4, "ngIf"], ["class", "modal-backdrop fade", 3, "show", 4, "ngIf"], [1, "col-lg-4", "col-md-6", "mb-4"], [1, "card", "border", "h-100"], [1, "d-flex", "justify-content-between", "align-items-start", "mb-3"], [1, "font-size-24", "text-primary"], [1, "card-title"], [1, "card-text", "text-muted"], [1, "mb-3"], [1, "text-muted"], [1, "ri-calendar-line", "me-1"], [1, "ri-folder-line", "me-1"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [4, "ngIf"], [1, "ri-check-line", "me-1"], [1, "ri-edit-line", "me-1"], [1, "ri-play-line", "me-1"], ["tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup"], [1, "col-md-6", "mb-3"], ["for", "businessName", 1, "form-label"], ["type", "text", "id", "businessName", "formControlName", "businessName", 1, "form-control"], ["for", "businessType", 1, "form-label"], ["id", "businessType", "formControlName", "businessType", 1, "form-select"], ["value", ""], ["value", "LLC"], ["value", "Corporation"], ["value", "Partnership"], ["value", "Sole Proprietorship"], ["for", "taxId", 1, "form-label"], ["type", "text", "id", "taxId", "formControlName", "taxId", 1, "form-control"], ["for", "phone", 1, "form-label"], ["type", "tel", "id", "phone", "formControlName", "phone", 1, "form-control"], ["for", "address", 1, "form-label"], ["id", "address", "rows", "2", "formControlName", "address", 1, "form-control"], ["for", "email", 1, "form-label"], ["type", "email", "id", "email", "formControlName", "email", 1, "form-control"], ["for", "annualRevenue", 1, "form-label"], ["type", "number", "id", "annualRevenue", "formControlName", "annualRevenue", 1, "form-control"], ["for", "numberOfEmployees", 1, "form-label"], ["type", "number", "id", "numberOfEmployees", "formControlName", "numberOfEmployees", 1, "form-control"], ["for", "businessDescription", 1, "form-label"], ["id", "businessDescription", "rows", "3", "formControlName", "businessDescription", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["type", "button", 1, "btn", "btn-outline-primary", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-primary", 3, "click", "disabled"], [1, "modal-backdrop", "fade"]],
      template: function IntakeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h4", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Intake Forms");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Complete the required forms below to help us serve you better. Click on any form to get started.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, IntakeComponent_div_7_Template, 26, 26, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, IntakeComponent_div_8_Template, 66, 8, "div", 6)(9, IntakeComponent_div_9_Template, 1, 2, "div", 7);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.intakeForms);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFormModal);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showFormModal);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe],
      styles: [".card.border-success[_ngcontent-%COMP%] {\n  border-color: #28a745 !important;\n}\n\n.card.border-warning[_ngcontent-%COMP%] {\n  border-color: #ffc107 !important;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n.modal.show[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n\n.modal-backdrop.show[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.375rem 0.75rem;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xpZW50LXBvcnRhbC9pbnRha2UvaW50YWtlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0NBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQuYm9yZGVyLXN1Y2Nlc3Mge1xuICBib3JkZXItY29sb3I6ICMyOGE3NDUgIWltcG9ydGFudDtcbn1cblxuLmNhcmQuYm9yZGVyLXdhcm5pbmcge1xuICBib3JkZXItY29sb3I6ICNmZmMxMDcgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtdGl0bGUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubW9kYWwuc2hvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cblxuLm1vZGFsLWJhY2tkcm9wLnNob3cge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5idG4tc20ge1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xufVxuXG4uZm9ybS1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 12126:
/*!************************************************************************!*\
  !*** ./src/app/pages/client-portal/tax-intake/tax-intake.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaxIntakeComponent: () => (/* binding */ TaxIntakeComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 10819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 33900);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 52575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 91817);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_intake_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/intake-form.service */ 27967);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);








function TaxIntakeComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Saving...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaxIntakeComponent_button_17_i_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 20);
  }
}
function TaxIntakeComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaxIntakeComponent_button_17_Template_button_click_0_listener() {
      const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.goToSection(i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, TaxIntakeComponent_button_17_i_3_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const section_r4 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("btn-success", section_r4.completed)("btn-info", i_r2 === ctx_r2.currentSection && !section_r4.completed)("btn-outline-info", i_r2 !== ctx_r2.currentSection && !section_r4.completed);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](section_r4.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", section_r4.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", section_r4.completed);
  }
}
function TaxIntakeComponent_div_18_div_5_i_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 61);
  }
}
function TaxIntakeComponent_div_18_div_5_i_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 62);
  }
}
function TaxIntakeComponent_div_18_div_5_div_38_i_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 61);
  }
}
function TaxIntakeComponent_div_18_div_5_div_38_i_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 62);
  }
}
function TaxIntakeComponent_div_18_div_5_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 32)(3, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Spouse's Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 32)(7, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Spouse's SSN");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 36)(10, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function TaxIntakeComponent_div_18_div_5_div_38_Template_input_input_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.formatSSNInput($event, "personalInformation.spouseSsn"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaxIntakeComponent_div_18_div_5_div_38_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.toggleSSNMask("spouse-ssn"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, TaxIntakeComponent_div_18_div_5_div_38_i_12_Template, 1, 0, "i", 39)(13, TaxIntakeComponent_div_18_div_5_div_38_i_13_Template, 1, 0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.getDisplaySSN((tmp_3_0 = ctx_r2.intakeForm.get("personalInformation.spouseSsn")) == null ? null : tmp_3_0.value, "spouse-ssn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isSSNMasked("spouse-ssn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.isSSNMasked("spouse-ssn"));
  }
}
function TaxIntakeComponent_div_18_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDD10 Section A. Personal Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 31)(4, "div", 1)(5, "div", 32)(6, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Full Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 32)(10, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Date of Birth *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 1)(14, "div", 32)(15, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "SSN/ITIN *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 36)(18, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function TaxIntakeComponent_div_18_div_5_Template_input_input_18_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.formatSSNInput($event, "personalInformation.ssn"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaxIntakeComponent_div_18_div_5_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.toggleSSNMask("personal-ssn"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, TaxIntakeComponent_div_18_div_5_i_20_Template, 1, 0, "i", 39)(21, TaxIntakeComponent_div_18_div_5_i_21_Template, 1, 0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 32)(23, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Marital Status *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "select", 41)(26, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Select Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "option", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Single");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Married Filing Jointly");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "option", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Married Filing Separately");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Head of Household");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Qualifying Widower");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](38, TaxIntakeComponent_div_18_div_5_div_38_Template, 14, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 48)(40, "div", 1)(41, "div", 49)(42, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Street Address *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 1)(46, "div", 51)(47, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "City *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](49, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 51)(51, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "State *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "div", 51)(55, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "ZIP Code *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 1)(59, "div", 32)(60, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61, "Phone *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function TaxIntakeComponent_div_18_div_5_Template_input_input_62_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.formatPhoneInput($event, "personalInformation.phone"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 32)(64, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Email *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "div", 57)(68, "h6", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69, "Driver's License / State ID");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](70, "div", 1)(71, "div", 51)(72, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "License Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](74, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](75, "div", 51)(76, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "State");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](78, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](79, "div", 51)(80, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81, "Expiration Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_5_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.getDisplaySSN((tmp_2_0 = ctx_r2.intakeForm.get("personalInformation.ssn")) == null ? null : tmp_2_0.value, "personal-ssn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isSSNMasked("personal-ssn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.isSSNMasked("personal-ssn"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r2.intakeForm.get("personalInformation.maritalStatus")) == null ? null : tmp_5_0.value) === "married-jointly" || ((tmp_5_0 = ctx_r2.intakeForm.get("personalInformation.maritalStatus")) == null ? null : tmp_5_0.value) === "married-separately");
  }
}
function TaxIntakeComponent_div_18_div_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No dependents added yet. Click \"Add Dependent\" to get started.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function TaxIntakeComponent_div_18_div_6_div_8_i_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 61);
  }
}
function TaxIntakeComponent_div_18_div_6_div_8_i_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 62);
  }
}
function TaxIntakeComponent_div_18_div_6_div_8_div_56_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 32)(2, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Child Care Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function TaxIntakeComponent_div_18_div_6_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 72)(1, "div", 73)(2, "h6", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaxIntakeComponent_div_18_div_6_div_8_Template_button_click_4_listener() {
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.removeDependent(i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 76)(7, "div", 1)(8, "div", 32)(9, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Name *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 32)(13, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "SSN/ITIN *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 36)(16, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function TaxIntakeComponent_div_18_div_6_div_8_Template_input_input_16_listener($event) {
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.formatSSNInput($event, "dependents." + i_r10 + ".ssn"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaxIntakeComponent_div_18_div_6_div_8_Template_button_click_17_listener() {
      const i_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.toggleSSNMask("dependent-ssn-" + i_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, TaxIntakeComponent_div_18_div_6_div_8_i_18_Template, 1, 0, "i", 39)(19, TaxIntakeComponent_div_18_div_6_div_8_i_19_Template, 1, 0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 1)(21, "div", 51)(22, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Date of Birth *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 51)(26, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Relationship *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "select", 78)(29, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Select Relationship");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Son");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Daughter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Stepchild");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Grandchild");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 51)(42, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Months Lived With You");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](44, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 1)(46, "div", 32)(47, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Lived with you full year");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "div", 32)(52, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](53, "input", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "label", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Child care expenses paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](56, TaxIntakeComponent_div_18_div_6_div_8_div_56_Template, 5, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_14_0;
    const dependent_r11 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Dependent ", i_r10 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", dependent_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", ctx_r2.getDisplaySSN((tmp_7_0 = dependent_r11.get("ssn")) == null ? null : tmp_7_0.value, "dependent-ssn-" + i_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.isSSNMasked("dependent-ssn-" + i_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.isSSNMasked("dependent-ssn-" + i_r10));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "fullYear_", i_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("for", "fullYear_", i_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("id", "childCare_", i_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("for", "childCare_", i_r10, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_14_0 = dependent_r11.get("childCareExpenses")) == null ? null : tmp_14_0.value);
  }
}
function TaxIntakeComponent_div_18_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 64)(2, "h5", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67 Section B. Dependents");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaxIntakeComponent_div_18_div_6_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.addDependent());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Add Dependent ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TaxIntakeComponent_div_18_div_6_div_7_Template, 4, 0, "div", 68)(8, TaxIntakeComponent_div_18_div_6_div_8_Template, 57, 14, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.dependentsArray.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.dependentsArray.controls);
  }
}
function TaxIntakeComponent_div_18_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "No income sources added yet. Click \"Add Income Source\" to get started.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function TaxIntakeComponent_div_18_div_7_div_8_div_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 32)(2, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Employer Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function TaxIntakeComponent_div_18_div_7_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 72)(1, "div", 73)(2, "h6", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaxIntakeComponent_div_18_div_7_div_8_Template_button_click_4_listener() {
      const i_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13).index;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.removeIncomeSource(i_r14));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 76)(7, "div", 1)(8, "div", 51)(9, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Income Type *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "select", 92)(12, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Select Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "option", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "W-2 Employment Income");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "option", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "1099-NEC (Freelance/Contractor)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "1099-MISC");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "option", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "1099-INT (Interest)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "1099-DIV (Dividends)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "1099-B (Stock Sales)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "1099-R (Retirement)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "SSA-1099 (Social Security)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "option", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Rental Income");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "option", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Business/Self-Employment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "option", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Other Income");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 51)(37, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Description *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 51)(41, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Amount *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](43, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](44, TaxIntakeComponent_div_18_div_7_div_8_div_44_Template, 5, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    let tmp_7_0;
    const income_r15 = ctx.$implicit;
    const i_r14 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Income Source ", i_r14 + 1, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", income_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_7_0 = income_r15.get("type")) == null ? null : tmp_7_0.value) === "w2");
  }
}
function TaxIntakeComponent_div_18_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 64)(2, "h5", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\uD83D\uDCBC Section C. Income");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaxIntakeComponent_div_18_div_7_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.addIncomeSource());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Add Income Source ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, TaxIntakeComponent_div_18_div_7_div_7_Template, 4, 0, "div", 68)(8, TaxIntakeComponent_div_18_div_7_div_8_Template, 45, 3, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.incomeArray.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.incomeArray.controls);
  }
}
function TaxIntakeComponent_div_18_div_8_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaxIntakeComponent_div_18_div_8_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaxIntakeComponent_div_18_div_8_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "input", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaxIntakeComponent_div_18_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDCB8 Section D. Deductions & Adjustments");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 106)(4, "div", 1)(5, "div", 32)(6, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "input", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "label", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Mortgage Interest Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, TaxIntakeComponent_div_18_div_8_div_10_Template, 2, 0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 32)(12, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "input", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Property Taxes Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, TaxIntakeComponent_div_18_div_8_div_16_Template, 2, 0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 1)(18, "div", 32)(19, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Charitable Contributions (Cash)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 32)(23, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Charitable Contributions (Non-Cash)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "input", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 1)(27, "div", 32)(28, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Student Loan Interest Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, TaxIntakeComponent_div_18_div_8_div_32_Template, 2, 0, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 32)(34, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "IRA/401(k) Contributions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 1)(38, "div", 32)(39, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "IRA Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "select", 117)(42, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Select Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "option", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Traditional IRA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "option", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Roth IRA");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "option", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "401(k)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "option", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, "403(b)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 32)(53, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Medical Expenses (Out-of-Pocket)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "input", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 58)(57, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Other Adjustments");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](59, "textarea", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r2.intakeForm.get("deductionsAdjustments.mortgageInterest")) == null ? null : tmp_2_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r2.intakeForm.get("deductionsAdjustments.propertyTaxes")) == null ? null : tmp_3_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r2.intakeForm.get("deductionsAdjustments.studentLoanInterest")) == null ? null : tmp_4_0.value);
  }
}
function TaxIntakeComponent_div_18_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83C\uDFE5 Section E. Health Coverage");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 128)(4, "div", 30)(5, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Did you have health insurance all year? *");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 1)(16, "div", 51)(17, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Marketplace Coverage");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 51)(22, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Employer Coverage");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 1)(27, "div", 51)(28, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "label", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Form 1095-A (Marketplace)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 51)(33, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "input", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "label", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Form 1095-B");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 51)(38, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "label", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Form 1095-C");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", false);
  }
}
function TaxIntakeComponent_div_18_div_10_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 32)(2, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Care Provider Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 32)(6, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Care Provider EIN/SSN");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function TaxIntakeComponent_div_18_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83C\uDF93 Section F. Credits");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 143)(4, "div", 1)(5, "div", 32)(6, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Education Expenses");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 32)(10, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Have Form 1098-T (Tuition Statement)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 1)(15, "div", 32)(16, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Child & Dependent Care Expenses");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, TaxIntakeComponent_div_18_div_10_div_19_Template, 9, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 1)(21, "div", 32)(22, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Adoption Expenses");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 32)(26, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "Energy-Efficient Home Upgrades");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r2.intakeForm.get("credits.childCareExpenses")) == null ? null : tmp_2_0.value) > 0);
  }
}
function TaxIntakeComponent_div_18_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "\uD83D\uDCC2 Section G. Prior Year & IRS Notices");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 153)(4, "div", 30)(5, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Did you file taxes last year?");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 30)(16, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Received IRS or State Notices");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 58)(21, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Other Notes or Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "textarea", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", false);
  }
}
function TaxIntakeComponent_div_18_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaxIntakeComponent_div_18_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r16);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.submitForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Submit Form ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx_r2.intakeForm.valid || ctx_r2.isLoading);
  }
}
function TaxIntakeComponent_div_18_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaxIntakeComponent_div_18_button_21_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.nextSection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function TaxIntakeComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, TaxIntakeComponent_div_18_div_5_Template, 83, 4, "div", 22)(6, TaxIntakeComponent_div_18_div_6_Template, 9, 2, "div", 22)(7, TaxIntakeComponent_div_18_div_7_Template, 9, 2, "div", 22)(8, TaxIntakeComponent_div_18_div_8_Template, 60, 3, "div", 22)(9, TaxIntakeComponent_div_18_div_9_Template, 42, 2, "div", 22)(10, TaxIntakeComponent_div_18_div_10_Template, 29, 1, "div", 22)(11, TaxIntakeComponent_div_18_div_11_Template, 24, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 23)(13, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaxIntakeComponent_div_18_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.previousSection());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div")(17, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function TaxIntakeComponent_div_18_Template_button_click_17_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.autoSave());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Save Draft ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, TaxIntakeComponent_div_18_button_20_Template, 3, 1, "button", 28)(21, TaxIntakeComponent_div_18_button_21_Template, 3, 0, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r2.intakeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.currentSection === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.currentSection === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.currentSection === 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.currentSection === 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.currentSection === 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.currentSection === 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.currentSection === 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.currentSection === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx_r2.isSaving);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.currentSection === ctx_r2.sections.length - 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.currentSection < ctx_r2.sections.length - 1);
  }
}
function TaxIntakeComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 165)(4, "div", 166)(5, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Loading your intake form...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
  }
}
class TaxIntakeComponent {
  constructor(fb, intakeService) {
    this.fb = fb;
    this.intakeService = intakeService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
    this.currentSection = 0;
    this.progress = 0;
    this.isLoading = false;
    this.isSaving = false;
    this.clientId = 1; // This should come from auth service
    this.ssnMasked = {};
    this.sections = [{
      id: 0,
      title: 'Personal Information',
      description: 'Basic personal and contact information',
      icon: 'ri-user-line',
      completed: false,
      required: true
    }, {
      id: 1,
      title: 'Dependents',
      description: 'Information about dependents and children',
      icon: 'ri-group-line',
      completed: false,
      required: false
    }, {
      id: 2,
      title: 'Income',
      description: 'All sources of income for the tax year',
      icon: 'ri-money-dollar-circle-line',
      completed: false,
      required: true
    }, {
      id: 3,
      title: 'Deductions & Adjustments',
      description: 'Itemized deductions and income adjustments',
      icon: 'ri-calculator-line',
      completed: false,
      required: false
    }, {
      id: 4,
      title: 'Health Coverage',
      description: 'Health insurance coverage information',
      icon: 'ri-heart-pulse-line',
      completed: false,
      required: true
    }, {
      id: 5,
      title: 'Credits',
      description: 'Tax credits and education expenses',
      icon: 'ri-award-line',
      completed: false,
      required: false
    }, {
      id: 6,
      title: 'Prior Year & IRS Notices',
      description: 'Previous year information and IRS correspondence',
      icon: 'ri-file-text-line',
      completed: false,
      required: false
    }];
    this.initializeForm();
  }
  ngOnInit() {
    this.loadExistingData();
    this.setupAutoSave();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  initializeForm() {
    this.intakeForm = this.fb.group({
      personalInformation: this.fb.group({
        fullName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        ssn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^\d{3}-\d{2}-\d{4}$/)]],
        maritalStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        spouseName: [''],
        spouseSsn: [''],
        address: this.fb.group({
          street: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
          city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
          state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
          zipCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^\d{5}(-\d{4})?$/)]]
        }),
        phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^\(\d{3}\) \d{3}-\d{4}$/)]],
        email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
        driverLicense: this.fb.group({
          number: [''],
          state: [''],
          expiration: ['']
        })
      }),
      dependents: this.fb.array([]),
      incomeSource: this.fb.array([]),
      deductionsAdjustments: this.fb.group({
        mortgageInterest: [false],
        mortgageAmount: [0],
        propertyTaxes: [false],
        propertyTaxAmount: [0],
        charitableCash: [0],
        charitableNonCash: [0],
        studentLoanInterest: [false],
        studentLoanAmount: [0],
        iraContributions: [0],
        iraType: [''],
        medicalExpenses: [0],
        otherAdjustments: ['']
      }),
      healthCoverage: this.fb.group({
        hadInsuranceAllYear: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
        marketplaceCoverage: [false],
        employerCoverage: [false],
        form1095A: [false],
        form1095B: [false],
        form1095C: [false]
      }),
      credits: this.fb.group({
        educationExpenses: [0],
        tuition1098T: [false],
        childCareExpenses: [0],
        childCareProviderName: [''],
        childCareProviderEin: [''],
        adoptionExpenses: [0],
        energyEfficiencyUpgrades: [0]
      }),
      priorYearInfo: this.fb.group({
        filedLastYear: [null],
        estimatedTaxPayments: this.fb.array([]),
        irsNotices: [false],
        otherNotes: ['']
      })
    });
  }
  loadExistingData() {
    this.isLoading = true;
    this.intakeService.getClientIntakeForm(this.clientId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: data => {
        if (data) {
          this.populateForm(data);
          this.currentSection = data.currentSection || 0;
          this.updateProgress();
        }
        this.isLoading = false;
      },
      error: error => {
        console.error('Error loading intake form:', error);
        this.isLoading = false;
      }
    });
  }
  populateForm(data) {
    // Populate personal information
    if (data.personalInformation) {
      this.intakeForm.get('personalInformation')?.patchValue(data.personalInformation);
    }
    // Populate dependents
    if (data.dependents && data.dependents.length > 0) {
      const dependentsArray = this.intakeForm.get('dependents');
      data.dependents.forEach(dependent => {
        dependentsArray.push(this.createDependentGroup(dependent));
      });
    }
    // Populate income sources
    if (data.incomeSource && data.incomeSource.length > 0) {
      const incomeArray = this.intakeForm.get('incomeSource');
      data.incomeSource.forEach(income => {
        incomeArray.push(this.createIncomeGroup(income));
      });
    }
    // Populate other sections
    if (data.deductionsAdjustments) {
      this.intakeForm.get('deductionsAdjustments')?.patchValue(data.deductionsAdjustments);
    }
    if (data.healthCoverage) {
      this.intakeForm.get('healthCoverage')?.patchValue(data.healthCoverage);
    }
    if (data.credits) {
      this.intakeForm.get('credits')?.patchValue(data.credits);
    }
    if (data.priorYearInfo) {
      this.intakeForm.get('priorYearInfo')?.patchValue(data.priorYearInfo);
    }
  }
  setupAutoSave() {
    this.intakeForm.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(2000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe(() => {
      this.autoSave();
    });
  }
  autoSave() {
    if (this.intakeForm.valid && !this.isSaving) {
      this.isSaving = true;
      const formData = this.prepareFormData();
      this.intakeService.autoSaveForm(this.clientId, formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
        next: () => {
          this.isSaving = false;
          this.updateProgress();
        },
        error: error => {
          console.error('Auto-save failed:', error);
          this.isSaving = false;
        }
      });
    }
  }
  prepareFormData() {
    const formValue = this.intakeForm.value;
    return {
      clientId: this.clientId,
      personalInformation: formValue.personalInformation,
      dependents: formValue.dependents,
      incomeSource: formValue.incomeSource,
      deductionsAdjustments: formValue.deductionsAdjustments,
      healthCoverage: formValue.healthCoverage,
      credits: formValue.credits,
      priorYearInfo: formValue.priorYearInfo,
      currentSection: this.currentSection,
      progress: this.progress,
      lastSaved: new Date().toISOString(),
      status: 'draft'
    };
  }
  updateProgress() {
    const formData = this.prepareFormData();
    this.progress = this.intakeService.calculateProgress(formData);
    // Update section completion status
    this.sections.forEach((section, index) => {
      section.completed = this.isSectionCompleted(index);
    });
  }
  isSectionCompleted(sectionIndex) {
    const formValue = this.intakeForm.value;
    switch (sectionIndex) {
      case 0:
        // Personal Information
        const personal = formValue.personalInformation;
        return !!(personal?.fullName && personal?.ssn && personal?.address?.street);
      case 1:
        // Dependents
        return true;
      // Optional section
      case 2:
        // Income
        return formValue.incomeSource && formValue.incomeSource.length > 0;
      case 3:
        // Deductions
        return true;
      // Optional section
      case 4:
        // Health Coverage
        return formValue.healthCoverage?.hadInsuranceAllYear !== null;
      case 5:
        // Credits
        return true;
      // Optional section
      case 6:
        // Prior Year
        return formValue.priorYearInfo?.filedLastYear !== null;
      default:
        return false;
    }
  }
  // Navigation methods
  goToSection(sectionIndex) {
    this.currentSection = sectionIndex;
  }
  nextSection() {
    if (this.currentSection < this.sections.length - 1) {
      this.currentSection++;
    }
  }
  previousSection() {
    if (this.currentSection > 0) {
      this.currentSection--;
    }
  }
  // Form array helpers
  get dependentsArray() {
    return this.intakeForm.get('dependents');
  }
  get incomeArray() {
    return this.intakeForm.get('incomeSource');
  }
  createDependentGroup(dependent) {
    return this.fb.group({
      id: [dependent?.id || this.intakeService.generateId()],
      name: [dependent?.name || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      ssn: [dependent?.ssn || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(/^\d{3}-\d{2}-\d{4}$/)]],
      dateOfBirth: [dependent?.dateOfBirth || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      relationship: [dependent?.relationship || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      monthsLivedWithYou: [dependent?.monthsLivedWithYou || 12, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.max(12)]],
      fullYear: [dependent?.fullYear !== undefined ? dependent.fullYear : true],
      childCareExpenses: [dependent?.childCareExpenses || false],
      childCareAmount: [dependent?.childCareAmount || 0]
    });
  }
  createIncomeGroup(income) {
    return this.fb.group({
      id: [income?.id || this.intakeService.generateId()],
      type: [income?.type || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      description: [income?.description || '', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      amount: [income?.amount || 0, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]],
      employerName: [income?.employerName || ''],
      details: [income?.details || {}]
    });
  }
  addDependent() {
    this.dependentsArray.push(this.createDependentGroup());
  }
  removeDependent(index) {
    this.dependentsArray.removeAt(index);
  }
  addIncomeSource() {
    this.incomeArray.push(this.createIncomeGroup());
  }
  removeIncomeSource(index) {
    this.incomeArray.removeAt(index);
  }
  // SSN masking methods
  toggleSSNMask(field) {
    this.ssnMasked[field] = !this.ssnMasked[field];
  }
  isSSNMasked(field) {
    return this.ssnMasked[field] !== false; // Default to masked
  }
  getDisplaySSN(ssn, field) {
    if (this.isSSNMasked(field)) {
      return this.intakeService.maskSSN(ssn);
    }
    return ssn;
  }
  formatSSNInput(event, controlPath) {
    const input = event.target.value;
    const formatted = this.intakeService.formatSSN(input);
    this.intakeForm.get(controlPath)?.setValue(formatted);
  }
  formatPhoneInput(event, controlPath) {
    const input = event.target.value.replace(/\D/g, '');
    let formatted = '';
    if (input.length >= 10) {
      formatted = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6, 10)}`;
    } else if (input.length >= 6) {
      formatted = `(${input.slice(0, 3)}) ${input.slice(3, 6)}-${input.slice(6)}`;
    } else if (input.length >= 3) {
      formatted = `(${input.slice(0, 3)}) ${input.slice(3)}`;
    } else {
      formatted = input;
    }
    this.intakeForm.get(controlPath)?.setValue(formatted);
  }
  // Submit form
  submitForm() {
    if (this.intakeForm.valid) {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Submit Intake Form',
        text: 'Are you sure you want to submit your tax intake form? You won\'t be able to make changes after submission.',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Submit'
      }).then(result => {
        if (result.isConfirmed) {
          this.performSubmit();
        }
      });
    } else {
      sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        title: 'Form Incomplete',
        text: 'Please complete all required sections before submitting.',
        icon: 'warning'
      });
    }
  }
  performSubmit() {
    this.isLoading = true;
    const formData = this.prepareFormData();
    formData.status = 'submitted';
    formData.submittedAt = new Date().toISOString();
    this.intakeService.submitIntakeForm(this.clientId, formData).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.takeUntil)(this.destroy$)).subscribe({
      next: () => {
        this.isLoading = false;
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          title: 'Success!',
          text: 'Your tax intake form has been submitted successfully.',
          icon: 'success'
        });
      },
      error: error => {
        this.isLoading = false;
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
          title: 'Error',
          text: 'There was an error submitting your form. Please try again.',
          icon: 'error'
        });
        console.error('Submit error:', error);
      }
    });
  }
  static {
    this.ɵfac = function TaxIntakeComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || TaxIntakeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_intake_form_service__WEBPACK_IMPORTED_MODULE_1__.IntakeFormService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: TaxIntakeComponent,
      selectors: [["app-tax-intake"]],
      decls: 20,
      vars: 10,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-3"], [1, "card-title", "mb-0"], [1, "d-flex", "align-items-center"], ["class", "badge bg-info me-2", 4, "ngIf"], [1, "text-muted"], [1, "progress", "mb-3", 2, "height", "12px"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info"], [1, "visually-hidden"], [1, "d-flex", "flex-wrap", "gap-2"], ["type", "button", "class", "btn btn-sm", 3, "btn-success", "btn-info", "btn-outline-info", "click", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "badge", "bg-info", "me-2"], ["type", "button", 1, "btn", "btn-sm", 3, "click"], [1, "me-1"], ["class", "ri-check-line ms-1", 4, "ngIf"], [1, "ri-check-line", "ms-1"], [3, "formGroup"], [4, "ngIf"], [1, "d-flex", "justify-content-between", "mt-4"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click", "disabled"], [1, "ri-arrow-left-line", "me-1"], ["type", "button", 1, "btn", "btn-info", "me-2", 3, "click", "disabled"], [1, "ri-save-line", "me-1"], ["type", "button", "class", "btn btn-success", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "class", "btn btn-info", 3, "click", 4, "ngIf"], [1, "mb-4"], ["formGroupName", "personalInformation"], [1, "col-md-6", "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "fullName", 1, "form-control"], ["type", "date", "formControlName", "dateOfBirth", 1, "form-control"], [1, "input-group"], ["type", "text", "placeholder", "***-**-****", 1, "form-control", 3, "input", "value"], ["type", "button", 1, "btn", "btn-outline-secondary", 3, "click"], ["class", "ri-eye-line", 4, "ngIf"], ["class", "ri-eye-off-line", 4, "ngIf"], ["formControlName", "maritalStatus", 1, "form-select"], ["value", ""], ["value", "single"], ["value", "married-jointly"], ["value", "married-separately"], ["value", "head-of-household"], ["value", "qualifying-widower"], ["formGroupName", "address"], [1, "col-12", "mb-3"], ["type", "text", "formControlName", "street", 1, "form-control"], [1, "col-md-4", "mb-3"], ["type", "text", "formControlName", "city", 1, "form-control"], ["type", "text", "formControlName", "state", 1, "form-control"], ["type", "text", "formControlName", "zipCode", 1, "form-control"], ["type", "tel", "formControlName", "phone", "placeholder", "(555) 123-4567", 1, "form-control", 3, "input"], ["type", "email", "formControlName", "email", 1, "form-control"], ["formGroupName", "driverLicense"], [1, "mb-3"], ["type", "text", "formControlName", "number", 1, "form-control"], ["type", "date", "formControlName", "expiration", 1, "form-control"], [1, "ri-eye-line"], [1, "ri-eye-off-line"], ["type", "text", "formControlName", "spouseName", 1, "form-control"], [1, "d-flex", "justify-content-between", "align-items-center", "mb-4"], [1, "mb-0"], ["type", "button", 1, "btn", "btn-info", "btn-sm", 3, "click"], [1, "ri-add-line", "me-1"], ["class", "text-center text-muted py-4", 4, "ngIf"], ["class", "card mb-3", 4, "ngFor", "ngForOf"], [1, "text-center", "text-muted", "py-4"], [1, "ri-group-line", "font-size-48", "mb-3", "d-block"], [1, "card", "mb-3"], [1, "card-header", "d-flex", "justify-content-between", "align-items-center"], ["type", "button", 1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], [1, "ri-delete-bin-line"], [1, "card-body", 3, "formGroup"], ["type", "text", "formControlName", "name", 1, "form-control"], ["formControlName", "relationship", 1, "form-select"], ["value", "son"], ["value", "daughter"], ["value", "stepchild"], ["value", "grandchild"], ["value", "other"], ["type", "number", "formControlName", "monthsLivedWithYou", "min", "1", "max", "12", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "formControlName", "fullYear", 1, "form-check-input", 3, "id"], [1, "form-check-label", 3, "for"], ["type", "checkbox", "formControlName", "childCareExpenses", 1, "form-check-input", 3, "id"], ["type", "number", "formControlName", "childCareAmount", "min", "0", 1, "form-control"], ["type", "button", 1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "ri-money-dollar-circle-line", "font-size-48", "mb-3", "d-block"], ["formControlName", "type", 1, "form-select"], ["value", "w2"], ["value", "1099-nec"], ["value", "1099-misc"], ["value", "1099-int"], ["value", "1099-div"], ["value", "1099-b"], ["value", "1099-r"], ["value", "ssa-1099"], ["value", "rental"], ["value", "business"], ["type", "text", "formControlName", "description", "placeholder", "e.g., ABC Company, Rental Property", 1, "form-control"], ["type", "number", "formControlName", "amount", "min", "0", "step", "0.01", 1, "form-control"], ["type", "text", "formControlName", "employerName", 1, "form-control"], ["formGroupName", "deductionsAdjustments"], ["type", "checkbox", "formControlName", "mortgageInterest", "id", "mortgageInterest", 1, "form-check-input"], ["for", "mortgageInterest", 1, "form-check-label"], ["class", "mt-2", 4, "ngIf"], ["type", "checkbox", "formControlName", "propertyTaxes", "id", "propertyTaxes", 1, "form-check-input"], ["for", "propertyTaxes", 1, "form-check-label"], ["type", "number", "formControlName", "charitableCash", "min", "0", 1, "form-control"], ["type", "number", "formControlName", "charitableNonCash", "min", "0", 1, "form-control"], ["type", "checkbox", "formControlName", "studentLoanInterest", "id", "studentLoanInterest", 1, "form-check-input"], ["for", "studentLoanInterest", 1, "form-check-label"], ["type", "number", "formControlName", "iraContributions", "min", "0", 1, "form-control"], ["formControlName", "iraType", 1, "form-select"], ["value", "traditional"], ["value", "roth"], ["value", "401k"], ["value", "403b"], ["type", "number", "formControlName", "medicalExpenses", "min", "0", 1, "form-control"], ["formControlName", "otherAdjustments", "rows", "3", "placeholder", "Describe any other deductions or adjustments", 1, "form-control"], [1, "mt-2"], ["type", "number", "formControlName", "mortgageAmount", "placeholder", "Amount", "min", "0", 1, "form-control"], ["type", "number", "formControlName", "propertyTaxAmount", "placeholder", "Amount", "min", "0", 1, "form-control"], ["type", "number", "formControlName", "studentLoanAmount", "placeholder", "Amount", "min", "0", 1, "form-control"], ["formGroupName", "healthCoverage"], ["type", "radio", "formControlName", "hadInsuranceAllYear", "id", "insurance_yes", 1, "form-check-input", 3, "value"], ["for", "insurance_yes", 1, "form-check-label"], ["type", "radio", "formControlName", "hadInsuranceAllYear", "id", "insurance_no", 1, "form-check-input", 3, "value"], ["for", "insurance_no", 1, "form-check-label"], ["type", "checkbox", "formControlName", "marketplaceCoverage", "id", "marketplace", 1, "form-check-input"], ["for", "marketplace", 1, "form-check-label"], ["type", "checkbox", "formControlName", "employerCoverage", "id", "employer", 1, "form-check-input"], ["for", "employer", 1, "form-check-label"], ["type", "checkbox", "formControlName", "form1095A", "id", "form1095A", 1, "form-check-input"], ["for", "form1095A", 1, "form-check-label"], ["type", "checkbox", "formControlName", "form1095B", "id", "form1095B", 1, "form-check-input"], ["for", "form1095B", 1, "form-check-label"], ["type", "checkbox", "formControlName", "form1095C", "id", "form1095C", 1, "form-check-input"], ["for", "form1095C", 1, "form-check-label"], ["formGroupName", "credits"], ["type", "number", "formControlName", "educationExpenses", "min", "0", 1, "form-control"], [1, "form-check", "mt-4"], ["type", "checkbox", "formControlName", "tuition1098T", "id", "tuition1098T", 1, "form-check-input"], ["for", "tuition1098T", 1, "form-check-label"], ["type", "number", "formControlName", "childCareExpenses", "min", "0", 1, "form-control"], ["type", "number", "formControlName", "adoptionExpenses", "min", "0", 1, "form-control"], ["type", "number", "formControlName", "energyEfficiencyUpgrades", "min", "0", 1, "form-control"], ["type", "text", "formControlName", "childCareProviderName", 1, "form-control"], ["type", "text", "formControlName", "childCareProviderEin", 1, "form-control"], ["formGroupName", "priorYearInfo"], ["type", "radio", "formControlName", "filedLastYear", "id", "filed_yes", 1, "form-check-input", 3, "value"], ["for", "filed_yes", 1, "form-check-label"], ["type", "radio", "formControlName", "filedLastYear", "id", "filed_no", 1, "form-check-input", 3, "value"], ["for", "filed_no", 1, "form-check-label"], ["type", "checkbox", "formControlName", "irsNotices", "id", "irsNotices", 1, "form-check-input"], ["for", "irsNotices", 1, "form-check-label"], ["formControlName", "otherNotes", "rows", "4", "placeholder", "Any additional information, questions, or special circumstances you'd like your accountant to know about", 1, "form-control"], ["type", "button", 1, "btn", "btn-success", 3, "click", "disabled"], [1, "ri-send-plane-line", "me-1"], ["type", "button", 1, "btn", "btn-info", 3, "click"], [1, "ri-arrow-right-line", "ms-1"], [1, "card-body", "text-center", "py-5"], ["role", "status", 1, "spinner-border", "text-primary"], [1, "mt-3", "text-muted"]],
      template: function TaxIntakeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\uD83D\uDCC4 Client Tax Intake Form");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, TaxIntakeComponent_span_9_Template, 2, 0, "span", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 10)(13, "div", 11)(14, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, TaxIntakeComponent_button_17_Template, 4, 10, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, TaxIntakeComponent_div_18_Template, 22, 12, "div", 15)(19, TaxIntakeComponent_div_19_Template, 9, 0, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSaving);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Step ", ctx.currentSection + 1, " of ", ctx.sections.length, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx.progress, "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-valuenow", ctx.progress);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.progress, "% Complete");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.sections);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName],
      styles: [".progress[_ngcontent-%COMP%] {\n  background-color: #e9ecef;\n  border-radius: 8px;\n  height: 12px !important;\n}\n\n.progress-bar[_ngcontent-%COMP%] {\n  background-color: #17a2b8 !important;\n  border-radius: 8px;\n  transition: width 0.6s ease;\n}\n.progress-bar.bg-info[_ngcontent-%COMP%] {\n  background-color: #17a2b8 !important;\n}\n\n.btn-sm[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  padding: 0.375rem 0.75rem;\n  border-radius: 6px;\n}\n.btn-sm.btn-success[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  border-color: #28a745;\n}\n.btn-sm.btn-success[_ngcontent-%COMP%]:hover {\n  background-color: #218838;\n  border-color: #1e7e34;\n}\n.btn-sm.btn-primary[_ngcontent-%COMP%] {\n  background-color: #405189;\n  border-color: #405189;\n}\n.btn-sm.btn-primary[_ngcontent-%COMP%]:hover {\n  background-color: #364574;\n  border-color: #2f3d66;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: 1px solid #e9ecef;\n  border-radius: 8px;\n  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n  padding: 1rem 1.25rem;\n}\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n}\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n  margin-bottom: 0.5rem;\n}\n\n.form-control[_ngcontent-%COMP%], .form-select[_ngcontent-%COMP%] {\n  border: 1px solid #ced4da;\n  border-radius: 6px;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.875rem;\n}\n.form-control[_ngcontent-%COMP%]:focus, .form-select[_ngcontent-%COMP%]:focus {\n  border-color: #405189;\n  box-shadow: 0 0 0 0.2rem rgba(64, 81, 137, 0.25);\n}\n.form-control.is-invalid[_ngcontent-%COMP%], .form-select.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus, .form-select.is-invalid[_ngcontent-%COMP%]:focus {\n  border-color: #dc3545;\n  box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);\n}\n\n.input-group[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%] {\n  border-color: #ced4da;\n  color: #6c757d;\n}\n.input-group[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  border-color: #adb5bd;\n  color: #495057;\n}\n.input-group[_ngcontent-%COMP%]   .btn-outline-secondary[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 0.2rem rgba(108, 117, 125, 0.25);\n}\n\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:checked {\n  background-color: #405189;\n  border-color: #405189;\n}\n.form-check[_ngcontent-%COMP%]   .form-check-input[_ngcontent-%COMP%]:focus {\n  border-color: #405189;\n  box-shadow: 0 0 0 0.2rem rgba(64, 81, 137, 0.25);\n}\n.form-check[_ngcontent-%COMP%]   .form-check-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #495057;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n}\n\n.font-size-48[_ngcontent-%COMP%] {\n  font-size: 3rem !important;\n}\n\n.badge.bg-info[_ngcontent-%COMP%] {\n  background-color: #17a2b8 !important;\n}\n\n.btn-outline-danger[_ngcontent-%COMP%] {\n  color: #dc3545;\n  border-color: #dc3545;\n}\n.btn-outline-danger[_ngcontent-%COMP%]:hover {\n  background-color: #dc3545;\n  border-color: #dc3545;\n  color: #fff;\n}\n\n.spinner-border[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n}\n\nh5[_ngcontent-%COMP%] {\n  color: #405189;\n  font-weight: 600;\n  margin-bottom: 1.5rem;\n}\n\nh6[_ngcontent-%COMP%] {\n  color: #495057;\n  font-weight: 600;\n}\n\n@media (max-width: 768px) {\n  .d-flex.flex-wrap.gap-2[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n    font-size: 0.75rem;\n  }\n  .d-flex.flex-wrap.gap-2[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  .card-body[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .container-fluid[_ngcontent-%COMP%] {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n  }\n}\n.card-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.3s ease-in-out;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.form-label[_ngcontent-%COMP%]:after {\n  content: \"\";\n}\n\n.form-label[_ngcontent-%COMP%]:has( + input[required])[_ngcontent-%COMP%]:after, \n.form-label[_ngcontent-%COMP%]:has( + select[required])[_ngcontent-%COMP%]:after, \n.form-label[_ngcontent-%COMP%]:has( + textarea[required])[_ngcontent-%COMP%]:after {\n  content: \" *\";\n  color: #dc3545;\n}\n\n.input-group[_ngcontent-%COMP%]   .form-control[placeholder*=\"***\"][_ngcontent-%COMP%] {\n  font-family: monospace;\n  letter-spacing: 1px;\n}\n\n.progress[_ngcontent-%COMP%] {\n  position: relative;\n}\n.progress[_ngcontent-%COMP%]:after {\n  content: attr(data-progress) \"%\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #495057;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2xpZW50LXBvcnRhbC90YXgtaW50YWtlL3RheC1pbnRha2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUNGO0FBQ0U7RUFDRSxvQ0FBQTtBQUNKOztBQUdBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQUY7QUFFRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFBSjtBQUVJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQUFOO0FBSUU7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBRko7QUFJSTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFGTjs7QUFPQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtREFBQTtBQUpGO0FBTUU7RUFDRSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EscUJBQUE7QUFKSjtBQU1JO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBSk47QUFRRTtFQUNFLGVBQUE7QUFOSjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBUEY7O0FBVUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVBGO0FBU0U7RUFDRSxxQkFBQTtFQUNBLGdEQUFBO0FBUEo7QUFVRTtFQUNFLHFCQUFBO0FBUko7QUFVSTtFQUNFLHFCQUFBO0VBQ0EsZ0RBQUE7QUFSTjs7QUFjRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQVhKO0FBYUk7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtBQVhOO0FBY0k7RUFDRSxrREFBQTtBQVpOOztBQW1CSTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFoQk47QUFtQkk7RUFDRSxxQkFBQTtFQUNBLGdEQUFBO0FBakJOO0FBcUJFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBbkJKOztBQXVCQTtFQUNFLHlCQUFBO0FBcEJGOztBQXVCQTtFQUNFLDBCQUFBO0FBcEJGOztBQXdCRTtFQUNFLG9DQUFBO0FBckJKOztBQXlCQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtBQXRCRjtBQXdCRTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBdEJKOztBQTBCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBdkJGOztBQTJCQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0FBeEJGOztBQTJCQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQXhCRjs7QUE0QkE7RUFFSTtJQUNFLHFCQUFBO0lBQ0Esa0JBQUE7RUExQko7RUE0Qkk7SUFDRSxtQkFBQTtFQTFCTjtFQStCQTtJQUNFLGFBQUE7RUE3QkY7RUFnQ0E7SUFDRSxxQkFBQTtJQUNBLHNCQUFBO0VBOUJGO0FBQ0Y7QUFrQ0E7RUFDRSxrQ0FBQTtBQWhDRjs7QUFtQ0E7RUFDRTtJQUNFLFVBQUE7SUFDQSwyQkFBQTtFQWhDRjtFQWtDQTtJQUNFLFVBQUE7SUFDQSx3QkFBQTtFQWhDRjtBQUNGO0FBcUNFO0VBQ0UsV0FBQTtBQW5DSjs7QUEwQ0U7OztFQUNFLGFBQUE7RUFDQSxjQUFBO0FBckNKOztBQTBDQTtFQUNFLHNCQUFBO0VBQ0EsbUJBQUE7QUF2Q0Y7O0FBMkNBO0VBQ0Usa0JBQUE7QUF4Q0Y7QUEwQ0U7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBeENKIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBoZWlnaHQ6IDEycHggIWltcG9ydGFudDtcbn1cblxuLnByb2dyZXNzLWJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjggIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB0cmFuc2l0aW9uOiB3aWR0aCAwLjZzIGVhc2U7XG4gIFxuICAmLmJnLWluZm8ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjggIWltcG9ydGFudDtcbiAgfVxufVxuXG4uYnRuLXNtIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBcbiAgJi5idG4tc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE4ODM4O1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMWU3ZTM0O1xuICAgIH1cbiAgfVxuICBcbiAgJi5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQwNTE4OTtcbiAgICBib3JkZXItY29sb3I6ICM0MDUxODk7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzY0NTc0O1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMmYzZDY2O1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4wNzUpO1xuICBcbiAgLmNhcmQtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xuICAgIHBhZGRpbmc6IDFyZW0gMS4yNXJlbTtcbiAgICBcbiAgICBoNiB7XG4gICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICB9XG4gIFxuICAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gIH1cbn1cblxuLmZvcm0tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ5NTA1NztcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuXG4uZm9ybS1jb250cm9sLCAuZm9ybS1zZWxlY3Qge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBcbiAgJjpmb2N1cyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjNDA1MTg5O1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDY0LCA4MSwgMTM3LCAwLjI1KTtcbiAgfVxuICBcbiAgJi5pcy1pbnZhbGlkIHtcbiAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG4gICAgXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgyMjAsIDUzLCA2OSwgMC4yNSk7XG4gICAgfVxuICB9XG59XG5cbi5pbnB1dC1ncm91cCB7XG4gIC5idG4tb3V0bGluZS1zZWNvbmRhcnkge1xuICAgIGJvcmRlci1jb2xvcjogI2NlZDRkYTtcbiAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICBib3JkZXItY29sb3I6ICNhZGI1YmQ7XG4gICAgICBjb2xvcjogIzQ5NTA1NztcbiAgICB9XG4gICAgXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSgxMDgsIDExNywgMTI1LCAwLjI1KTtcbiAgICB9XG4gIH1cbn1cblxuLmZvcm0tY2hlY2sge1xuICAuZm9ybS1jaGVjay1pbnB1dCB7XG4gICAgJjpjaGVja2VkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MDUxODk7XG4gICAgICBib3JkZXItY29sb3I6ICM0MDUxODk7XG4gICAgfVxuICAgIFxuICAgICY6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiAjNDA1MTg5O1xuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNjQsIDgxLCAxMzcsIDAuMjUpO1xuICAgIH1cbiAgfVxuICBcbiAgLmZvcm0tY2hlY2stbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6ICM0OTUwNTc7XG4gIH1cbn1cblxuLnRleHQtbXV0ZWQge1xuICBjb2xvcjogIzZjNzU3ZCAhaW1wb3J0YW50O1xufVxuXG4uZm9udC1zaXplLTQ4IHtcbiAgZm9udC1zaXplOiAzcmVtICFpbXBvcnRhbnQ7XG59XG5cbi5iYWRnZSB7XG4gICYuYmctaW5mbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiOCAhaW1wb3J0YW50O1xuICB9XG59XG5cbi5idG4tb3V0bGluZS1kYW5nZXIge1xuICBjb2xvcjogI2RjMzU0NTtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xuICBcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbiAgICBib3JkZXItY29sb3I6ICNkYzM1NDU7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLnNwaW5uZXItYm9yZGVyIHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbn1cblxuLy8gU2VjdGlvbi1zcGVjaWZpYyBzdHlsZXNcbmg1IHtcbiAgY29sb3I6ICM0MDUxODk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuaDYge1xuICBjb2xvcjogIzQ5NTA1NztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLy8gUmVzcG9uc2l2ZSBhZGp1c3RtZW50c1xuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5kLWZsZXguZmxleC13cmFwLmdhcC0yIHtcbiAgICAuYnRuIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIFxuICAgICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICB9XG4gIFxuICAuY29udGFpbmVyLWZsdWlkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gICAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbiAgfVxufVxuXG4vLyBBbmltYXRpb24gZm9yIHNlY3Rpb24gdHJhbnNpdGlvbnNcbi5jYXJkLWJvZHkgZm9ybSA+IGRpdiB7XG4gIGFuaW1hdGlvbjogZmFkZUluIDAuM3MgZWFzZS1pbi1vdXQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XG4gIH1cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB9XG59XG5cbi8vIEN1c3RvbSBzdHlsaW5nIGZvciByZXF1aXJlZCBmaWVsZHNcbi5mb3JtLWxhYmVsIHtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgfVxufVxuXG4uZm9ybS1sYWJlbDpoYXMoKyBpbnB1dFtyZXF1aXJlZF0pLFxuLmZvcm0tbGFiZWw6aGFzKCsgc2VsZWN0W3JlcXVpcmVkXSksXG4uZm9ybS1sYWJlbDpoYXMoKyB0ZXh0YXJlYVtyZXF1aXJlZF0pIHtcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCIgKlwiO1xuICAgIGNvbG9yOiAjZGMzNTQ1O1xuICB9XG59XG5cbi8vIFNTTiBtYXNraW5nIHN0eWxlc1xuLmlucHV0LWdyb3VwIC5mb3JtLWNvbnRyb2xbcGxhY2Vob2xkZXIqPVwiKioqXCJdIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLy8gUHJvZ3Jlc3MgaW5kaWNhdG9yIHN0eWxlc1xuLnByb2dyZXNzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogYXR0cihkYXRhLXByb2dyZXNzKSBcIiVcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 27967:
/*!*************************************************!*\
  !*** ./src/app/services/intake-form.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntakeFormService: () => (/* binding */ IntakeFormService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class IntakeFormService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  /**
   * Get client's intake form responses
   * GET /clients/:id/intake
   */
  getClientIntakeForm(clientId) {
    return this.http.get(`${this.apiUrl}/clients/${clientId}/intake`);
  }
  /**
   * Submit intake form response
   * POST /clients/:id/intake/submit
   */
  submitIntakeForm(clientId, formData) {
    return this.http.post(`${this.apiUrl}/clients/${clientId}/intake/submit`, formData);
  }
  /**
   * Auto-save form data (using submit endpoint for now)
   */
  autoSaveForm(clientId, formData) {
    return this.http.post(`${this.apiUrl}/clients/${clientId}/intake/submit`, {
      ...formData,
      status: 'draft'
    });
  }
  /**
   * Mask SSN for display (show only last 4 digits)
   */
  maskSSN(ssn) {
    if (!ssn || ssn.length < 4) return '***-**-****';
    return `***-**-${ssn.slice(-4)}`;
  }
  /**
   * Format SSN input (add dashes)
   */
  formatSSN(ssn) {
    const cleaned = ssn.replace(/\D/g, '');
    if (cleaned.length >= 9) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 5)}-${cleaned.slice(5, 9)}`;
    } else if (cleaned.length >= 5) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 5)}-${cleaned.slice(5)}`;
    } else if (cleaned.length >= 3) {
      return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`;
    }
    return cleaned;
  }
  /**
   * Calculate form completion percentage
   */
  calculateProgress(formData) {
    let completedSections = 0;
    const totalSections = 7;
    // Section A - Personal Information
    if (formData.personalInformation?.fullName && formData.personalInformation?.ssn && formData.personalInformation?.address?.street) {
      completedSections++;
    }
    // Section B - Dependents (optional but check if started)
    if (formData.dependents !== undefined) {
      completedSections++;
    }
    // Section C - Income
    if (formData.incomeSource && formData.incomeSource.length > 0) {
      completedSections++;
    }
    // Section D - Deductions
    if (formData.deductionsAdjustments) {
      completedSections++;
    }
    // Section E - Health Coverage
    if (formData.healthCoverage?.hadInsuranceAllYear !== undefined) {
      completedSections++;
    }
    // Section F - Credits
    if (formData.credits) {
      completedSections++;
    }
    // Section G - Prior Year
    if (formData.priorYearInfo?.filedLastYear !== undefined) {
      completedSections++;
    }
    return Math.round(completedSections / totalSections * 100);
  }
  /**
   * Generate unique ID for form elements
   */
  generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
  static {
    this.ɵfac = function IntakeFormService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || IntakeFormService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: IntakeFormService,
      factory: IntakeFormService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_client-portal_client-portal_module_ts.js.map