import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicoInterface } from '../domine/shared/medico/medico';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class MedicosService {
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}Medico`);
  }

  putData(medico: MedicoInterface): Observable<any> {
    return this.http.put<any>(
      `${environment.API_URL}Medico?cedula=${medico.cedula}&nombre=${medico.nombre}&apellido=${medico.apellido}&telefono=${medico.telefono}&correo=${medico.correo}&espcialidad=${medico.especialidad}&cargo=${medico.cargo}`,
      {}
    );
  }
  postData(medico: MedicoInterface): Observable<any> {
    return this.http.post<any>(
      `${environment.API_URL}Medico?cedula=${medico.cedula}&nombre=${medico.nombre}&apellido=${medico.apellido}&telefono=${medico.telefono}&correo=${medico.correo}&especialidad=${medico.especialidad}&cargo=${medico.cargo}`,
      {}
    );
  }
  LogicDelete(medico: MedicoInterface): Observable<any> {
    return this.http.delete<any>(
      `${environment.API_URL}Medico/${medico.cedula}?cedula=${medico.cedula}`,
      {}
    );
  }
}

// const params = new HttpParams()
// .set('cedula', medico.cedula)
// .set('nombre', medico.nombre)
// .set('apellido', medico.apellido)
// .set('telefono', medico.telefono)
// .set('correo', medico.correo)
// .set('especialidad', medico.especialidad)
// .set('cargo', medico.cargo)
