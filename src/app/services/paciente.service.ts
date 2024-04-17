import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  API_URL: string = 'https://localhost:7107/api/'

  constructor(private httpCliente: HttpClient) { }
  getPaciente() : Observable<any>{
    return this.httpCliente.get(`${this.API_URL}Paciente`)
  }
}
