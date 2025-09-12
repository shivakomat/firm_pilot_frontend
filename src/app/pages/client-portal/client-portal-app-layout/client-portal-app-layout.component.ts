import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { CLIENT_PORTAL_MENU } from '../../../layouts/sidebar/client-portal-menu';
import { MenuItem } from '../../../layouts/sidebar/menu.model';

@Component({
  selector: 'app-client-portal-app-layout',
  template: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Client Portal - Firm Pilot</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="Client Portal for Firm Pilot" name="description" />
        <meta content="Firm Pilot" name="author" />
    </head>
    <body data-sidebar="dark" data-layout-mode="light">
        <div id="layout-wrapper">
            <!-- Header -->
            <header id="page-topbar">
                <div class="navbar-header">
                    <div class="d-flex">
                        <!-- Logo -->
                        <div class="navbar-brand-box">
                            <a href="#" class="logo logo-dark">
                                <span class="logo-sm">
                                    <img src="assets/images/logo.svg" alt="" height="22">
                                </span>
                                <span class="logo-lg">
                                    <img src="assets/images/logo-dark.png" alt="" height="17">
                                </span>
                            </a>
                            <a href="#" class="logo logo-light">
                                <span class="logo-sm">
                                    <img src="assets/images/logo-light.svg" alt="" height="22">
                                </span>
                                <span class="logo-lg">
                                    <img src="assets/images/logo-light.png" alt="" height="19">
                                </span>
                            </a>
                        </div>

                        <!-- Menu Toggle Button -->
                        <button type="button" class="btn btn-sm px-3 font-size-16 header-item waves-effect" 
                                id="vertical-menu-btn" (click)="toggleMenu()">
                            <i class="fa fa-fw fa-bars"></i>
                        </button>
                    </div>

                    <div class="d-flex">
                        <!-- User Profile Dropdown -->
                        <div class="dropdown d-inline-block">
                            <button type="button" class="btn header-item waves-effect" 
                                    id="page-header-user-dropdown" 
                                    data-bs-toggle="dropdown" 
                                    aria-haspopup="true" 
                                    aria-expanded="false">
                                <img class="rounded-circle header-profile-user" 
                                     src="assets/images/users/avatar-1.jpg" 
                                     alt="Header Avatar">
                                <span class="d-none d-xl-inline-block ms-1" key="t-henry">{{userDisplayName}}</span>
                                <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                            </button>
                            <div class="dropdown-menu dropdown-menu-end">
                                <a class="dropdown-item" href="#" (click)="logout()">
                                    <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> 
                                    <span key="t-logout">{{ 'MENUITEMS.PORTAL.LOGOUT.TEXT' | translate }}</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

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
    </body>
  `,
  styles: [`
    /* Client Portal Specific Styles */
    .navbar-brand-box {
        width: 250px;
        text-align: center;
    }
    
    .vertical-menu {
        width: 250px;
        z-index: 1001;
        background: #2a3042;
        position: fixed;
        top: 70px;
        bottom: 0;
        left: 0;
    }
    
    .main-content {
        margin-left: 250px;
        margin-top: 70px;
        min-height: calc(100vh - 70px);
    }
    
    #page-topbar {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 1002;
        background: #fff;
        box-shadow: 0 2px 4px rgba(15,34,58,.12);
        height: 70px;
    }
    
    .navbar-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1.5rem;
        height: 70px;
    }
    
    #sidebar-menu .metismenu li a {
        color: #a6b0cf;
        display: block;
        padding: 0.625rem 1.5rem;
        position: relative;
        transition: all 0.4s;
        text-decoration: none;
    }
    
    #sidebar-menu .metismenu li a:hover,
    #sidebar-menu .metismenu li a.mm-active {
        color: #74788d;
        background-color: rgba(255,255,255,0.06);
    }
    
    .menu-title {
        padding: 12px 20px !important;
        letter-spacing: .05em;
        pointer-events: none;
        cursor: default;
        font-size: 11px;
        text-transform: uppercase;
        color: #6c757d;
        font-weight: 600;
    }
    
    .footer {
        background: #f8f9fa;
        padding: 20px 0;
        border-top: 1px solid #e9ecef;
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
  imports: [CommonModule, RouterModule, TranslateModule]
})
export class ClientPortalAppLayoutComponent implements OnInit {
  menuItems: MenuItem[] = [];
  userEmail: string = 'client@example.com';
  userDisplayName: string = 'Client';
  isMenuOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
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
