import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona/persona.service';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  persona: persona = new persona('', '', '', '', '','');


  constructor(public personaService: PersonaService, private tokenService: TokenService) { }

  isLogged = false;
  
  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarPersona(): void {
    this.personaService.getPersona().subscribe(data => { this.persona = data })
  }

}
