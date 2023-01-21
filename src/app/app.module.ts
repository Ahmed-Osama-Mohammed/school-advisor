import { NgModule } from '@angular/core';
import { BrowserModule,Title } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule,NgbAlertModule}from '@ng-bootstrap/ng-bootstrap';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CompareSchoolsService } from './../services/compare-schools.service';
import { SearchSchoolService } from './../services/search-school.service';
import { RecommendedSchoolsService } from '../services/recommended-schools.service';
import { FeatureSchoolsService } from 'src/services/feature-schools.service';
import { UserReviewsService } from 'src/services/user-reviews.service';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ToBePartnerComponent } from './to-be-partner/to-be-partner.component';
import { SubmitComponent } from './submit/submit.component';
import { SubmitAskComponent } from './submit-ask/submit-ask.component';
import { SearchSchoolComponent } from './search-school/search-school.component';
import { CompareSchoolsComponent } from './compare-schools/compare-schools.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { AdvertiseFormComponent } from './advertise-form/advertise-form.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { FeatureSchoolsComponent } from './feature-schools/feature-schools.component';
import { RecommendedSchoolsComponent } from './recommended-schools/recommended-schools.component';
import { InterceptorService } from 'src/services/interceptor.service';
import { SchoolInfoComponent } from './school-info/school-info.component';
import { TopRankedComponent } from './top-ranked/top-ranked.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PageErrorComponent } from './page-error/page-error.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    ContactUsComponent,
    ToBePartnerComponent,
    SubmitComponent,
    SubmitAskComponent,
    SearchSchoolComponent,
    CompareSchoolsComponent,
    LoadingIndicatorComponent,
    AdvertiseFormComponent,
    JoinUsComponent,
    FeatureSchoolsComponent,
    RecommendedSchoolsComponent,
    SchoolInfoComponent,
    TopRankedComponent,
    AboutUsComponent,
    PageErrorComponent,
    AdminLoginComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [
    RecommendedSchoolsService,
    FeatureSchoolsService,
    SearchSchoolService,
    CompareSchoolsService,
    UserReviewsService,
    Title,
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
