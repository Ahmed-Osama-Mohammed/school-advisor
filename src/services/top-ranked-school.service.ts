import { SchoolData } from 'src/shared/modules/schooldata.module';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TopRankedSchoolService {

  constructor(private http: HttpClient) {
  }


  getschoolsData(){ 
    return this.http.get<SchoolData[]>("http://localhost:3000/Schools")}
  getFilteredSchoolsData(url:string){ 
    
    return this.http.get<SchoolData[]>("http://localhost:3000/Schools?"+url)}
  
  getOneSchool(url:string){
    return this.http.get<SchoolData[]>("http://localhost:3000/Schools?name="+url)}

}
