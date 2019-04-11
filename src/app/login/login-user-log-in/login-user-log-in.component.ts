import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './../../Services/login.service';

@Component({
  selector: 'app-login-user-log-in',
  templateUrl: './login-user-log-in.component.html',
  styleUrls: ['./login-user-log-in.component.css']
})
export class LoginUserLogInComponent implements OnInit {
  urlP=""
  posts;

  constructor(private http:LoginService) { }

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
    this.posts=this.http.postMethod(form).subscribe(d=>{let i=d.toString();localStorage.setItem('token',i)});

  }


}
