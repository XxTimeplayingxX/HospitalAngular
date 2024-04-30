import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PacienteInterface } from '../domine/shared/paciente/paciente';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  API_URL: string = 'http://10.10.80.96:5042/api/'

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

    return this.httpCliente.put(`http://10.10.80.96:5042/api/Paciente?cedula=${paciente.cedula}&nombre=${paciente.nombre}&apellido=${paciente.apellido}&telefono=${paciente.telefono}&correo=${paciente.correo}&numHistorial=${paciente.numero_historial}`, {})
  }

  postData(paciente: PacienteInterface) : Observable<any>{
    const params = new HttpParams()
    .set('numero_historial', paciente.numero_historial)
    .set('nombre', paciente.nombre)
    .set('apellido', paciente.apellido)
    .set('cedula', paciente.cedula)
    .set('telefono', paciente.telefono)
    .set('correo', paciente.correo)

    return this.httpCliente.post(`http://10.10.80.96:5042/api/Paciente?nombre=${paciente.nombre}%20&apellido=${paciente.apellido}&cedula=${paciente.cedula}&telefono=${paciente.telefono}&correo=${paciente.correo}&numeroHistorial=${paciente.numero_historial}`, {})
  }

  DeleteData(paciente:PacienteInterface) : Observable<any>{
    console.log('Llego el paciente: ' + paciente)
    const params = new HttpParams()
    .set('cedula', paciente.cedula)

    return this.httpCliente.delete(`http://10.10.80.96:5042/api/Paciente/${paciente.cedula}?cedula=${paciente.cedula}`, {});
  }
  //https://localhost:7107/api/Paciente/0954168282?cedula=0954168282
}
