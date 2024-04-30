import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPacientesComponent } from './pages/list-pacientes/list-pacientes.component';

const routes: Routes = [{
  path: 'dashboard',
  component: ListPacientesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PacienteRoutingModule { }
