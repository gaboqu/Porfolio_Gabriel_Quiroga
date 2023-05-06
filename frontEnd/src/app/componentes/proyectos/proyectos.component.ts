import { Component } from '@angular/core';
import { ProyService } from 'src/app/servicios/proy.service';
// import { PorfolioService } from 'src/app/servicios/porfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent {
  
   constructor(private proyService : ProyService){}

   proyectos : any;
   
   ngOnInit(): void{
      this.proyService.proyec().subscribe((data)=> { 
        this.proyectos = data;
      });
   }



}
