import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  hideModal = signal(true);
  
  datamodaltoggle(){
    this.hideModal.update(prevState=> !prevState);
  }
}
