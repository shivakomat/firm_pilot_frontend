import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { CLIENT_PORTAL_MENU } from '../../../layouts/sidebar/client-portal-menu';
import { MenuItem } from '../../../layouts/sidebar/menu.model';
import { ClientPortalTopbarComponent } from '../client-portal-topbar/client-portal-topbar.component';

@Component({
  selector: 'app-client-portal-app-layout',
  template: `
    <div id="layout-wrapper">
        <!-- Header -->
        <app-client-portal-topbar></app-client-portal-topbar>

        <!-- Sidebar -->
        <div class="vertical-menu">
            <div data-simplebar class="h-100">
                <div id="sidebar-menu">
                    <ul class="metismenu list-unstyled" id="side-menu">
                        <li class="menu-title" key="t-menu">{{ 'MENUITEMS.PORTAL.NAVIGATION.TEXT' | translate }}</li>
                        
                        <ng-container *ngFor="let item of menuItems">
                            <!-- Layout separator -->
                            <li *ngIf="item.isLayout" class="menu-title"></li>
                            
                            <!-- Regular menu items -->
                            <li *ngIf="!item.isLayout && item.link">
                                <a [routerLink]="item.link" 
                                   routerLinkActive="mm-active"
                                   class="waves-effect">
                                    <i [class]="'bx ' + item.icon"></i>
                                    <span key="t-dashboard">{{ item.label | translate }}</span>
                                </a>
                            </li>
                        </ng-container>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Main Content -->
        <div class="main-content">
            <div class="page-content">
                <div class="container-fluid">
                    <!-- Welcome Header -->
                    <div class="row">
                        <div class="col-12">
                            <div class="page-title-box d-sm-flex align-items-center justify-content-between">
                                <h4 class="mb-sm-0 font-size-18">Client Portal</h4>
                                <div class="page-title-right">
                                    <ol class="breadcrumb m-0">
                                        <li class="breadcrumb-item active">Welcome, {{userDisplayName}}</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Router Outlet for Client Portal Content -->
                    <router-outlet></router-outlet>
                </div>
            </div>

            <!-- Footer -->
            <footer class="footer">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6">
                            <script>document.write(new Date().getFullYear())</script> © Firm Pilot.
                        </div>
                        <div class="col-sm-6">
                            <div class="text-sm-end d-none d-sm-block">
                                Client Portal
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
  `,
  styles: [`
    /* Client Portal Layout Styles */
    .vertical-menu {
        width: 250px;
        z-index: 1001;
        background: #2a3042;
        position: fixed;
        top: 70px;
        bottom: 0;
        left: 0;
        transition: all 0.3s ease;
    }
    
    .main-content {
        margin-left: 250px;
        margin-top: 70px;
        min-height: calc(100vh - 70px);
    }
    
    .footer {
        padding: 24px 0;
        border-top: 1px solid #eff2f7;
    }
    
    /* Mobile responsive */
    @media (max-width: 768px) {
        .vertical-menu {
            margin-left: -250px;
        }
        
        .main-content {
            margin-left: 0;
        }
    }
    
    @media (max-width: 992px) {
        .vertical-menu {
            margin-left: -250px;
            transition: all 0.3s;
        }
        
        .main-content {
            margin-left: 0;
        }
        
        .vertical-menu.show {
            margin-left: 0;
        }
    }
  `],
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, ClientPortalTopbarComponent]
})
export class ClientPortalAppLayoutComponent implements OnInit {
  menuItems: MenuItem[] = [];
  userEmail: string = 'client@example.com';
  userDisplayName: string = 'Client';
  isMenuOpen: boolean = false;

  constructor(private router: Router, private translate: TranslateService) {}

  ngOnInit(): void {
    // Initialize translation service
    this.translate.setDefaultLang('en');
    this.translate.use('en');
    
    this.menuItems = CLIENT_PORTAL_MENU;
    this.loadUserInfo();
  }

  loadUserInfo(): void {
    const currentUser = localStorage.getItem('currentUser');
    
    if (currentUser) {
      try {
        const user = JSON.parse(currentUser);
        this.userEmail = user.email || user.emailAddress || user.username || 'client@example.com';
        this.userDisplayName = this.userEmail.split('@')[0];
      } catch (error) {
        console.error('Error parsing user data:', error);
        this.userEmail = 'client@example.com';
        this.userDisplayName = 'Client';
      }
    }
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    const verticalMenu = document.querySelector('.vertical-menu');
    if (verticalMenu) {
      verticalMenu.classList.toggle('show');
    }
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth/login']);
  }
}
