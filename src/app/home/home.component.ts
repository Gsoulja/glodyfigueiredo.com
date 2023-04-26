import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NgOptimizedImage } from '@angular/common'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private meta:Meta,private title:Title) 
  {
    this.meta.addTags([
      {name: "description",content:"home page of glodyfigueiredo.com"},
      {name: 'author',content:'Glody Figueiredo'},
      {name: 'keyword',content:'Glody Figueiredo, Glody, figueiredo, java, Software Developer,Programmer'}

    ]);
    this.setTitle("Home page");
   }

  public setTitle(newTitle:string)
  {
    this.title.setTitle(newTitle);
  }
  ngOnInit(): void {
  }

}
