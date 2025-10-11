import { Injectable } from '@angular/core';

export interface AnalyticsEvent {
  event: string;
  payload: any;
  timestamp?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private events: AnalyticsEvent[] = [];

  constructor() { }

  /**
   * Track an analytics event
   */
  track(event: string, payload: any = {}): void {
    const analyticsEvent: AnalyticsEvent = {
      event,
      payload,
      timestamp: new Date()
    };

    this.events.push(analyticsEvent);
    
    // Log to console for development
    console.log('📊 Analytics Event:', analyticsEvent);

    // In production, this would send to analytics service
    // this.sendToAnalyticsProvider(analyticsEvent);
  }

  /**
   * Track document suggestion shown
   */
  trackDocumentSuggestionShown(tag?: string, year?: number, confidence?: number): void {
    this.track('doc_suggestion_shown', {
      tag,
      year,
      confidence
    });
  }

  /**
   * Track document suggestion switch action
   */
  trackDocumentSuggestionSwitch(
    fromTag?: string, 
    toTag?: string, 
    fromYear?: number, 
    toYear?: number
  ): void {
    this.track('doc_suggestion_switch', {
      fromTag,
      toTag,
      fromYear,
      toYear
    });
  }

  /**
   * Track document suggestion kept action
   */
  trackDocumentSuggestionKept(tag?: string, year?: number): void {
    this.track('doc_suggestion_kept', {
      tag,
      year
    });
  }

  /**
   * Get all tracked events (for debugging)
   */
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }

  /**
   * Clear all events
   */
  clearEvents(): void {
    this.events = [];
  }

  /**
   * Send to analytics provider (stub for future implementation)
   */
  private sendToAnalyticsProvider(event: AnalyticsEvent): void {
    // Future implementation would send to Google Analytics, Mixpanel, etc.
    // Example:
    // gtag('event', event.event, event.payload);
  }
}
