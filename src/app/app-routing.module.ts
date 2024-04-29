import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LabsComponent } from './pages/labs/labs.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';

const routes: Routes = [{
  path: 'ja',
  component: LoginComponent
},
{
  path: '',
  children: [
    {
      path: 'listado',
      loadChildren: ()=>import('./domine/medicos/medic.module').then(m=>m.MedicModule)
    }
  ]
},
{
  path: '',
  children:[
    {
      path: 'paciente',
      loadChildren: ()=>import('./domine/paciente/paciente.module').then(p=>p.PacienteModule)
    }
  ]
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
