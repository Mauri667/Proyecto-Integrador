import { Component, OnInit } from '@angular/core';
import { Hskills } from 'src/app/model/hskills';
import { HSkillsService } from 'src/app/servicios/skills/Hskills.service';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.css']
})
export class HardSkillsComponent implements OnInit {
  hskill: Hskills[] = [];

  constructor(private HSkillsService:HSkillsService, private tokenService:TokenService) { }

  isLogged=false;

  ngOnInit(): void {
    this.cargarHSkill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarHSkill():void{
    this.HSkillsService.lista().subscribe(data => {this.hskill = data;})
  }

  delete(id?: number) {
    if (id != undefined) {
      this.HSkillsService.delete(id).subscribe(
        data => {
          this.cargarHSkill();
        }, err => {
          alert("No se pudo borrar");
        }
      )
    }
  }
}
