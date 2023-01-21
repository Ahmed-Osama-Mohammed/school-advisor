import { Component, OnInit } from '@angular/core';
import { FeatureSchoolsService } from 'src/services/feature-schools.service';

@Component({
  selector: 'app-feature-schools',
  templateUrl: './feature-schools.component.html',
  styleUrls: ['./feature-schools.component.css','../../shared/school-table-stlyes/school-style.css']
})
export class FeatureSchoolsComponent implements OnInit {
 featureSchools:any=[]
  constructor(private FeatureSchoolsService:FeatureSchoolsService) {
    this.featureSchools=this.FeatureSchoolsService.getFeatureSchools()
  }

  ngOnInit(): void {
  }

}
