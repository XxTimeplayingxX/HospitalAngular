import { Component } from '@angular/core';
import { ListMedicos } from '../../../../response/models.listMedicos';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MedicosService } from '../../../../services/medicos.service';

@Component({
  selector: 'app-form-medico',
  templateUrl: './form-medico.component.html',
  styleUrl: './form-medico.component.css'
})
export class FormMedicoComponent {
  medico: ListMedicos[] = [];
  forms: FormGroup;
  labelButton : string = 'Aceptar';
  labelAnadirMedico : string = 'Agregar';
  constructor(private fb: FormBuilder, private medicoService: MedicosService){
    this.forms = this.fb.group({
      nombre: (''),
      apellido: (''),
      cedula: (''),
      telefono: (''),
      especialidad: (''),
      cargo: ('')
    })
  }

  
}
