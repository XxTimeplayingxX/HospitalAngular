import { AfterViewInit, Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { ListMedicos } from './../../../shared/medico/medico';
import { MedicosService } from '../../../../services/medicos.service';
import { TableMedicoComponent } from '../../componente/table-medico/table-medico.component';

@Component({
  selector: 'app-dashboard-medicos',
  templateUrl: './dashboard-medicos.component.html',
  styleUrl: './dashboard-medicos.component.css'
})
export class DashboardMedicosComponent implements AfterViewInit {
  @ViewChild(TableMedicoComponent) tbMedico!:TableMedicoComponent;

  medico = <ListMedicos[]>([]);
  dataMedico : ListMedicos | null = null;
  response : boolean = false;


  constructor(private medicoService: MedicosService){ }

  ngAfterViewInit(){
    this.tbMedico.resp = true;
    console.log('Mandando respondes desde el padre: ' +this.tbMedico.resp);
    console.log('Ejecutando el método de refrescar');
   this.tbMedico.refreshData();
  }

  fromChild(event: ListMedicos){
    this.dataMedico = event;
    console.log('Estamos en Form');
    console.log(event)
  }
  refreshData(){
    this.tbMedico.refreshData();
  }

  recibirAct(event: boolean){
    this.response = event;
    console.log('Estamos en el Padre, se recibió la resp: ' + this.response);
  }
}
