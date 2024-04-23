import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { ListMedicosComponent } from './pages/list-medicos/list-medicos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient,HttpClientModule } from '@angular/common/http';
import { LabsComponent } from './pages/labs/labs.component';
import { PacientesComponent } from './pages/pacientes/pacientes.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggle } from '@angular/material/slide-toggle'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListMedicosComponent,
    LabsComponent,
    PacientesComponent,
    SideBarComponent,
    
  ],
  imports: [
    SharedModule,
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
