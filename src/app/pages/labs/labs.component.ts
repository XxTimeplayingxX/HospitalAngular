import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  colorCtrl = new FormControl();

  constructor(){
    this.colorCtrl.valueChanges.subscribe(value=>{
      console.log(value);
    });
  }
}
