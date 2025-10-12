import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientDetailComponent } from './client-detail/client-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    ClientsRoutingModule,
    ClientDetailComponent
  ]
})
export class ClientsModule { }
