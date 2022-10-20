import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills/skills.service';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  skill: Skills[] = [];

  constructor(private SkillsService:SkillsService, private tokenService:TokenService) { }

  isLogged=false;

  ngOnInit(): void {
    this.cargarSkill();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkill():void{
    this.SkillsService.lista().subscribe(data => {this.skill = data;})
  }

  delete(id?: number) {
    if (id != undefined) {
      this.SkillsService.delete(id).subscribe(
        data => {
          this.cargarSkill();
        }, err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }
}
