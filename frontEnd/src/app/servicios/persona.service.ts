import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  // URL = 'http://localhost:8080/persona/1';

  constructor(private http: HttpClient) {}

  person(): Observable<any> {
    return this.http.get('http://localhost:8080/persona');
    console.log(persona);
  }

  // public getPersona(): Observable<persona> {
  //   return this.http.get<persona>(this.URL)
  // }
}
