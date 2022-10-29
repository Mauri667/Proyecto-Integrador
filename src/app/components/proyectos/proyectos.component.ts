import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos/proyectos.service';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos : Proyectos[] = []

  constructor(private ProyectosService:ProyectosService, private tokenService:TokenService) { }

  isLogged=false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }
  cargarProyecto():void {
    this.ProyectosService.lista().subscribe(data => { this.proyectos = data; })
  }



  delete(id?: number) {
    if (id != undefined) {
      this.ProyectosService.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
