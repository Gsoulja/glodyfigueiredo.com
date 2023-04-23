import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [ { path: '', pathMatch: 'full', redirectTo: 'home' },
{ path: 'skill', component: SkillsComponent },
{ path: 'work', component: WorkComponent },
{ path: 'education', component: EducationComponent },
{ path: 'home', component: HomeComponent },
{ path: 'project', component: ProjectsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
