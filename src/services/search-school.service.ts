import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchSchoolService {

  schools:any=[
    {name:"school1",type:"American",place:"Cairo",price:10000,rate:70},
    {name:"school2",type:"American",place:"Alexandria",price:20000,rate:50},
    {name:"school3",type:"Private",place:"Giza",price:30000,rate:90},
    {name:"school4",type:"Religion",place:"Aswan",price:40000,rate:0}
  ]

  constructor() { }


  getSchools(){
    return this.schools
  }
}
