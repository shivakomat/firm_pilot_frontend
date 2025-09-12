import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientlistComponent } from './clientlist/clientlist.component';
import { RoleGuard } from '../../core/guards/role.guard';
// Later you can create dedicated Client components

const routes: Routes = [
  {
    path: 'list',
    component: ClientlistComponent,
    canActivate: [RoleGuard],
    data: { role: 'ACCOUNTANT' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
