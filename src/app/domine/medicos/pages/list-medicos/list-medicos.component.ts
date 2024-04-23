import { Component, signal } from '@angular/core';
import { ListMedicos } from '../../../../response/models.listMedicos';
import { MedicosService } from '../../../../services/medicos.service';

@Component({
  selector: 'app-list-medicos',
  templateUrl: './list-medicos.component.html',
  styleUrl: './list-medicos.component.css'
})
export class ListMedicosComponent {

  medico = <ListMedicos[]>([]);

  constructor(private medicoService: MedicosService){ }

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
