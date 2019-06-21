import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url;
  constructor(private http: HttpClient) { }

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

  checkLogIn(): Observable<any>{
    const headers = new HttpHeaders().append('Authorization', ''+localStorage.getItem('token'));
    return this.http.get(environment.serverUrl+'',{headers:headers});
  }

  

}
