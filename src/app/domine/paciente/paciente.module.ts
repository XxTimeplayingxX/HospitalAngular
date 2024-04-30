import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { PacienteRoutingModule } from './paciente-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListPacientesComponent } from './pages/list-pacientes/list-pacientes.component';
import { FormPacienteComponent } from './components/form-paciente/form-paciente.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    ListPacientesComponent,
    FormPacienteComponent
  ],
  imports: [
    CommonModule,
    PacienteRoutingModule,
    SharedModule
  ]
})
export class PacienteModule { }
