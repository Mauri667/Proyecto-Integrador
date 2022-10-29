import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hskills } from 'src/app/model/hskills';
import { HSkillsService } from 'src/app/servicios/skills/Hskills.service';

@Component({
  selector: 'app-new-hskill',
  templateUrl: './new-hskill.component.html',
  styleUrls: ['./new-hskill.component.css']
})
export class NewHskillComponent implements OnInit {
  nombre: string = '';
  porcentaje: number;

  constructor(private hskillService: HSkillsService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hskill = new Hskills(this.nombre, this.porcentaje);
    this.hskillService.save(hskill).subscribe(
      data => {
        alert("Skill añadida");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
  }
}
