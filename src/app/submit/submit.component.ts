import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { validateExpression } from 'src/shared/character.validation';
import { requiradFunction } from 'src/shared/requiard.validation';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: [
    '../../shared/form-styles/form-style.css',
    './submit.component.css',
  ],
})
export class SubmitComponent implements OnInit {
  SubmitForm: FormGroup;
  time: number = 6;
  egypt: string[] = [
    'Cairo',
    'Alexandria',
    'Port',
    'SaidSuez',
    'Ismailia',
    'Kafr El Sheikh',
    'Gharbia',
    'Dakahlia',
    'Sharqia',
    'Monufia',
    'Qalyubia',
    'Damietta',
    'Beheira',
    'Giza',
    'Faiyum',
    'Beni',
    'Suef',
    'Minya',
    'Asyut',
    'Sohag',
    'Qena',
    'Aswan',
    'Luxor',
    'Red Sea',
    'New Valley',
    'Matrouh',
    'North Sinai',
    'South Sinai',
  ];
  cairoCities: string[] = [
    'Helwan',
    '6th october',
    'Maadi',
    'Sheikh zaied',
    'Masr El gedida',
  ];

  constructor(private fb: FormBuilder, private router: Router) {
    this.SubmitForm = this.fb.group(
      {
        name: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            validateExpression(/[0-9]/),
          ],
        ],
        schoolName: [
          '',
          [
            Validators.required,
            Validators.minLength(3),
            validateExpression(/[0-9]/),
          ],
        ],
        type: ['', Validators.required],
        grade: ['', Validators.required],
        city: [''],
        government: ['', Validators.required],
        email: [
          '',
          [
            Validators.required,
            Validators.email,
            Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
          ],
        ],
      },
      {
        validator: requiradFunction('government', 'city'),
      }
    );
  }
  get submitFunction() {
    return this.SubmitForm.controls;
  }

  onSubmit() {
    console.log(this.SubmitForm.value);
    let x: any = document.querySelector('.contain');
    x.style.display = 'none';
    let y: any = document.querySelector('.form-success');
    y.style.display = 'block';
    setInterval(() => {
      this.time--;
    }, 1000);
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);
  }
  ngOnInit(): void {}
}
