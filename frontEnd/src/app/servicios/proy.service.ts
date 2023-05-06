import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProyService {

  constructor(private http: HttpClient) {}

  proyec(): Observable<any> {
    return this.http.get('http://localhost:8080/proyectos');
    
  }

}