import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ListMedicos } from './../../../shared/medico/medico';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MedicosService } from '../../../../services/medicos.service';

@Component({
  selector: 'app-form-medico',
  templateUrl: './form-medico.component.html',
  styleUrl: './form-medico.component.css'
})

export class FormMedicoComponent implements OnInit, OnChanges{
  medico: ListMedicos[] = [];
  forms: FormGroup;
  labelButton : string = 'Aceptar';
  labelAnadirMedico : string = 'Agregar';
  @Input() dataMedico: ListMedicos | null = null;
  
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
  ngOnChanges(changes: SimpleChanges){
    console.log(changes['dataMedico']);
    const dataForm = changes['dataMedico'];
    if(dataForm){
      this.forms.patchValue(dataForm.currentValue);
    }
  }
  ngOnInit(): void {
    this.getMedico();
  }

  fromChild(event: ListMedicos){
    console.log('Estamos en Form');
    console.log(event)
  }


  //API methods
  getMedico(){
    this.medicoService.getData().subscribe(data=>{
      this.medico = data.data;
      console.log(this.medico);
    })
  }
  
}
