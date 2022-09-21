import { Component, OnInit } from '@angular/core';
import { EducacionService } from 'src/app/servicios/eduacion/educacion.service';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  nombreEdu: string = '';
  descripcionEdu: string = '';
  fechaEdu: string = '';
  imagenEdu: string = '';

  
  constructor(private EducacionService: EducacionService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const edu = new Educacion(this.nombreEdu, this.descripcionEdu,  this.fechaEdu, this.imagenEdu);
    this.EducacionService.save(edu).subscribe(
      data => {
        alert("Educación añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
