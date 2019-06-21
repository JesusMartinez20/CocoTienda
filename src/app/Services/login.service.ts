import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url;
  response
  constructor(private http: HttpClient,private check:UserService) { }

  getMethod(){
    const headers = new HttpHeaders().append('Authorization', ''+localStorage.getItem('token'));
    return this.http.get(environment.serverUrl+this.url, {headers: headers});
  }

  postMethod(form){
    return this.http.post<any>(environment.serverUrl+this.url,form);
  }

  createUser(form): Observable<any>{
    const headers = new HttpHeaders().append('Authorization', ''+localStorage.getItem('token'));
    return this.http.post(environment.serverUrl+this.url,form, {headers: headers});
  }

  checkLogIn(){
    if(!localStorage.getItem("token")){
      console.log("no token")
      return of(false);}
    this.check.url="/usuarios";
    
    return this.check.getMethod();
  }


  

}
