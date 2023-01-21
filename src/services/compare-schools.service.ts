import { Injectable } from '@angular/core';
import { SchoolData } from 'src/shared/modules/schooldata.module';

@Injectable({
  providedIn: 'root'
})
export class CompareSchoolsService {
  schoolsData:SchoolData[]=[
  {name:"school1",type:"American",rank:1,government:"Cairo",city:"maadi",address:"address1",webLink:"www.school1.com",email:"school1@school1.com",phone:"123-456-789",grade:"1:12",fee:10000,gender:"male",examBody:true,rate1:70,rate2:56,rate3:80,rate4:42,rate5:66,rate6:47,rate7:42,rate8:90,rate9:95,rate10:70,overall:55},
  {name:"school2",type:"Britsh",rank:1,government:"giza",address:"address2",webLink:"www.school2.com",email:"school2@school2.com",phone:"123-456-789",grade:"1:12",fee:10000,gender:"female",examBody:false,rate1:60,rate2:66,rate3:70,rate4:52,rate5:56,rate6:57,rate7:52,rate8:80,rate9:55,rate10:90,overall:63},
  ]
  constructor() { }
  getSchoolData(){
    return this.schoolsData
  }
}
