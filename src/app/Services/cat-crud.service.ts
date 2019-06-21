import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatCrudService {
  url; 
  constructor(private http: HttpClient) { }
  getMethod(): Observable<any>{
    const headers = new HttpHeaders().append('Authorization', ''+localStorage.getItem('token'));
    return this.http.get(environment.serverUrl+this.url, {headers: headers});
  }

  putMethod(form): Observable<any>{
    const headers = new HttpHeaders().append('Authorization', ''+localStorage.getItem('token'));
    return this.http.put(environment.serverUrl+this.url, form, {headers: headers});  
  }

  postMethod(form): Observable<any>{
    const headers = new HttpHeaders().append('Authorization', ''+localStorage.getItem('token'));
    return this.http.post(environment.serverUrl+this.url,form, {headers: headers});
  }

  deleteMethod(form): Observable<any>{
    const headers = new HttpHeaders().append('Authorization', ''+localStorage.getItem('token'));
    return this.http.request('delete',environment.serverUrl+this.url, {
      headers: headers,
      body: form
    });
  }

  // deleteMethod(form): Observable<any>{
  //   const headers = new HttpHeaders().append('Authorization', 'JWT ' + localStorage.getItem('token'));
  //   return this.http.request('delete',environment.serverUrl+this.url, {
  //     headers: headers,
  //     body: form
  //   });
  // }

}
