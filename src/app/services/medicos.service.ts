import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchAll } from 'rxjs';
import { ListMedicos } from '../response/models.listMedicos';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { UrlHandlingStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private http:HttpClient) { }
  getData(): Observable<any>{
    const url = 'https://localhost:7107/api/';
    return this.http.get<any>(`${url}Medico`);
  }


  putData(medico:ListMedicos): Observable<any>{
    //Crea los parametros del api
    const params = new HttpParams()
    .set('cedula', medico.cedula)
    .set('nombre', medico.nombre)
    .set('apellido', medico.apellido)
    .set('telefono', medico.telefono)
    .set('correo', medico?.correo??'juan%40gmail.com')
    .set('especialidad', medico.especialidad)
    .set('cargo', medico.cargo)

    const url = 'https://localhost:7107/api/';
    return this.http.put<any>(`https://localhost:7107/api/Medico?cedula=${medico.cedula}&nombre=${medico.nombre}&apellido=${medico.apellido}&telefono=${medico.telefono}&correo=juan%40gmail.com&espcialidad=${medico.especialidad}&cargo=${medico.cargo}`, {});
  }
  postData(medico:ListMedicos): Observable<any>{
    const url = 'https://localhost:7107/api/';
    return this.http.post<any>(`${url}Medico`, medico)
  }
}




