import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {
  private myAppUrl = 'https://localhost:7247/'
  private myApiUrl = 'api/medico/'


  constructor(private http: HttpClient) { }

  getListMedicos(): Observable<any>{
    return this.http.get(this.myAppUrl + this.myApiUrl)
  }
}
