import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormMedicoComponent } from '../../../medicos/componente/form-medico/form-medico.component';
import { FormPacienteComponent } from '../../components/form-paciente/form-paciente.component';
import { PacienteInterface } from '../../../shared/paciente/paciente';
import { every } from 'rxjs';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';

@Component({
  selector: 'app-list-pacientes',
  templateUrl: './list-pacientes.component.html',
  styleUrl: './list-pacientes.component.css'
})
export class ListPacientesComponent implements AfterViewInit{
  @ViewChild(DashboardComponent) dashPaciente!: DashboardComponent;

  paciente = <PacienteInterface[]>([]);
  dataPaciente : PacienteInterface | null = null;

  ngAfterViewInit(): void {
    console.log('Estamos en el PADRE');
    this.dashPaciente.getPaciente();
  }

  fromChild($event: PacienteInterface){
    this.dataPaciente = $event;
    console.log('Estamos en el padre, enviando: ' + this.dataPaciente)
  }

  refreshData(){
    console.log('Estamos en el padre y vamos a ejecutar el método de actualizar')
    this.dashPaciente.getPaciente();
  }
}
