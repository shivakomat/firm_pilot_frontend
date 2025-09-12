import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { InvitationManagementComponent } from './invitation-management/invitation-management.component';
import { ClientRegistrationComponent } from './client-registration/client-registration.component';
import { RoleGuard } from '../../core/guards/role.guard';

const routes: Routes = [
  {
    path: '',
    component: InvitationManagementComponent,
    canActivate: [RoleGuard],
    data: { role: 'ACCOUNTANT' }
  },
  {
    path: 'register/:token',
    component: ClientRegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitationsRoutingModule { }
