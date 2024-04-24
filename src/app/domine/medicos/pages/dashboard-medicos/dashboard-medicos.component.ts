import { Component } from '@angular/core';
import { ListMedicos } from './../../../shared/medico/medico';
import { MedicosService } from '../../../../services/medicos.service';

@Component({
  selector: 'app-dashboard-medicos',
  templateUrl: './dashboard-medicos.component.html',
  styleUrl: './dashboard-medicos.component.css'
})
export class DashboardMedicosComponent {
  medico = <ListMedicos[]>([]);
  dataMedico : ListMedicos | null = null;

  constructor(private medicoService: MedicosService){ }

  fromChild(event: ListMedicos){
    this.dataMedico = event;
    console.log('Estamos en Form');
    console.log(event)
  }
  getData(){
    this.medicoService.getData().subscribe(data=>{
      this.medico = data.data;
      console.log(this.medico);
     });
  }
  ngOnInit(): void{
    this.getData();
  }
}
