import { Component } from '@angular/core';
import { ExpService } from 'src/app/servicios/exp.service';
// import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css'],
})
export class ExperienciasComponent {
  constructor(private expService: ExpService) {}

  exp: any;

  //  experienciasList:any;
  //   constructor(private datosPorfolio:PorfolioService){}

  ngOnInit(): void {
    this.expService.exper().subscribe((data) => {
      this.exp = data;
      console.log(this.exp);
    });

    //     this.datosPorfolio.obtenerDatos().subscribe(data =>{
    // //      console.log(data)
    //       this.experienciasList=data.experiencias;
    //     });
  }
}
