import { Component } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent{ 
  persona: persona = new persona("", "", "", "","");

  constructor(public personaService: PersonaService) { }


  // name:any; Esto iba
  // miPorfolio:any;
  // constructor(private datosPorfolio:PorfolioService){}

  /*
  ////////////////////////////////
  TODO: Est tmb anda

  constructor(private http: HttpClient){

  }
  /////////////////////////////////
  */

  ngOnInit(): void{

    this.personaService.getPersona().subscribe(data => {this.persona = data});
    //////////////////////////////////////////////////////////////////////////////
    /* 
    TODO: Esto anda!
    */

    // this.http.get("http://localhost:8080/persona/1").subscribe((data:any) => {
    //   console.log(data);
    //   this.name = data;
      
    // })

    ///////////////////////////////////////////////////////////////////////////////

  //   this.datosPorfolio.obtenerDatos().subscribe(data =>{
  //     console.log(data)
  //     this.miPorfolio=data;
  //   });
  }
  
}
