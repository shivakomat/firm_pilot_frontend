import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientPortalSidebarComponent } from './client-portal-sidebar.component';

@Component({
  selector: 'app-client-portal-layout',
  templateUrl: './client-portal-layout.component.html',
  styleUrls: ['./client-portal-layout.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, ClientPortalSidebarComponent]
})
export class ClientPortalLayoutComponent implements OnInit {
  userEmail: string = 'client@example.com';
  userDisplayName: string = 'client';

  constructor() { }

  ngOnInit(): void {
    this.loadUserEmail();
  }

  /**
   * Load user's email from localStorage
   */
  loadUserEmail(): void {
    const currentUser = localStorage.getItem('currentUser');
    
    if (currentUser) {
      try {
        const user = JSON.parse(currentUser);
        // Try multiple possible field names for email
        this.userEmail = user.email || user.emailAddress || user.username || 'client@example.com';
        
        // Extract username part (before @) for display
        this.userDisplayName = this.userEmail.split('@')[0];
      } catch (error) {
        console.error('Error parsing user data:', error);
        this.userEmail = 'client@example.com';
        this.userDisplayName = 'client';
      }
    } else {
      this.userEmail = 'client@example.com';
      this.userDisplayName = 'client';
    }
  }
}
