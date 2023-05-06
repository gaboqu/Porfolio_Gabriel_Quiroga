import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { exp } from '../model/exp.model';

@Injectable({
  providedIn: 'root',
})
export class ExpService {
  // URL = 'http://localhost:8080/persona/1';

  constructor(private http: HttpClient) {}

  exper(): Observable<any> {
    return this.http.get('http://localhost:8080/experiencias');
    console.log(exp);
  }

  // public getPersona(): Observable<persona> {
  //   return this.http.get<persona>(this.URL)
  // }
}
