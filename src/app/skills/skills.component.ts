import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  constructor(private meta:Meta,private title:Title) 
  {
    this.meta.addTags([
      {name: "description",content:"skill page of glodyfigueiredo.com"},
      {name: 'author',content:'Glody Figueiredo'},
      {name: 'keyword',content:'Glody Figueiredo, Glody, figueiredo, java, Software Developer,Programmer,Software,mysql,spring,spring boot,angular,php,code igniter,linux,Skill'}

    ]);
    this.setTitle("Skills");
   }  
   public setTitle(newTitle:string)
   {
     this.title.setTitle(newTitle);
   }

  ngOnInit(): void {
  }

}
