import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TopRankedComponent } from './top-ranked/top-ranked.component';
import { RecommendedSchoolsComponent } from './recommended-schools/recommended-schools.component';
import { FeatureSchoolsComponent } from './feature-schools/feature-schools.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { AdvertiseFormComponent } from './advertise-form/advertise-form.component';
import { CompareSchoolsComponent } from './compare-schools/compare-schools.component';
import { HomeComponent } from './home/home.component';
import { SearchSchoolComponent } from './search-school/search-school.component';
import { SubmitComponent } from './submit/submit.component';
import { ToBePartnerComponent } from './to-be-partner/to-be-partner.component';
import { SchoolInfoComponent } from './school-info/school-info.component';

const routes: Routes = [
  { path:'', pathMatch:'full', component: HomeComponent,data : {title:"School Advisor - Home"}},
  { path:'submit-form', component:SubmitComponent ,data : {title:"School Advisor - Subscribe"}},
  { path:'about-us', component:AboutUsComponent ,data : {title:"School Advisor - About Us"}},
  { path:'recommended-schools', component:RecommendedSchoolsComponent ,data : {title:"School Advisor - Recommended Schools"}},
  { path:'feature-schools', component:FeatureSchoolsComponent ,data : {title:"School Advisor - Feature Schools"}},
  { path:'search-school', component:SearchSchoolComponent ,data : {title:"School Advisor - School Search"}},
  { path:'compare-schools', component:CompareSchoolsComponent ,data : {title:"School Advisor - Compare Between Schools"}},
  { path:'ads', component:AdvertiseFormComponent ,data : {title:"School Advisor - Advertise With Us"}},
  { path:'become-apartner', component: ToBePartnerComponent ,data : {title:"School Advisor - Become A Partner"}},
  { path:'join-us', component:JoinUsComponent ,data : {title:"School Advisor - Join Us"}},
  { path:'school-details', component:SchoolInfoComponent ,data : {title:"School Advisor - School Details"}},
  { path:'top-ranked', component:TopRankedComponent ,data : {title:"School Advisor - Top Ranked Schools"}},
  { path:'no-school', component:PageErrorComponent ,data : {title:"School Advisor - Not Found"}},
  { path:'admin-user-controller-role', component:AdminLoginComponent ,data : {title:"School Advisor - Admin"}},
  { path:'**', redirectTo:'no-school'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
