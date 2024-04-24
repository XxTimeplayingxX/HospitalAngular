import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSideMenu = signal(true);
  //@Input({required: true}) cart: Product[] = []
  total = signal(0);
  toogleSideMenu(){
    this.hideSideMenu.update(prevState => !prevState)
  }
}
