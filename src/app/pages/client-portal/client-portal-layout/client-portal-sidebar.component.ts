import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CLIENT_PORTAL_MENU } from '../../../layouts/sidebar/client-portal-menu';
import { MenuItem } from '../../../layouts/sidebar/menu.model';

@Component({
  selector: 'app-client-portal-sidebar',
  template: `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title mb-4">{{ 'MENUITEMS.PORTAL.NAVIGATION.TEXT' | translate }}</h5>
        <div class="list-group list-group-flush">
          <ng-container *ngFor="let item of menuItems">
            <!-- Layout separator -->
            <div *ngIf="item.isLayout" class="my-3"></div>
            
            <!-- Regular menu items -->
            <a *ngIf="!item.isLayout && item.link" 
               [routerLink]="item.link" 
               routerLinkActive="active list-group-item-primary" 
               class="list-group-item list-group-item-action border-0 d-flex align-items-center">
              <i [class]="'bx ' + item.icon + ' me-2'"></i>
              <span>{{ item.label | translate }}</span>
              <span *ngIf="item.badge" 
                    [class]="'badge ms-auto bg-' + item.badge.variant">
                {{ item.badge.text | translate }}
              </span>
            </a>
          </ng-container>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .list-group-item.active {
      background-color: var(--bs-primary);
      border-color: var(--bs-primary);
      color: white;
    }
    
    .list-group-item:hover {
      background-color: rgba(var(--bs-primary-rgb), 0.1);
    }
    
    .badge {
      font-size: 0.75rem;
    }
  `],
  standalone: true,
  imports: [CommonModule, RouterModule, TranslateModule]
})
export class ClientPortalSidebarComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.menuItems = CLIENT_PORTAL_MENU;
  }
}
