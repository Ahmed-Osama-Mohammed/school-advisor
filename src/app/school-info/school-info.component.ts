import { ViewportScroller } from '@angular/common';
import { SchoolData } from 'src/shared/modules/schooldata.module';
import { Component, OnInit, HostListener } from '@angular/core';
import { TopRankedSchoolService } from './../../services/top-ranked-school.service';

@Component({
  selector: 'app-school-info',
  templateUrl: './school-info.component.html',
  styleUrls: ['./school-info.component.css'],
})
export class SchoolInfoComponent implements OnInit {
  url:string=''
  schoolData: any = {
  
  };
key1:boolean=true
key2:boolean=true
key3:boolean=true
key4:boolean=true
key5:boolean=true
key6:boolean=true
key7:boolean=true
key8:boolean=true
key9:boolean=true
key10:boolean=true
keyoverall:boolean=true

  rate1: number = 0;
  rate2: number = 0;
  rate3: number = 0;
  rate4: number = 0;
  rate5: number = 0;
  rate6: number = 0;
  rate7: number = 0;
  rate8: number = 0;
  rate9: number = 0;
  rate10: number = 0;
  overall: number = 0;


  constructor(private viewportScroller: ViewportScroller,private TopRankedSchoolService: TopRankedSchoolService) {
    
  }
  
  @HostListener('window:scroll', ['$event'])

  onWindowScroll() {
    let element = document.querySelector('.ranking') as HTMLElement;
    if (window.pageYOffset > element.clientHeight) {
      this.counter1();
      this.counter2();
      this.counter3();
      this.counter4();
      this.counter5();
      this.counter6();
      this.counter7();
      this.counter8();
      this.counter9();
      this.counter10();
      this.counteroverall();
    }
  }
  counter1() {
    if(this.key1==true){
      var range = this.schoolData.rate1 - this.rate1;
      var duration = 2000;
      var stepTime = Math.abs(Math.floor(duration / range));
      var timer = setInterval(() => {
        this.rate1 += 1;
      if (this.schoolData.rate1 == this.rate1) {
        this.rate1 =this.schoolData.rate1 
        clearInterval(timer);
      }
    }, stepTime);
  }
  this.key1=false
  }
  counter2() {
    if(this.key2==true){
    var range = this.schoolData.rate2 - this.rate2;
    var duration = 2000;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(() => {
      this.rate2 += 1;
      if (this.schoolData.rate2 == this.rate2) {
        clearInterval(timer);
      }
    }, stepTime);
  }
    this.key2=false
  }
  counter3() {
     if(this.key3==true){
    var range = this.schoolData.rate3 - this.rate3;
    var duration = 2000;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(() => {
      this.rate3 += 1;
      if (this.schoolData.rate3 == this.rate3) {
        clearInterval(timer);
      }
    }, stepTime);
  }
   this.key3=false
  }
  counter4() {
     if(this.key4==true){
    var range = this.schoolData.rate4 - this.rate4;
    var duration = 2000;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(() => {
      this.rate4 += 1;
      if (this.schoolData.rate4 == this.rate4) {
        clearInterval(timer);
      }
    }, stepTime);
  }
   this.key4=false
  }
  counter5() {
     if(this.key5==true){
    var range = this.schoolData.rate5 - this.rate5;
    var duration = 2000;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(() => {
      this.rate5 += 1;
      if (this.schoolData.rate5 == this.rate5) {
        clearInterval(timer);
      }
    }, stepTime);
  }
   this.key5=false
  }
  counter6() {
     if(this.key6==true){
    var range = this.schoolData.rate6 - this.rate6;
    var duration = 2000;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(() => {
      this.rate6 += 1;
      if (this.schoolData.rate6 == this.rate6) {
        clearInterval(timer);
      }
    }, stepTime);
  }
   this.key6=false
  }
  counter7() {
     if(this.key7==true){
    var range = this.schoolData.rate7 - this.rate7;
    var duration = 2000;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(() => {
      this.rate7 += 1;
      if (this.schoolData.rate7 == this.rate7) {
        clearInterval(timer);
      }
    }, stepTime);
  }
   this.key7=false
  }
  counter8() {
     if(this.key8==true){
    var range = this.schoolData.rate8 - this.rate8;
    var duration = 2000;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(() => {
      this.rate8 += 1;
      if (this.schoolData.rate8 == this.rate8) {
        clearInterval(timer);
      }
    }, stepTime);
  }
   this.key8=false
  }
  counter9() {
     if(this.key9==true){
    var range = this.schoolData.rate9 - this.rate9;
    var duration = 2000;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(() => {
      this.rate9 += 1;
      if (this.schoolData.rate9 == this.rate9) {
        clearInterval(timer);
      }
    }, stepTime);
  }
   this.key9=false
  }
  counter10() {
     if(this.key10==true){
    var range = this.schoolData.rate10 - this.rate10;
    var duration = 2000;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(() => {
      this.rate10 += 1;
      if (this.schoolData.rate10 == this.rate10) {
        clearInterval(timer);
      }
    }, stepTime);
  }
   this.key10=false
  }
  counteroverall() {
     if(this.keyoverall==true){
    var range = this.schoolData.overall - this.overall;
    var duration = 2000;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(() => {
      this.overall += 1;
      if (this.schoolData.overall == this.overall) {
        clearInterval(timer);
      }
    }, stepTime);
  }
   this.keyoverall=false
  }

  ngOnInit(): void {
    this.url=window.location.href
    console.log(this.url)
    this.url= this.url.replace('http://localhost:4200/school-details?name=','')
    console.log(this.url)
    this.TopRankedSchoolService.getOneSchool(this.url).subscribe((response) => {
      this.schoolData = response[0];
      console.log(this.schoolData)
    })
  }  
}
