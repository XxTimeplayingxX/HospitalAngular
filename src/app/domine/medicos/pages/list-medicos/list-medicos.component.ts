import { Component } from '@angular/core';

@Component({
  selector: 'app-list-medicos',
  templateUrl: './list-medicos.component.html',
  styleUrl: './list-medicos.component.css'
})
export class ListMedicosComponent {
  constructor(){
    console.log('Buenas noches');
  }
}
