import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicRoutingModule } from './medic-routing.module';
import { ListMedicosComponent } from './pages/list-medicos/list-medicos.component';
import { FormMedicoComponent } from './componente/form-medico/form-medico.component';
import { MedicoComponent } from './componente/medico/medico.component';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from '../shared/header/header.component';
import { DashboardMedicosComponent } from './pages/dashboard-medicos/dashboard-medicos.component';
import { TableMedicoComponent } from './componente/table-medico/table-medico.component'; 




@NgModule({
  declarations: [ListMedicosComponent,
    FormMedicoComponent,
    MedicoComponent,
    HeaderComponent,
    DashboardMedicosComponent,
    TableMedicoComponent
  ],
  imports: [
    CommonModule,
    MedicRoutingModule,
    SharedModule
  ]
})
export class MedicModule { }
