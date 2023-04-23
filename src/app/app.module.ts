import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppfootComponent } from './appfoot/appfoot.component';


@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    WorkComponent,
    EducationComponent,
    ProjectsComponent,
    HomeComponent,
    AppHeaderComponent,
    AppfootComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
