import { Component,OnInit } from '@angular/core';
import { listMedicos } from '../../response/models.listMedicos';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import {MedicosService } from './../../services/medicos.service'

@Component({
  selector: 'app-list-medicos',
  templateUrl: './list-medicos.component.html',
  styleUrl: './list-medicos.component.css'
})
  export class ListMedicosComponent implements OnInit{
    medico: listMedicos[] = [];
    listMedico = <listMedicos[]>[
    ]
    forms: FormGroup;
    constructor(private fb: FormBuilder, private medicoService: MedicosService){
      this.forms = this.fb.group({
        name: (''),
        apellido: (''),
        cedula: (''),
        telefono: (''),
        especialidad: (''),
        cargo: ('')
      })
    }
    
    agregarMedico(){
      console.log(this.forms);

      const medico: any= this.forms.value;
      this.listMedico.push(medico);
    }
    ngOnInit(): void {
      this.medicoService.getData().subscribe(data=>{
        this.medico = data.map(medicoData=>{
          return{
            name: medicoData.nameProperty,
            apellido: medicoData.nameProperty,
            cedula: medicoData.nameProperty,
            telefono: medicoData.nameProperty,
            especialidad: medicoData.nameProperty,
            cargo: medicoData.nameProperty
          };
        })
      })
    }
  }
