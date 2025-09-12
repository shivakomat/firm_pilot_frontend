import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from '../../../core/services/language.service';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-client-portal-topbar',
  template: `
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
          <!-- Language Dropdown -->
          <div class="dropdown d-inline-block">
            <button type="button" class="btn header-item waves-effect" 
                    data-bs-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false">
              <img [src]="flagvalue" alt="Header Language" height="16">
            </button>
            <div class="dropdown-menu dropdown-menu-end">
              <a *ngFor="let lang of listLang" 
                 class="dropdown-item notify-item" 
                 (click)="setLanguage(lang.text, lang.lang, lang.flag)">
                <img [src]="lang.flag" alt="user-image" class="me-1" height="12">
                <span class="align-middle">{{ lang.text }}</span>
              </a>
            </div>
          </div>

          <!-- Fullscreen -->
          <div class="dropdown d-inline-block">
            <button type="button" class="btn header-item noti-icon waves-effect" 
                    (click)="fullscreen()">
              <i class="bx bx-fullscreen"></i>
            </button>
          </div>

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
              <span class="d-none d-xl-inline-block ms-1">{{userDisplayName}}</span>
              <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-end">
              <a class="dropdown-item" href="#" (click)="logout()">
                <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i> 
                <span>{{ 'MENUITEMS.PORTAL.LOGOUT.TEXT' | translate }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
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
    
    .navbar-brand-box {
      width: 250px;
      text-align: center;
    }
    
    .header-item {
      color: #74788d;
      border: none;
      background: transparent;
      padding: 0.5rem;
    }
    
    .header-item:hover {
      color: #495057;
    }
    
    .header-profile-user {
      width: 36px;
      height: 36px;
    }
    
    .dropdown-menu {
      border: 1px solid #e9ecef;
      box-shadow: 0 0.75rem 1.5rem rgba(18,38,63,.03);
    }
    
    .dropdown-item:hover {
      background-color: #f8f9fa;
    }
  `],
  standalone: true,
  imports: [CommonModule, TranslateModule]
})
export class ClientPortalTopbarComponent implements OnInit {
  element: any;
  userEmail: string = 'client@example.com';
  userDisplayName: string = 'Client';
  flagvalue: string = 'assets/images/flags/us.jpg';
  countryName: string = 'English';

  listLang: any = [
    { text: 'English', flag: 'assets/images/flags/us.jpg', lang: 'en' },
    { text: 'Spanish', flag: 'assets/images/flags/spain.jpg', lang: 'es' },
    { text: 'German', flag: 'assets/images/flags/germany.jpg', lang: 'de' },
    { text: 'Italian', flag: 'assets/images/flags/italy.jpg', lang: 'it' },
    { text: 'Russian', flag: 'assets/images/flags/russia.jpg', lang: 'ru' },
  ];

  constructor(
    @Inject(DOCUMENT) private document: any,
    private router: Router,
    private translate: TranslateService,
    private languageService: LanguageService,
    private cookieService: CookieService,
    private apiService: ApiService
  ) {}

  ngOnInit(): void {
    this.element = document.documentElement;
    this.loadUserInfo();
    this.initializeLanguage();
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

  initializeLanguage(): void {
    const cookieValue = this.cookieService.get('lang') || 'en';
    const val = this.listLang.filter(x => x.lang === cookieValue);
    
    if (val.length > 0) {
      this.countryName = val[0].text;
      this.flagvalue = val[0].flag;
    }
  }

  setLanguage(text: string, lang: string, flag: string): void {
    this.countryName = text;
    this.flagvalue = flag;
    this.languageService.setLanguage(lang);
    this.translate.use(lang);
  }

  toggleMenu(): void {
    const verticalMenu = document.querySelector('.vertical-menu');
    if (verticalMenu) {
      verticalMenu.classList.toggle('show');
    }
  }

  fullscreen(): void {
    document.body.classList.toggle('fullscreen-enable');
    if (
      !document.fullscreenElement && !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        this.document.msExitFullscreen();
      }
    }
  }

  logout(): void {
    this.apiService.logout().subscribe({
      next: (response) => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('currentUser');
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        console.error('Logout API error:', error);
        localStorage.removeItem('authToken');
        localStorage.removeItem('currentUser');
        this.router.navigate(['/auth/login']);
      }
    });
  }
}
