import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(private meta:Meta,private title:Title) 
  {
    this.meta.addTags([
      {name: "description",content:"Projects page of glodyfigueiredo.com"},
      {name: 'author',content:'Glody Figueiredo'},
      {name: 'keyword',content:'Glody Figueiredo, Glody, figueiredo, java, Software Developer,Programmer,Software,mysql,spring,spring boot,angular'}

    ]);
    this.setTitle("Project");
   }

  public setTitle(newTitle:string)
  {
    this.title.setTitle(newTitle);
  }

  ngOnInit(): void {
  }

}
