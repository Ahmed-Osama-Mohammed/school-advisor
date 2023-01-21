import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateExpression } from 'src/shared/character.validation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertise-form',
  templateUrl: './advertise-form.component.html',
  styleUrls: [ '../../shared/form-styles/form-style.css','./advertise-form.component.css']
})
export class AdvertiseFormComponent implements OnInit {

  AdvertismentForm: FormGroup;
  buttonKey: boolean = true;
  time: number = 6;

  constructor(private fb: FormBuilder, private router: Router) {
    this.AdvertismentForm = this.fb.group({
      companyName: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          validateExpression(/[0-9]/),
        ],
      ],
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          validateExpression(/[0-9]/),
        ],
      ],
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          validateExpression(/[0-9]/),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      phone: ['', [validateExpression(/[a-zA-z]/)]],
    });
  }

  get advertismentFunction() {
    return this.AdvertismentForm.controls;
  }

  onSubmit() {
    console.log(this.AdvertismentForm.value);
    let x: any = document.querySelector('form');
    x.style.display = 'none';
    let y: any = document.querySelector('.form-success');
    y.style.display = 'block';
    window.scrollTo(0, 150);
    setInterval(() => {this.time-- ;}, 1000);
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);
  }
  openForm() {
    let x: any = document.querySelector('form');
    x.style.display = 'block';
    this.buttonKey = false;
  }

  ngOnInit(): void {}
}
