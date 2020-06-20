import { PacientDTO } from './../models/dto/pacient.dto';
import { Position } from '../models/dto/position.dto';
import { Pacient } from '../models/pacient.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacientService {

  baseUrl = 'http://localhost:9000/pacients'

  constructor(private http: HttpClient) { }

  getPacient(pacientDTO: PacientDTO): Observable<Pacient> {
    const url = `${this.baseUrl}`
    return this.http.post<Pacient>(url, pacientDTO)
  }

  addPacienteInQueue(prefix: string, prefer: string): Observable<Position> {
    const url = `${this.baseUrl}?prefix=${prefix}&prefer=${prefer}`
    return this.http.get<Position>(url)
  }

}
