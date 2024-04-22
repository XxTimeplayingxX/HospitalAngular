import { Component } from '@angular/core';
import { ListMedicos } from '../../../../response/models.listMedicos';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrl: './medico.component.css'
})
export class MedicoComponent {
  medico: ListMedicos[] = [];
}
