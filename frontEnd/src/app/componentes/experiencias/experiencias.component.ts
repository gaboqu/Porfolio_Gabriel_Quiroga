import { Component } from '@angular/core';
// import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent {
  experienciasList:any;
//   constructor(private datosPorfolio:PorfolioService){}

//   ngOnInit(): void{
//     this.datosPorfolio.obtenerDatos().subscribe(data =>{
// //      console.log(data)
//       this.experienciasList=data.experiencias;
//     });
//   }

}
