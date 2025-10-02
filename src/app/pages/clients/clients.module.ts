import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsRoutingModule } from './clients-routing.module';
import { ClientDetailComponent } from './client-detail/client-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ClientsRoutingModule,
    ClientDetailComponent
  ]
})
export class ClientsModule { }
