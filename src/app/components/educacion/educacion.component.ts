import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/eduacion/educacion.service';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  edu: Educacion[] = [];

  constructor(private EducacionService: EducacionService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion():void{
    this.EducacionService.lista().subscribe(data => {this.edu = data;})
  }

  delete(id?: number) {
    if (id != undefined) {
      this.EducacionService.delete(id).subscribe(
        data => {
          this.cargarEducacion();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}
