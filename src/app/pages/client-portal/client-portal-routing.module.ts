import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocumentsComponent } from './documents/documents.component';
import { IntakeComponent } from './intake/intake.component';
import { TaxIntakeComponent } from './tax-intake/tax-intake.component';
import { ChatComponent } from './chat/chat.component';
import { ClientProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { 
    path: 'dashboard', 
    loadComponent: () => import('./dashboard/dashboard.component').then(c => c.ClientDashboardComponent)
  },
  { path: 'documents', component: DocumentsComponent },
  { path: 'projects', component: ClientProjectsComponent },
  { 
    path: 'project-detail/:projectId', 
    loadComponent: () => import('./project-detail/project-detail.component').then(c => c.ProjectDetailComponent)
  },
  { path: 'intake', component: IntakeComponent },
  { path: 'tax-intake', component: TaxIntakeComponent },
  { path: 'chat', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPortalRoutingModule { }
