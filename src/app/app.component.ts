import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularHospital';
  hideSideMenu = signal(true);
  //@Input({required: true}) cart: Product[] = []
  total = signal(0);
  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState)
  }

  // calcularTotal(){
  //   return this.cart.reduce((total, producto)=>total + producto.price, 0);
  // }
}

