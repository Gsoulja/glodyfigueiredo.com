import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@HostListener('window:scroll', ['$event'])
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'glody figueiredo';

  constructor() {}


}

