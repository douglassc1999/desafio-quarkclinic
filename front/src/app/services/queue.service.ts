import { Queue } from './../model/queue.model';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:3001/queue'

  onMessage(msg: string): void {
    console.log(msg)
  }

  // GET DE FILAS DO BACKEND
  getQueues(): Observable<Queue[]> {
    return this.http.get<Queue[]>(this.baseUrl)
  }
}
