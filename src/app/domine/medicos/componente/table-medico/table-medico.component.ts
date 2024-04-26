import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
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

  @Input() resp!: boolean;
  @Output() medicoIndex = new EventEmitter(); 

  constructor(private medicoService: MedicosService){ }
  ngOnChanges(changes: SimpleChanges){
    console.log('Estamos en la table');
    const dataTable = changes['resp'];
    if(dataTable){
      this.getData();
    }
  }
  refreshData(){
    if(this.resp){
      console.log('Estamos en Table')
      this.getData();
    }
  }

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
  
}
