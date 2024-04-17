import { Component, OnInit } from '@angular/core';
import { PacienteInterface } from '../../response/paciente';
import { PacienteService } from '../../services/paciente.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent implements OnInit{
  paciente: PacienteInterface[] = [];
  forms: FormGroup;

  constructor(private pacienteServie: PacienteService, private fb: FormBuilder){
    //Inicializamos los valores en el constructor
    this.forms = fb.group({
      numHistorial: (''),
      nombre: (''),
      apellido: (''),
      cedula: (''),
      telefono: ('')
    })
  }

  ngOnInit(): void {
    this.getPaciente();
  }

  getPaciente(){
    this.pacienteServie.getPaciente().subscribe(data=>{
      this.paciente = data.data;
      console.log(this.paciente);
    });
  }
}
