import { ViewportScroller } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
count1:number=0
count2:number=0
count3:number=0
key1:boolean=true
key2:boolean=true
key3:boolean=true
team:any=[{
  name: 'Alison Fletcher',position:"CEO & Founder",img:"../../assets/images/1.jpg"},
  {name: 'Alison Fletcher',position:"Manager",img:"../../assets/images/2.jpg"},
  {name: 'Alison Fletcher',position:"anything",img:"../../assets/images/3.jpg"},
  {name: 'Alison Fletcher',position:"anything",img:"../../assets/images/4.jpg"
}];
clintsLogo = [
  { logo: '../../assets/images/clint1.png' },
  { logo: '../../assets/images/clint2.png' },
  { logo: '../../assets/images/clint3.png' },
  { logo: '../../assets/images/clint4.png' },
  { logo: '../../assets/images/clint5.png' },
  { logo: '../../assets/images/clint3.png' },
  { logo: '../../assets/images/clint4.png' },
  { logo: '../../assets/images/clint3.png' },
];

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    
    let element = document.querySelector('.counter') as HTMLElement;
    if (window.pageYOffset > 1150) {
      this.counter1()
      this.counter2()
      this.counter3()
    }
  }
  counter1() {
     if(this.key1==true){
      var range = 50 - this.count1;
      var duration = 2000;
      var stepTime = Math.abs(Math.floor(duration / range));
      var timer = setInterval(() => {
        this.count1 += 1;
      if (this.count1 == 50) {
        this.count1 == 50
        clearInterval(timer);
      }
    }, stepTime);
  }
    this.key1=false
}
  counter2() {
     if(this.key2==true){
      var range = 500 - this.count2;
      var duration = 500;
      var stepTime = Math.abs(Math.floor(duration / range));
      var timer = setInterval(() => {
        this.count2 += 1;
      if (this.count2 == 500) {
        this.count2 == 500
        clearInterval(timer);
      }
    }, stepTime);
  }
    this.key2=false
}
  counter3() {
     if(this.key3==true){
      var range = 40 - this.count3;
      var duration = 2100;
      var stepTime = Math.abs(Math.floor(duration / range));
      var timer = setInterval(() => {
        this.count3 += 1;
      if (this.count3 == 40) {
        this.count3 == 40
        clearInterval(timer);
      }
    }, stepTime);
  }
    this.key3=false
}

}
