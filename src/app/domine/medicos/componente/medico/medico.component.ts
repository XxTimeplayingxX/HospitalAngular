import { Component, Input, OnInit } from '@angular/core';
import { ListMedicos } from '../../../../response/models.listMedicos';
import { MedicosService } from '../../../../services/medicos.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrl: './medico.component.css'
})
export class MedicoComponent{
  @Input({required: true}) medicoAPI!:ListMedicos;
  
}
