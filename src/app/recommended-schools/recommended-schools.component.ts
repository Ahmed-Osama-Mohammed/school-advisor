import { RecommendedSchoolsService } from './../../services/recommended-schools.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended-schools',
  templateUrl: './recommended-schools.component.html',
  styleUrls: ['../../shared/school-table-stlyes/school-style.css','./recommended-schools.component.css']
})
export class RecommendedSchoolsComponent implements OnInit {
recommendedSchools:any=[]
  constructor(private RecommendedSchoolsService:RecommendedSchoolsService) {
    this.recommendedSchools=this.RecommendedSchoolsService.getAllRecommendedSchools()

   }

  ngOnInit(): void {
  }

}
