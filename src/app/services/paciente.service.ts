import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PacienteInterface } from '../domine/shared/paciente/paciente';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class PacienteService {
  constructor(private httpCliente: HttpClient) {}

  getPaciente(): Observable<any> {
    return this.httpCliente.get<any>(`${environment.API_URL}Paciente`);
  }

  putData(paciente: PacienteInterface): Observable<any> {
    return this.httpCliente.put(
      `${environment.API_URL}Paciente?cedula=${paciente.cedula}&nombre=${paciente.nombre}&apellido=${paciente.apellido}&telefono=${paciente.telefono}&correo=${paciente.correo}&numHistorial=${paciente.numero_historial}`,
      {}
    );
  }

  postData(paciente: PacienteInterface): Observable<any> {
    return this.httpCliente.post(
      `${environment.API_URL}Paciente?nombre=${paciente.nombre}%20&apellido=${paciente.apellido}&cedula=${paciente.cedula}&telefono=${paciente.telefono}&correo=${paciente.correo}&numeroHistorial=${paciente.numero_historial}`,
      {}
    );
  }

  DeleteData(paciente: PacienteInterface): Observable<any> {
    return this.httpCliente.delete(
      `${environment.API_URL}Paciente/${paciente.cedula}?cedula=${paciente.cedula}`,
      {}
    );
  }
}


    // const params = new HttpParams()
    //   .set('numero_historial', paciente.numero_historial)
    //   .set('nombre', paciente.nombre)
    //   .set('apellido', paciente.apellido)
    //   .set('cedula', paciente.cedula)
    //   .set('telefono', paciente.telefono)
    //   .set('correo', paciente.correo);
