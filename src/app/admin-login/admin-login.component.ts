import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/services/authentication.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  userName:string=""
  password:string=""
  check:boolean=false
  times:number = 5
  constructor( private authenticationService: AuthenticationService ,private router: Router) { }

  adminLogin(){
    
     if(this.authenticationService.admin.userName===this.userName && this.authenticationService.admin.password===this.password) {
      this.router.navigate(['/login']);
    }
    else
       this.check=true
       if(  this.times==1){
        this.router.navigate(['/']);
       }
       return this.times-=1
  }

  ngOnInit(): void {
  }

}
