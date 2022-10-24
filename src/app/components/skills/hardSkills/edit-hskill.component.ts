import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hskills } from 'src/app/model/hskills';
import { HSkillsService } from 'src/app/servicios/skills/Hskills.service';

@Component({
  selector: 'app-edit-hskill',
  templateUrl: './edit-hskill.component.html',
  styleUrls: ['./edit-hskill.component.css']
})
export class EditHskillComponent implements OnInit {

  hskill : Hskills = null;

  constructor(private hskillService:HSkillsService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.hskillService.detail(id).subscribe(
      data =>{
        this.hskill = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.hskillService.update(id, this.hskill).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

}
