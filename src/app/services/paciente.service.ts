import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PacienteInterface } from '../response/paciente';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  API_URL: string = 'https://localhost:7107/api/'

  constructor(private httpCliente: HttpClient) { }

  getPaciente() : Observable<any>{
    return this.httpCliente.get(`${this.API_URL}Paciente`)
  }
  putData(paciente:PacienteInterface) : Observable<any>{

    const params = new HttpParams()
    .set('num_historial', paciente.numero_historial)
    .set('nombre', paciente.nombre)
    .set('apellido', paciente.apellido)
    .set('cedula', paciente.cedula)
    .set('telefono', paciente.telefono)
    .set('correo', paciente?.correo??'juan%40gmail.com')

    return this.httpCliente.put(`https://localhost:7107/api/Paciente?cedula=${paciente.cedula}&nombre=${paciente.nombre}&apellido=${paciente.apellido}&telefono=${paciente.telefono}&correo=${paciente.correo}&numHistorial=${paciente.numero_historial}`, {})
  }
  //https://localhost:7107/api/Paciente?cedula=0954168282&nombre=Juan&apellido=S%C3%A1nchez&telefono=0998907153&correo=david%40gmail.com&numHistorial=8001
}
