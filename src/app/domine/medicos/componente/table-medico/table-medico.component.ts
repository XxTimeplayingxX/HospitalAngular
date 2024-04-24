import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListMedicos } from '../../../shared/medico/medico';
import { MedicosService } from '../../../../services/medicos.service';

@Component({
  selector: 'app-table-medico',
  templateUrl: './table-medico.component.html',
  styleUrl: './table-medico.component.css'
})
export class TableMedicoComponent {
  // @Input({required: true}) medicoList!: ListMedicos;
  medico = <ListMedicos[]>([]);

  @Output() medicoIndex = new EventEmitter(); 

  constructor(private medicoService: MedicosService){ }

  medicoData(index: number){
    this.medicoIndex.emit(this.medico[index]);
    console.log('Se manda el siguiente médico: ' + this.medico[index]);
  }

  //API methods
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
