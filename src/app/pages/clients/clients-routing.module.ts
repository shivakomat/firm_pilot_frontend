import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientlistComponent } from './clientlist/clientlist.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { RoleGuard } from '../../core/guards/role.guard';

const routes: Routes = [
  {
    path: 'list',
    component: ClientlistComponent,
    canActivate: [RoleGuard],
    data: { role: 'ACCOUNTANT' }
  },
  {
    path: 'detail/:id',
    component: ClientDetailComponent,
    canActivate: [RoleGuard],
    data: { role: 'ACCOUNTANT' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
