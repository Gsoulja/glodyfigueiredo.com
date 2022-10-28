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
  title = 'glodyfigueiredo';

  constructor(private viewportScroller : ViewportScroller) {}

onClickScroll(elementId: string): void{
  this.viewportScroller.scrollToAnchor(elementId);
}


onWindowScroll() {
    let element = document.querySelector('.navbar') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
}

