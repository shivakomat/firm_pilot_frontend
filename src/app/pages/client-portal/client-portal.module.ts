import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientPortalRoutingModule } from './client-portal-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { IntakeComponent } from './intake/intake.component';
import { TaxIntakeComponent } from './tax-intake/tax-intake.component';
import { ClientProjectsComponent } from './projects/projects.component';

// UI Components
import { PagetitleComponent } from '../../shared/ui/pagetitle/pagetitle.component';
import { LoaderComponent } from '../../shared/ui/loader/loader.component';

// Bootstrap modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

@NgModule({
  declarations: [
    DocumentsComponent,
    IntakeComponent,
    TaxIntakeComponent,
    ClientProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClientPortalRoutingModule,
    PagetitleComponent,
    LoaderComponent,
    BsDropdownModule,
    ModalModule,
    TabsModule,
    DropzoneModule
  ]
})
export class ClientPortalModule { }
