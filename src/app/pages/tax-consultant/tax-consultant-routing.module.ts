import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntakeFormsComponent } from './intake-forms/intake-forms.component';
import { ClientDocumentsComponent } from './client-documents/client-documents.component';
import { ClientProjectsComponent } from './client-projects/client-projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { RoleGuard } from '../../core/guards/role.guard';

const routes: Routes = [
  {
    path: 'intake-forms',
    component: IntakeFormsComponent,
    canActivate: [RoleGuard],
    data: { role: 'ACCOUNTANT' }
  },
  {
    path: 'client-documents',
    component: ClientDocumentsComponent,
    canActivate: [RoleGuard],
    data: { role: 'ACCOUNTANT' }
  },
  {
    path: 'client-projects/:clientId',
    component: ClientProjectsComponent,
    canActivate: [RoleGuard],
    data: { role: 'ACCOUNTANT' }
  },
  {
    path: 'project-detail/:projectId',
    component: ProjectDetailComponent,
    canActivate: [RoleGuard],
    data: { role: 'ACCOUNTANT' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxConsultantRoutingModule { }
