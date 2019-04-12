import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url='';
  producto:any;
  constructor(private http: HttpClient) { }

  getMethod(): Observable<any>{
    return this.producto=this.http.get(environment.serverUrl+this.url);
    const headers = new HttpHeaders().append('Authorization', 'JWT ' + localStorage.getItem('token'));
    return this.http.get(environment.serverUrl+this.url, {headers: headers});
  }

  deleteMethod(form): Observable<any>{
    //return this.producto=this.http.delete(environment.serverUrl+this.url,form);
    const headers = new HttpHeaders().append('Authorization', 'JWT ' + localStorage.getItem('token'));
    return this.http.delete(environment.serverUrl+this.url,{headers: headers});
  }

  putMethod(form): Observable<any>{
    //return this.producto=this.http.put(environment.serverUrl+this.url,form);
    const headers = new HttpHeaders().append('Authorization', 'JWT ' + localStorage.getItem('token'));
    return this.http.put(environment.serverUrl+this.url, form, {headers: headers});
  }
}
