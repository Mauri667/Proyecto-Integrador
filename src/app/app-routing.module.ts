import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercadeComponent } from './components/acerca-de/edit-acercade.component';
import { EditBannerComponent } from './components/banner/edit-banner.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { EditHskillComponent } from './components/skills/hardSkills/edit-hskill.component';
import { NewHskillComponent } from './components/skills/hardSkills/new-hskill.component';
import { EditSkillComponent } from './components/skills/softSkills/edit-skill.component';
import { NewSkillComponent } from './components/skills/softSkills/new-skill.component';

const routes: Routes = [
  {path: 'portfolio', component:PortfolioComponent},
  {path:'iniciar-sesion',component:IniciarSesionComponent},
  {path:'',redirectTo:'portfolio',pathMatch:'full'},
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  {path: 'nuevaedu', component: NewEducacionComponent},
  {path: 'editedu/:id',component: EditeducacionComponent},
  {path: 'editbanner/:id', component: EditBannerComponent},
  {path: 'editacercade/:id', component: EditAcercadeComponent},
  {path:'nuevahards', component: NewHskillComponent},
  {path: 'nuevasofts',component:NewSkillComponent},
  {path: 'ediths/:id', component:EditHskillComponent},
  {path: 'editss/:id',component:EditSkillComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
