import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientPortalLayoutComponent } from './client-portal-layout/client-portal-layout.component';
import { DocumentsComponent } from './documents/documents.component';
import { IntakeComponent } from './intake/intake.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  {
    path: '',
    component: ClientPortalLayoutComponent,
    children: [
      { path: '', redirectTo: 'documents', pathMatch: 'full' },
      { path: 'documents', component: DocumentsComponent },
      { path: 'intake', component: IntakeComponent },
      { path: 'chat', component: ChatComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientPortalRoutingModule { }
