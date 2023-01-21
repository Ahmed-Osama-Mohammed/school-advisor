import { ViewportScroller } from '@angular/common';
import { LoaderService } from './../../services/loader.service';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public LoaderService:LoaderService,private viewportScroller: ViewportScroller) { 
    
  }
  
  ngOnInit(): void {
 
   
  }
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
      let element = document.querySelector('.navbar') as HTMLElement;
      if (window.pageYOffset > element.clientHeight) {
        element.classList.add('fix');
        element.classList.remove('unfix');
      } else {
        element.classList.add('unfix');
        element.classList.remove('fix');
      }
    }
  showSearchTab(){
    let element1 = document.querySelector('.search-input') as HTMLElement;
    let element2 = document.querySelector('.search-btn') as HTMLElement;
    let element3 = document.querySelector('.open') as HTMLElement;
      element1.style.width="100%"
      element1.style.paddingLeft="10px"
      element2.style.display="inline-block"
      element3.style.display="none"
  }  

  public scroll(elementId: string): void { 
    this.viewportScroller.scrollToAnchor(elementId);
}

}
