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
  nombreH: string = '';
  porcentajeH: number;

  constructor(private hskillService: HSkillsService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hskill = new Hskills(this.nombreH, this.porcentajeH);
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
