import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './../../Services/login.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login-user-log-in',
  templateUrl: './login-user-log-in.component.html',
  styleUrls: ['./login-user-log-in.component.css']
})
export class LoginUserLogInComponent implements OnInit {
  urlP="/login"

  constructor(private http:LoginService, private router : Router) { }

  Userlogin : FormGroup;
  ngOnInit() {
    this.Userlogin = new FormGroup({
      User: new FormControl(),
      Password: new FormControl(),
    })

  }

  onSubmit(){
    console.log(this.Userlogin.value)
    let form = JSON.stringify(this.Userlogin.value)
    console.log(form);
    this.http.url=this.urlP;
    this.http.postMethod(form).subscribe(token=>{localStorage.setItem('token',token.token)
    this.router.navigate(['/user-info']);});
     
  }


}
