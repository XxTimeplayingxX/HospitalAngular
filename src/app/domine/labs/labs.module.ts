import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabsRoutingModule } from './labs-routing.module';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    LabsRoutingModule
  ]
})
export class LabsModule { }
