import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PacienteService } from '../../../../services/paciente.service';
import { ListPacientesComponent } from '../../pages/list-pacientes/list-pacientes.component';
import { PacienteInterface } from '../../../shared/paciente/paciente';

@Component({
  selector: 'app-form-paciente',
  templateUrl: './form-paciente.component.html',
  styleUrl: './form-paciente.component.css'
})
export class FormPacienteComponent implements OnChanges{
  //Input
  @Input() dataPaciente: PacienteInterface | null = null;

  //Output
  @Output() actualizado = new EventEmitter();
  @Output() anadido = new EventEmitter();

  paciente: PacienteInterface[] = [];
  forms: FormGroup;

  constructor(private fb: FormBuilder, private pacienteService: PacienteService){

    this.forms = fb.group({
      numero_historial: (''),
       nombre: (''),
       apellido: (''),
       cedula: (''),
       telefono: (''),
       correo: ('')
    })
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(changes['dataPaciente']);
    const dataForm = changes['dataPaciente'];
    if(dataForm){
      this.forms.patchValue(dataForm.currentValue);
    }
  }


  updateForm(){
    if(this.dataPaciente){
      this.pacienteService.putData(this.forms.value)
      .subscribe(()=>{
        this.actualizado.emit(true)
        this.forms.reset();
      });
      alert('Cambios Aplicado');
      console.log('Cambios aplicados');
    }
    else{
      alert('Elija a un médico');
    }
  }

  AddPaciente(){
    console.log(this.forms);
    const datos = JSON.parse(JSON.stringify(this.forms.value));

    this.pacienteService.postData(datos)
    .subscribe(()=>{
      this.anadido.emit(true)
      this.forms.reset();
    });
    console.log('Enviando datos desde el forms');
  }
}
