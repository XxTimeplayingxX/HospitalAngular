import { Component,Input,OnInit, signal } from '@angular/core';
import { ListMedicos } from '../../response/models.listMedicos';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { Observable, finalize } from 'rxjs';
import {MedicosService } from './../../services/medicos.service'

@Component({
  selector: 'app-list-medicos',
  templateUrl: './list-medicos.component.html',
  styleUrl: './list-medicos.component.css'
})
  export class ListMedicosComponent implements OnInit{
    hideSideMenu = signal(true);
  @Input({required: true}) cart: ListMedicos[] = []

  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState)
  }
    
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
    
    actualizarMedico(index:number){
      //los datos de un objeto lo colo
      this.forms.patchValue(this.medico[index]);
      this.labelButton = 'Actualizar';
    }
    safeData(){
      if(this.labelButton == 'Actualizar'){
        this.medicoService.putData(this.forms.value).pipe(
          finalize(()=>this.getData())).subscribe();
      }
    }
    getData(){
      this.medicoService.getData().subscribe(data=>{
        this.medico = data.data;
        console.log(this.medico);
       });
    }
    postData(){
      this.medicoService.postData(this.forms.value).pipe(finalize(()=>this.getData())).subscribe();
    }
     ngOnInit(): void {
       this.getData();
      }
    }
  
