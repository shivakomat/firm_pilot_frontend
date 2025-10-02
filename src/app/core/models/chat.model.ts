export interface ChatMessage {
  id?: number;
  content: string;
  senderId: number;
  senderName: string;
  senderType: 'CLIENT' | 'ACCOUNTANT' | 'AI_AGENT';
  timestamp: Date;
  threadId?: number;
}

export interface ChatThread {
  id: number;
  clientId: number;
  clientName: string;
  clientEmail: string;
  lastMessage?: ChatMessage;
  lastActivity: Date;
  unreadCount: number;
  messages: ChatMessage[];
}

export interface SendMessageRequest {
  content: string;
  senderType: 'CLIENT' | 'ACCOUNTANT' | 'AI_AGENT';
}

export interface ChatThreadResponse {
  thread: ChatThread;
  messages: ChatMessage[];
}

export interface AIAgentResponse {
  message: string;
  confidence: number;
  suggestedActions?: string[];
}

// API Response interfaces (matching actual backend format)
export interface ApiThreadResponse {
  success: boolean;
  thread: {
    id: number;
    clientId: number;
    createdAt: string;
  };
  messages: ApiMessage[];
}

export interface ApiMessage {
  id: number;
  threadId: number;
  senderId: number;
  body: string;
  attachmentDocumentId: number | null;
  createdAt: string;
  readAt: string | null;
}
