import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ListMedicosComponent } from './pages/list-medicos/list-medicos.component';
import { LabsComponent } from './pages/labs/labs.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent
},
{
  path: 'medicos',
  component: ListMedicosComponent
},
{
  path: 'labs',
  component: LabsComponent
},
{
  path: 'paciente',
  component: PacientesComponent
},
{
  path: 'sidebar',
  component: SideBarComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
