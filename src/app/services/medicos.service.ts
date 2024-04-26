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
    .set('correo', medico.correo)
    .set('especialidad', medico.especialidad)
    .set('cargo', medico.cargo)

    const url = 'https://localhost:7107/api/';
    return this.http.put<any>(`https://localhost:7107/api/Medico?cedula=${medico.cedula}&nombre=${medico.nombre}&apellido=${medico.apellido}&telefono=${medico.telefono}&correo=${medico.correo}&espcialidad=${medico.especialidad}&cargo=${medico.cargo}`, {});
  }
  postData(medico:ListMedicos): Observable<any>{
    //Crea los parametros del api
    const params = new HttpParams()
    .set('cedula', medico.cedula)
    .set('nombre', medico.nombre)
    .set('apellido', medico.apellido)
    .set('telefono', medico.telefono)
    .set('correo', medico.correo)
    .set('especialidad', medico.especialidad)
    .set('cargo', medico.cargo)

    
    return this.http.post<any>(`https://localhost:7107/api/Medico?cedula=${medico.cedula}&nombre=${medico.nombre}&apellido=${medico.apellido}&telefono=${medico.telefono}&correo=${medico.correo}&especialidad=${medico.especialidad}&cargo=${medico.cargo}`, {});
    
    //http://https//localhost:7107/api/Medico?cedula=0989787719&nombre=Juan&apellido=Piguave&telefono=0978568112&correo=jpiguave%40gmail.com&especialidad=Veterinario&cargo=auxiliar

    //https://localhost:7107/api/Medico?cedula=0989787719&nombre=Juan&apellido=Piguave&telefono=0978568112&correo=jpiguave%40gmail.com&especialidad=Veterinario&cargo=auxiliar
    
  }
  LogicDelete(medico:ListMedicos): Observable<any>{
    const param = new HttpParams()
    .set('cedula', medico.cedula)

    return this.http.delete<any>(`https://localhost:7107/api/Medico/${medico.cedula}?cedula=${medico.cedula}`, {});
  }
}




