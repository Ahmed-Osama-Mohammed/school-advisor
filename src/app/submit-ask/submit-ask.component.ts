import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submit-ask',
  templateUrl: './submit-ask.component.html',
  styleUrls: ['./submit-ask.component.css']
})
export class SubmitAskComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  close(){
    let x:any=document.querySelector(".ask");
    x.style.display="none";
  }

}
