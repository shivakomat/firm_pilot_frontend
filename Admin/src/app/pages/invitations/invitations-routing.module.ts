import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvitationManagementComponent } from './invitation-management/invitation-management.component';

const routes: Routes = [
  {
    path: '',
    component: InvitationManagementComponent
  },
  {
    path: 'management',
    component: InvitationManagementComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitationsRoutingModule { }
