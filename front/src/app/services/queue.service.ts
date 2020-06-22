import { Queue } from '../models/queue.model';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:9000/queues'
  // baseUrl = 'https://desafio-quarkclinic.herokuapp.com/queues'

  onMessage(msg: string): void {
    console.log(msg)
  }

  // GET DE FILAS DO BACKEND
  getQueues(): Observable<Queue[]> {
    return this.http.get<Queue[]>(this.baseUrl)
  }
}
