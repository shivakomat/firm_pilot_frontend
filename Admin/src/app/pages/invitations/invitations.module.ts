import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InvitationsRoutingModule } from './invitations-routing.module';
import { InvitationManagementComponent } from './invitation-management/invitation-management.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InvitationsRoutingModule,
    InvitationManagementComponent
  ]
})
export class InvitationsModule { }
