import { Pacient } from './../model/pacient.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientService {

  baseUrl = 'http://localhost:3001/pacient'

  constructor(private http: HttpClient) { }

  getPacient(filter: string): Observable<Pacient> {
    const url = `${this.baseUrl}/${filter}`
    return this.http.get<Pacient>(url)
  }

}
