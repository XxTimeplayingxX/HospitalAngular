import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges, output } from '@angular/core';
import { MedicoInterface } from './../../../shared/medico/medico';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MedicosService } from '../../../../services/medicos.service';
import { finalize } from 'rxjs';
import { ɵvalidateWebAnimatableStyleProperty } from '@angular/animations/browser';

@Component({
  selector: 'app-form-medico',
  templateUrl: './form-medico.component.html',
  styleUrl: './form-medico.component.css'
})

export class FormMedicoComponent implements  OnChanges{
  medico: MedicoInterface[] = [];
  forms: FormGroup;
  labelButton : string = 'Actualizar Médico';
  labelAddMedico : string = 'Añadir Médico';
  //Input
  @Input() dataMedico: MedicoInterface | null = null;
  //Output
  @Output() actualizado = new EventEmitter();
  @Output() anadido = new EventEmitter();
  

  constructor(private fb: FormBuilder, private medicoService: MedicosService){
    this.forms = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      cedula: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      especialidad: ['', Validators.required],
      cargo: ['', Validators.required]
    })
  }
  ngOnChanges(changes: SimpleChanges){
    console.log(changes['dataMedico']);
    const dataForm = changes['dataMedico'];
    if(dataForm){
      this.forms.patchValue(dataForm.currentValue);
    }
  }

  fromChild(event: MedicoInterface){
    console.log('Estamos en Form');
    console.log(event)
  }


  updateMedico(){
    if(this.dataMedico){
      this.medicoService.putData(this.forms.value)
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
  addMedico(){
    console.log(this.forms);
    const datos = JSON.parse(JSON.stringify(this.forms.value));

    this.medicoService.postData(datos)
    .subscribe(()=>{
      this.anadido.emit(true)
      this.forms.reset();
    });
    console.log('Enviando datos desde el forms');
  }
  
}
