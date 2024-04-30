import { Component, OnInit } from '@angular/core';
import { PacienteInterface } from '../../domine/shared/paciente/paciente';
import { PacienteService } from '../../services/paciente.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MedicosService } from '../../services/medicos.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrl: './pacientes.component.css'
})
export class PacientesComponent implements OnInit{
  paciente: PacienteInterface[] = [];
  forms: FormGroup;
  labelBuuton: string = 'Actualizar Usuario'

  constructor( private fb: FormBuilder, private pacienteServie: PacienteService){
    //Inicializamos los valores en el constructor

     this.forms = this.fb.group({
       numero_historial: (''),
       nombre: (''),
       apellido: (''),
       cedula: (''),
       telefono: ('')
     })
  }


  getPaciente(){
    this.pacienteServie.getPaciente().subscribe(data=>{
      this.paciente = data.data;
      console.log(this.paciente); 
    });
  }

  
  actualizarPaciente(index: number){
    //Colocamos los datos según el index en el formulario
    this.forms.patchValue(this.paciente[index]);
    this.labelBuuton = 'Actualizar'
  }
  GuardarCambios(){
    if(this.labelBuuton == 'Actualizar'){
      this.pacienteServie.putData(this.forms.value).pipe(finalize(()=>this.getPaciente())).subscribe();
      alert('Cambiados aplicados')
      this.forms.reset();
    }
    if(this.labelBuuton != 'Actualizar'){
      alert('Error, eliga a un paciente')
    }
  }
   
  ngOnInit(): void {
    this.getPaciente();
  }
}
