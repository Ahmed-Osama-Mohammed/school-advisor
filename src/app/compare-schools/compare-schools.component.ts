import { SchoolData } from './../../shared/modules/schooldata.module';
import { CompareSchoolsService } from './../../services/compare-schools.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare-schools',
  templateUrl: './compare-schools.component.html',
  styleUrls: ['./compare-schools.component.css']
})
export class CompareSchoolsComponent implements OnInit {
allschools: any[]=[];
school1:string="";
school1Data:any={name:"-",type:"-",government:"",city:"",address:"-",webLink:"-",email:"-",phone:"-",grade:"-",fee:"-",gender:"-",examBody:false,rate1:0,rate2:0,rate3:0,rate4:0,rate5:0,rate6:0,rate7:0,rate8:0,rate9:0,rate10:0,overall:0}
school2:string="";
school2Data:any={name:"-",type:"-",government:"",city:"",address:"-",webLink:"-",email:"-",phone:"-",grade:"-",fee:"-",gender:"-",examBody:false,rate1:0,rate2:0,rate3:0,rate4:0,rate5:0,rate6:0,rate7:0,rate8:0,rate9:0,rate10:0,overall:0}
school3:string="";
school3Data:any={name:"-",type:"-",government:"",city:"",address:"-",webLink:"-",email:"-",phone:"-",grade:"-",fee:"-",gender:"-",examBody:false,rate1:0,rate2:0,rate3:0,rate4:0,rate5:0,rate6:0,rate7:0,rate8:0,rate9:0,rate10:0,overall:0}
key1:boolean=false;




  constructor(private CompareSchoolsService: CompareSchoolsService) {
    this.allschools=CompareSchoolsService.getSchoolData();
   }
close1(){
  this.school1Data={name:"-",type:"-",government:"",city:"",address:"-",webLink:"-",email:"-",phone:"-",grade:"-",fee:"-",gender:"-",examBody:false,rate1:0,rate2:0,rate3:0,rate4:0,rate5:0,rate6:0,rate7:0,rate8:0,rate9:0,rate10:0,overall:0}
}
close2(){
  this.school2Data={name:"-",type:"-",government:"",city:"",address:"-",webLink:"-",email:"-",phone:"-",grade:"-",fee:"-",gender:"-",examBody:false,rate1:0,rate2:0,rate3:0,rate4:0,rate5:0,rate6:0,rate7:0,rate8:0,rate9:0,rate10:0,overall:0}
}
close3(){
  this.school3Data={name:"-",type:"-",government:"",city:"",address:"-",webLink:"-",email:"-",phone:"-",grade:"-",fee:"-",gender:"-",examBody:false,rate1:0,rate2:0,rate3:0,rate4:0,rate5:0,rate6:0,rate7:0,rate8:0,rate9:0,rate10:0,overall:0}
}


   selectSchool1(){
    let lowerCase:string=this.school1.toLowerCase()
     for (let i =0;i<this.allschools.length;i++){
        if(lowerCase==this.allschools[i].name){
          this.school1Data=this.allschools[i]
          if([this.school1Data].length){
            this.key1=true
        }
        }
     }
   }
   selectSchool2(){
    let lowerCase:string=this.school2.toLowerCase()
     for (let i =0;i<this.allschools.length;i++){
        if(lowerCase==this.allschools[i].name){
          this.school2Data=this.allschools[i]
        }
     }
   }
   selectSchool3(){
    let lowerCase:string=this.school3.toLowerCase()
     for (let i =0;i<this.allschools.length;i++){
        if(lowerCase==this.allschools[i].name){
          this.school3Data=this.allschools[i]
        }
     }
   }

  ngOnInit(): void {
  }

}
