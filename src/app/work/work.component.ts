import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent implements OnInit {

  constructor(private meta:Meta,private title:Title) 
  {
    this.meta.addTags([
      {name: "description",content:"Work page of glodyfigueiredo.com"},
      {name: 'author',content:'Glody Figueiredo'},
      {name: 'keyword',content:'Glody Figueiredo, Glody, figueiredo, java, Software Developer,Programmer,Software,mysql,spring,spring boot,angular,Capgemine,Cellfocus,Visabeira'}

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
