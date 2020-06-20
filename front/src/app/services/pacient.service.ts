import { Position } from './../model/dto/position.dto';
import { Pacient } from './../model/pacient.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientService {

  baseUrl = 'http://localhost:9000/pacients'

  constructor(private http: HttpClient) { }

  getPacient(filter: string): Observable<Pacient> {
    const url = `${this.baseUrl}/${filter}`
    return this.http.get<Pacient>(url)
  }

  addPacienteInQueue(prefix: string, prefer: string): Observable<Position> {
    const url = `${this.baseUrl}?prefix=${prefix}&prefer=${prefer}`
    return this.http.get<Position>(url)
  }

}
