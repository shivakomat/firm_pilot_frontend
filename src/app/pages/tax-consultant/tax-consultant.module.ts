import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TaxConsultantRoutingModule } from './tax-consultant-routing.module';
import { IntakeFormsComponent } from './intake-forms/intake-forms.component';
import { ClientDocumentsComponent } from './client-documents/client-documents.component';
import { ClientProjectsComponent } from './client-projects/client-projects.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

// UI Components
import { PagetitleComponent } from '../../shared/ui/pagetitle/pagetitle.component';
import { LoaderComponent } from '../../shared/ui/loader/loader.component';

// Bootstrap modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    IntakeFormsComponent,
    ClientDocumentsComponent,
    ClientProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    TaxConsultantRoutingModule,
    PagetitleComponent,
    LoaderComponent,
    ProjectDetailComponent,
    BsDropdownModule,
    ModalModule,
    TabsModule
  ]
})
export class TaxConsultantModule { }
