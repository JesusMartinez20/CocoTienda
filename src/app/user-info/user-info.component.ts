import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router'
import { LoginService } from '../Services/login.service';
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: boolean = false; //False = Admin | True = Client or Guest
  constructor(private router : Router, private check:LoginService) {
    
    console.log("not urferfr"); 
    console.log(localStorage.getItem('token')); 
    console.log(this.check.checkLogIn());
    if(!this.check.checkLogIn()){
      console.log("holajsjs"); 
      this.router.navigate(['/login']);

    }

    

  }

  ngOnInit() {
  }

}
