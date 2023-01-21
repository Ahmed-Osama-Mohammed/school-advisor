import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeatureSchoolsService {

  FeatureSchools=[
    {name:"school name1"     ,type:"school type"    , img:"../../assets/images/school.jpg"    ,address:"school address" ,price:10000 ,rate:30},
    {name:"school name2"     ,type:"school type"    , img:"../../assets/images/school.jpg"    ,address:"school address" ,price:10000 ,rate:50},
    {name:"school name3"     ,type:"school type"    , img:"../../assets/images/school.jpg"    ,address:"school address" ,price:10000 ,rate:40},
    {name:"school name4"     ,type:"school type"    , img:"../../assets/images/school.jpg"    ,address:"school address" ,price:10000 ,rate:90},
    {name:"school name5"     ,type:"school type"    , img:"../../assets/images/school.jpg"    ,address:"school address" ,price:10000 ,rate:70},
    {name:"school name6"     ,type:"school type"    , img:"../../assets/images/school.jpg"    ,address:"school address" ,price:10000 ,rate:60}
  ]

  constructor() { }
  getFeatureSchools() {
    return this.FeatureSchools
  }
}
