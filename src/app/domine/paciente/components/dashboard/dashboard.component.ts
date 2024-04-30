import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PacienteInterface } from '../../../shared/paciente/paciente';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PacienteService } from '../../../../services/paciente.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  @Output() sendToFather = new EventEmitter;

  paciente: PacienteInterface[] = [];

  constructor( private pacienteService: PacienteService){ }

  ngOnInit(): void {
    this.getPaciente();
  }

  getPaciente(){
    console.log('Estamos en Table, GET')
    this.pacienteService.getPaciente().subscribe(data=>{
      this.paciente = data.data;
      console.log(this.paciente);
    })
  }

  //Métodos de Envio
  pacienteData(index:number){
    var pacienteEnviado;
    this.sendToFather.emit(this.paciente[index]);
    pacienteEnviado = this.paciente[index];
    console.log('Se manda el siguiente paciente: ' + pacienteEnviado.cedula)
  }
  deleteData(index:number){
    const response = confirm('Seguro que quiere eliminar');

    console.log(response);

    if(response){
      var pacienteAEliminar = this.paciente[index].cedula;
      console.log(pacienteAEliminar);
      this.pacienteService.DeleteData(this.paciente[index])
      .subscribe(()=>{
      console.log('Usuario eliminado');
      this.getPaciente();
    });
    }
  }
  
  
  
}
