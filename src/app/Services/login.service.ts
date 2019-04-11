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
    return this.http.get(environment.serverUrl+this.url);
  }

  postMethod(form){
    return this.http.post(environment.serverUrl+this.url,form);
  }

  createUser(form): Observable<any>{
    const headers = new HttpHeaders().append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.post(environment.serverUrl+this.url, form, {headers: headers});  
  }

}
