import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [],
  exports:[CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggle,
    MatButtonModule,
    MatIconModule, 
    MatSidenavModule,
    MatToolbarModule,
    MatListModule],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatSlideToggle,
    MatButtonModule,
    MatIconModule, 
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ]
})
export class SharedModule { }
