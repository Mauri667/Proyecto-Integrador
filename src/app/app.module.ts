import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './components/skills/softSkills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './servicios/interceptor-service';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EditeducacionComponent } from './components/educacion/editeducacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditBannerComponent } from './components/banner/edit-banner.component';
import { EditAcercadeComponent } from './components/acerca-de/edit-acercade.component';
import { HardSkillsComponent } from './components/skills/hardSkills/hard-skills.component';
import { NewSkillComponent } from './components/skills/softSkills/new-skill.component';
import { EditSkillComponent } from './components/skills/softSkills/edit-skill.component';
import { NewHskillComponent } from './components/skills/hardSkills/new-hskill.component';
import { EditHskillComponent } from './components/skills/hardSkills/edit-hskill.component';
import { EditProyectoComponent } from './components/proyectos/edit-proyecto.component';
import { NewProyectoComponent } from './components/proyectos/new-proyecto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    AppComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EditeducacionComponent,
    NewEducacionComponent,
    EditBannerComponent,
    EditAcercadeComponent,
    NewSkillComponent,
    EditSkillComponent,
    HardSkillsComponent,
    NewHskillComponent,
    EditHskillComponent,
    EditProyectoComponent,
    NewProyectoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    interceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
