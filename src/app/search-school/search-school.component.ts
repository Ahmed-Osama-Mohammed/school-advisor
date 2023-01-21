import { SearchSchoolService } from './../../services/search-school.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search-school',
  templateUrl: './search-school.component.html',
  styleUrls: ['./search-school.component.css','../../shared/school-table-stlyes/school-style.css']
})
export class SearchSchoolComponent implements OnInit {
searchName:boolean=false;
searchPrice:boolean=false;
searchtype:boolean=false;
searchPlace:boolean=false;
priceValue:number=0


places:string[]=["Cairo",
    "Alexandria",
    "Port",
    "SaidSuez",	
    "Ismailia",
    "Kafr El Sheikh",
    "Gharbia",
    "Dakahlia",
    "Sharqia",
    "Monufia",
    "Qalyubia",
    "Damietta",
    "Beheira",	
    "Giza",
    "Faiyum",
    "Beni",
    "Suef",
    "Minya",
    "Asyut",
    "Sohag",
    "Qena",
    "Aswan",
    "Luxor",	
    "Red Sea",
    "New Valley",
    "Matrouh",
    "North Sinai",
    "South Sinai"
  ]
  types:string[]=["American",
  "British",
  "Ip",
  "Ig",
  "Private",
    "Religion"]

schools:any
filterdSchool:any[]=[]

name:string="";
place:string="";
type:string="";
price:number=0;

resultKey:boolean=false


constructor(private SearchSchoolService:SearchSchoolService) {
  this.schools=SearchSchoolService.getSchools();
}




onSubmit(){
  
  this.filterdSchool=[]
  this.setSchool(this.price,this.name,
    this.type,this.place)
    console.log(this.filterdSchool);
    this.resultKey=true
  }
  setSchool(price:number,name?: string,type?: string,place?: string){
    for(let i=0; i<this.schools.length; i++){
      if(this.schools[i].name.to==name || this.schools[i].type==type||this.schools[i].place==place||this.schools[i].price<=price){
        this.filterdSchool.push(this.schools[i])
      }
    }
    
  }

  ngOnInit(): void {
  }
  
}
