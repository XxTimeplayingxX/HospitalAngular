import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchAll } from 'rxjs';
import { listMedicos } from '../response/models.listMedicos';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private http:HttpClient) { }
  getData(): Observable<any>{
    const url = 'https://localhost:7107/api/';
    return this.http.get<any>(`${url}Medico`);
  }
}

