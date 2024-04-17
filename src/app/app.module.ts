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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListMedicosComponent,
    LabsComponent,
    PacientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
