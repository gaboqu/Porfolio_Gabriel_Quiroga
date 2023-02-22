import { Component } from '@angular/core';
import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {
  constructor(private datosPorfolio:PorfolioService){}

  ngOnInit(): void{
    this.datosPorfolio.obtenerDatos();
  }
}
