import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/Experiencia.model';
import { ExperienciaService } from 'src/app/servicios/Experiencia/experiencia.service';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(private ExperienciaService: ExperienciaService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }
  cargarExperiencia():void {
    this.ExperienciaService.lista().subscribe(data => { this.expe = data; })
  }



  delete(id?: number) {
    if (id != undefined) {
      this.ExperienciaService.delete(id).subscribe(
        data => {
          this.cargarExperiencia();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}