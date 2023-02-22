import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PorfolioService {

  constructor() { }

  obtenerDatos(){
    console.log("el servicio Porfolio está corriendo")
  }
}
