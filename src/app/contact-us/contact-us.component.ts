import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateExpression } from '../../shared/character.validation';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['../../shared/form-styles/form-style.css']
})
export class ContactUsComponent implements OnInit {

  ContactForm:FormGroup

  constructor(private fb:FormBuilder) {
    this.ContactForm=this.fb.group({
      name:[ "" , [Validators.required , Validators.minLength(3),validateExpression(/[0-9]/)]],
      email:[ "" , [Validators.required,  Validators.email, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      phone:[ "" ,[validateExpression(/[a-zA-z]/)]],
      massage:[ ""  ,Validators.required]
    })
   }
   
  get contactFunction() { return this.ContactForm.controls; }
   onSubmit(){
     console.log(this.ContactForm.value)
     let x: any = document.querySelector('.form');
     x.style.display = 'none';
     let y: any = document.querySelector('.form-success');
     y.style.display = 'block';
 
   }
   


  ngOnInit(): void {
  }

}
