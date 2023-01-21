import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Reviews } from './user.module';


@Injectable({
  providedIn: 'root'
})
export class UserReviewsService {
  reviews:Reviews[]=[]
  constructor(private http: HttpClient) {
   }
  
  getReviews(){
   return this.http.get<Reviews[]>("https://jsonplaceholder.typicode.com/comments")
  }

}
