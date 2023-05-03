import { Component } from '@angular/core';
// import { PorfolioService } from 'src/app/servicios/porfolio.service';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skillsList:any;
//   constructor(private datosPorfolio:PorfolioService){}

//   ngOnInit(): void{
//     this.datosPorfolio.obtenerDatos().subscribe(data =>{
// //      console.log(data)
//       this.skillsList=data.skills; 
//     });
//   }

}


