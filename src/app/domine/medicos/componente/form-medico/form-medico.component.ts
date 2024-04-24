import { Component, OnInit } from '@angular/core';
import { ListMedicos } from './../../../shared/medico/medico';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MedicosService } from '../../../../services/medicos.service';

@Component({
  selector: 'app-form-medico',
  templateUrl: './form-medico.component.html',
  styleUrl: './form-medico.component.css'
})

export class FormMedicoComponent implements OnInit{

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
      correo: (''),
      especialidad: (''),
      cargo: ('')
    })
  }
  ngOnInit(): void {
    this.getMedico();
  }
  getMedico(){
    this.medicoService.getData().subscribe(data=>{
      this.medico = data.data;
      console.log(this.medico);
    })
  }
  
}
