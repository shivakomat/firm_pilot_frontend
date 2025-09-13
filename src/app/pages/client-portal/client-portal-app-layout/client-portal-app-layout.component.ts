import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { TopbarComponent } from '../../../layouts/topbar/topbar.component';
import { SidebarComponent } from '../../../layouts/sidebar/sidebar.component';
import { FooterComponent } from '../../../layouts/footer/footer.component';
import { RightsidebarComponent } from '../../../layouts/rightsidebar/rightsidebar.component';

@Component({
  selector: 'app-client-portal-app-layout',
  template: `
    <div id="layout-wrapper">
        <app-topbar (settingsButtonClicked)="onSettingsButtonClicked()" (mobileMenuButtonClicked)="onToggleMobileMenu()"></app-topbar>
        
        <app-sidebar></app-sidebar>
        
        <div class="main-content">
            <div class="page-content">
                <div class="container-fluid">

                    <!-- Router Outlet for Client Portal Content -->
                    <router-outlet></router-outlet>
                </div>
            </div>

            <app-footer></app-footer>
        </div>
    </div>
    
    <app-rightsidebar></app-rightsidebar>
  `,
  styles: [`
    /* Remove custom styles to use global theme styles */
  `],
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, TopbarComponent, SidebarComponent, FooterComponent, RightsidebarComponent]
})
export class ClientPortalAppLayoutComponent implements OnInit {
  constructor(private router: Router, private translate: TranslateService) {}

  ngOnInit(): void {
    // Initialize translation service
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    
    // Apply dark sidebar theme to match accountant portal
    document.body.setAttribute('data-sidebar', 'dark');
    document.body.setAttribute('data-layout', 'vertical');
  }

  onSettingsButtonClicked(): void {
    // Handle settings button click
  }

  onToggleMobileMenu(): void {
    // Handle mobile menu toggle
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth/login']);
  }
}
