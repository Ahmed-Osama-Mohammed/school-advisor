import { ViewportScroller } from '@angular/common';
import { FeatureSchoolsService } from 'src/services/feature-schools.service';
import { Component, OnInit } from '@angular/core';
import { RecommendedSchoolsService } from '../../services/recommended-schools.service';
import { Reviews } from 'src/services/user.module';
import { UserReviewsService } from 'src/services/user-reviews.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  info = [
    {
      title: 'THE GOOD, THE BAD, & THE HONEST',
      describe:
        'Our user reviews let you hear directly from families and students to give you an honest and holistic view',
      icon: 'fa fa-question',
    },
    {
      title: 'NO HEAVY LIFTING',
      describe: "We analyze the data so you don't have to be confused",
      icon: 'fa fa-laptop',
    },
    {
      title: 'LIKE A GLOVE',
      describe:
        "We personalize your search based on what's most important to you.",
      icon: 'fa fa-search',
    },
  ];

  services = [
    {
      title: 'Search by your own descisions',
      discribe:
        'search for the school that fits your needs depending on your own descisions',
    },
    {
      title: 'See the top ranking schools',
      discribe:
        "all knowen schools sorted depending on it's rank , filter property help you to find best school with full details",
    },
    {
      title: 'Compare between two schools',
      discribe:
        'compare betwwen two school with detail of each other , to help you out of confusing',
    },
  ];

  clints = [
    {
      name: 'Shelly Johnson',
      img: '../../assets/images/testi-1.png',
      country: 'California',
      review:
        'Your guys were great knowledgeable, well experienced, efficient and neat. A true to work with The ranking school team',
    },
    {
      name: 'Cathrine Wagner',
      img: '../../assets/images/testi-2.png',
      country: 'Los Angeles',
      review:
        'Indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.',
    },
    {
      name: 'Cuthbert Brain',
      img: '../../assets/images/testi-3.png',
      country: 'Newyork City',
      review:
        'Same as saying through shrinking from all pain these cases are perfectly simple and easy to distinguish.',
    },
  ];

  clintsLogo = [
    { logo: '../../assets/images/clint1.png' },
    { logo: '../../assets/images/clint2.png' },
    { logo: '../../assets/images/clint3.png' },
    { logo: '../../assets/images/clint4.png' },
    { logo: '../../assets/images/clint5.png' },
    { logo: '../../assets/images/clint3.png' },
    { logo: '../../assets/images/clint4.png' },
    { logo: '../../assets/images/clint3.png' },
  ];
  
  routerLinks = ['search-school', 'top-ranked', 'compare-schools'];  // Router link for section which declared by for ngfor. 
  
  featureSchools:any[]=[]
  
  allReviews:Reviews[]=[]
  review:Reviews[]=[]
  
  schoolNumber = 3;
  allRecommendedSchools;    // all recommeded school will fetched from service 
  recommendedSchools: any = []; // here will only push only schools = schoolNumber and will pust more when user click show more 
  showMoreKey: boolean = true; // aswitch key to make button disapper after show all the schools
  
  constructor(private RecommendedSchoolsService: RecommendedSchoolsService,
    private FeatureSchoolsService:FeatureSchoolsService,
    private UserReviewsService:UserReviewsService
    ,private viewportScroller: ViewportScroller) { // service call 
    this.allRecommendedSchools =
      this.RecommendedSchoolsService.getAllRecommendedSchools();
    this.setRecommendedSchools();
    this.featureSchools=this.FeatureSchoolsService.getFeatureSchools();
    
  }
  ngOnInit(): void {
    setTimeout(this.openSubmit, 10000);
    this.UserReviewsService.getReviews().subscribe(response =>{
      this.allReviews=response
      this.review=this.allReviews.slice(0,2)
      console.log(this.review);
    })
  }
  
  setRecommendedSchools() {
    for (let i = this.schoolNumber - 3; i < this.schoolNumber; i++) { // this function will push 3 schools in one call
      this.recommendedSchools.push(this.allRecommendedSchools[i]);
    }
  }
  

    public scroll(elementId: string): void { 
      this.viewportScroller.scrollToAnchor(elementId);
  }
  showMore() {
    if (this.schoolNumber < this.allRecommendedSchools.length) { //this function will push more 3 schools in every call
      this.schoolNumber += 3;
      this.setRecommendedSchools();
      if (this.schoolNumber >= this.allRecommendedSchools.length) {
        this.showMoreKey = false;
      }
    }
  }

  openSubmit() {
    let submit: any = document.querySelector('.show');  //this function will make the submit Form appear and called in OnInit() after 10s from page loading
    submit.style.display = 'block';
  }
}
