import { Component } from '@angular/core';
import { listMedicos } from './../../models/models.listMedicos';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-medicos',
  templateUrl: './list-medicos.component.html',
  styleUrl: './list-medicos.component.css'
})
export class ListMedicosComponent {
  listMedico = <listMedicos[]>[
    {
      imagen: 'https://images.ecestaticos.com/ciN9hN7qsu5JOcrGdMngWhCHs8Y=/0x70:1716x1040/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F8db%2F8b6%2Faa5%2F8db8b6aa54b585253e15f79a68447aeb.jpg',
      name: 'David',
      apellido: 'Sánchez',
      cedula: '0954168282',
      telefono: '0998907153',
      especialidad: 'Cirujia',
      cargo: 'Supervisor'
    },
    {
      imagen: 'https://udv.edu.gt/wp-content/uploads/2019/11/New-Project-90.jpg',
      name: 'Juan',
      apellido: 'Roberto',
      cedula: '0954809087',
      telefono: '0992167358',
      especialidad: 'Odontología',
      cargo: 'Auxiliar'
    }
  ]
  forms: FormGroup;
  constructor(private fb: FormBuilder){
    this.forms = this.fb.group({
      imagen: (''),
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
    const medico: any={
      imagen: this.forms.get('imagen')?.value,
      name: this.forms.get('name')?.value,
      apellido: this.forms.get('apellido')?.value,
      cedula: this.forms.get('cedula')?.value,
      telefono: this.forms.get('telefono')?.value,
      especialidad: this.forms.get('especialidad')?.value,
      cargo: this.forms.get('cargo')?.value
    }
    this.listMedico.push(medico);
  }
}

