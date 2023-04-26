import { Component,ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {
  
  scrollchange: number =0;
  ngOnInit(): void {
  }
 

constructor() {
}
  @ViewChild('namebutton', { read: ElementRef, static: false })
  namebutton!: ElementRef;
  
  @HostListener('window:scroll', ['$event']) 
  doSomething(event:any) {
    console.debug("Scroll before ", this.namebutton );
   // console.debug("Scroll Event", document.body.scrollTop);
    // see András Szepesházi's comment below
    console.debug("Scroll before ", this.scrollchange );
    if(window.pageYOffset > this.scrollchange )
    {
        this.scrollchange = window.pageYOffset;
        console.debug("Scroll Event", window.pageYOffset );
        console.debug("escondi o menu", );
        console.debug("Scroll ", this.scrollchange );
        this.namebutton.nativeElement.classList.remove('scrolled-up');
        this.namebutton.nativeElement.classList.remove('fixed-top');
        this.namebutton.nativeElement.classList.add('scrolled-down'); 
    }
    if(window.pageYOffset < this.scrollchange || this.scrollchange==0 )
    {
        this.scrollchange =window.pageYOffset;
        console.debug("Scroll Event", window.pageYOffset );
        console.debug("mostrie o menu", );
        console.debug("Scroll ", this.scrollchange );
        this.namebutton.nativeElement.classList.remove('scrolled-down');
        this.namebutton.nativeElement.classList.add('scrolled-up');
        this.namebutton.nativeElement.classList.add('fixed-top');
        
    }
  }
}



