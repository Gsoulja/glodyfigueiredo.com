import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private meta:Meta,private title:Title) 
  {
    this.meta.addTags([
      {name: "description",content:"Education page of glodyfigueiredo.com"},
      {name: 'author',content:'Glody Figueiredo'},
      {name: 'keyword',content:'Glody Figueiredo, Glody, figueiredo, java, Software Developer,Programmer,Software,mysql,spring,spring boot,angular,Estgv-Escola Superior Tecnologica de viseu,Compute science,Engenharia informatica'}

    ]);
    this.setTitle("Education");
   }  
   public setTitle(newTitle:string)
   {
     this.title.setTitle(newTitle);
   }

  ngOnInit(): void {
  }

}
