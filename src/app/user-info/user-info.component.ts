import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router'
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  user: boolean = false; //False = Admin | True = Client or Guest
  constructor(private router : Router) { 
    console.log("not urferfr"); 
    console.log(localStorage.getItem('token')); 
    if((localStorage.getItem('token') === 'null')){
      console.log("holajsjs"); 
      this.router.navigate(['/login']);

    }
    

  }

  ngOnInit() {
  }

}
