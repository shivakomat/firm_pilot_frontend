import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CookieService } from 'ngx-cookie-service';
import { LanguageService } from '../../../core/services/language.service';
import { ApiService } from '../../../core/services/api.service';

@Component({
  selector: 'app-client-portal-topbar',
  template: `
    <header id="page-topbar">
      <div class="navbar-header">
        <div class="d-flex">
          <!-- LOGO -->
          <div class="navbar-brand-box" style="padding-top: 25px;">
            <a routerLink="/client-portal" class="logo logo-dark">
              <span class="logo-sm">
                <h6 class="mb-0 text-dark font-weight-bold">FP</h6>
              </span>
              <span class="logo-lg">
                <h5 class="mb-0 text-dark font-weight-bold">Firm Pilot</h5>
              </span>
            </a>
            <a routerLink="/client-portal" class="logo logo-light">
              <span class="logo-sm">
                <h6 class="mb-0 text-light font-weight-bold">FP</h6>
              </span>
              <span class="logo-lg">
                <h5 class="mb-0 text-light font-weight-bold">Firm Pilot</h5>
              </span>
            </a>
          </div>

          <button type="button" class="btn btn-sm px-3 font-size-16 header-item" 
                  id="vertical-menu-btn" (click)="toggleMobileMenu($event)">
            <i class="fa fa-fw fa-bars"></i>
          </button>
        </div>

        <div class="d-flex">
          <!-- Language Dropdown -->
          <div class="dropdown d-inline-block" dropdown>
            <button type="button" class="btn header-item" id="page-header-user-dropdown" dropdownToggle>
              @if(flagvalue === undefined){
              <img src="{{valueset}}" alt="Header Language" height="16">
              }@else{
              <img src="{{flagvalue}}" alt="Header Language" height="16">
              }
            </button>
            <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>
              @for (item of listLang; track $index) {
              <a href="javascript:void(0);" class="dropdown-item notify-item" 
                 (click)="setLanguage(item.text, item.lang, item.flag)" 
                 [ngClass]="{'active': cookieValue === item.lang}">
                <img src="{{item.flag}}" alt="user-image" class="me-1" height="12"> 
                <span class="align-middle">{{item.text}}</span>
              </a>
              }
            </div>
          </div>

          <!-- Fullscreen -->
          <div class="dropdown d-none d-lg-inline-block ms-1">
            <button type="button" class="btn header-item noti-icon waves-effect" 
                    data-bs-toggle="fullscreen" (click)="fullscreen()">
              <i class="bx bx-fullscreen"></i>
            </button>
          </div>

          <!-- User Profile Dropdown -->
          <div class="dropdown d-inline-block" dropdown>
            <button type="button" class="btn header-item" dropdownToggle id="page-header-user-dropdown">
              <span class="d-none d-xl-inline-block ms-1">{{userEmail}}</span>
              <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-end" *dropdownMenu>
              <a class="dropdown-item text-danger" href="javascript: void(0);" (click)="logout()">
                <i class="bx bx-power-off font-size-16 align-middle me-1 text-danger"></i>
                {{ 'HEADER.LOGIN.LOGOUT' | translate}}
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    /* Remove custom styles to use global theme styles */
  `],
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule, BsDropdownModule],
})
export class ClientPortalTopbarComponent implements OnInit {
  element: any;
  cookieValue: any;
  flagvalue: any;
  countryName: any;
  valueset: any;
  userEmail: string = 'client@example.com';

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
    private apiService: ApiService,
    public languageService: LanguageService,
    public translate: TranslateService,
    public _cookiesService: CookieService
  ) {}

  ngOnInit(): void {
    this.element = document.documentElement;
    this.loadUserEmail();

    this.cookieValue = this._cookiesService.get('lang');
    const val = this.listLang.filter(x => x.lang === this.cookieValue);
    this.countryName = val.map(element => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) { this.valueset = 'assets/images/flags/us.jpg'; }
    } else {
      this.flagvalue = val.map(element => element.flag);
    }
  }

  loadUserEmail(): void {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      try {
        const user = JSON.parse(currentUser);
        this.userEmail = user.email || user.emailAddress || user.username || 'client@firmpilot.com';
      } catch (error) {
        console.error('Error parsing user data:', error);
        this.userEmail = 'client@firmpilot.com';
      }
    } else {
      this.userEmail = 'client@firmpilot.com';
    }
  }

  setLanguage(text: string, lang: string, flag: string): void {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
  }

  toggleMobileMenu(event: any): void {
    event.preventDefault();
    // Emit event to parent component
    const toggleEvent = new CustomEvent('mobileMenuToggle');
    document.dispatchEvent(toggleEvent);
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
        this.router.navigate(['/auth/auth/login']);
      },
      error: (error) => {
        console.error('Logout API error:', error);
        localStorage.removeItem('authToken');
        localStorage.removeItem('currentUser');
        this.router.navigate(['/auth/auth/login']);
      }
    });
  }
}
