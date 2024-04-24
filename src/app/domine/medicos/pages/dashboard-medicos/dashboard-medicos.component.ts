import { Component } from '@angular/core';
import { ListMedicos } from '../../../../response/models.listMedicos';

@Component({
  selector: 'app-dashboard-medicos',
  templateUrl: './dashboard-medicos.component.html',
  styleUrl: './dashboard-medicos.component.css'
})
export class DashboardMedicosComponent {
  medico = <ListMedicos[]>([]);
}
