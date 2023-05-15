import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';


@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent{

  [x: string]: any; 
  isLogged= false;


  constructor(private personaService: PersonaService, private tokenService: TokenService, private router:Router) { }

  persona: any;
  

  ngOnInit(): void{

    this.personaService.person().subscribe(data => {
      this.persona = data;
  
    });

    if(this.tokenService.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged = false;
    }}

    onLogOut():void{
      this.tokenService.logOut();
      window.location.reload();
    }

    login(){
      this.router.navigate(['/login'])
    }

  
  }
