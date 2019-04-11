import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  url;
  constructor(private http: HttpClient) {}

  getMethod(){
    const headers = new HttpHeaders().append('Authorization', 'JWT ' + localStorage.getItem('token'));
    return this.http.get(environment.serverUrl+this.url,{headers:headers});
  }

  postMethod(form){
    let authHeader = new HttpHeaders().append('Authorization', 'JWT ' + localStorage.getItem('token'));
    authHeader = authHeader.set('Authorization', `JWT ${localStorage.getItem('token')}`)
              .set('Content-Type', 'application/json');
    console.log(authHeader);
    return this.http.post(`${environment.serverUrl}${this.url}`, form, {headers: authHeader});
  }

  putMethod(form){
    const headers = new HttpHeaders().append('Authorization', 'JWT ' + localStorage.getItem('token'));
    console.log(environment.serverUrl+this.url);
    return this.http.put(environment.serverUrl+this.url,form,{headers:headers});
  }
}
