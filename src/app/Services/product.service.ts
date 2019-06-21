import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url;
  producto:any;
  constructor(private http: HttpClient) { }

  getMethod(url1): Observable<any>{
    const headers = new HttpHeaders().append('Authorization', ''+localStorage.getItem('token'));
    return this.http.get(environment.serverUrl+url1, {headers: headers});
  }

  deleteMethod(form): Observable<any>{
    const headers = new HttpHeaders().append('Authorization', ''+localStorage.getItem('token'));
    //headers.append('data',form);
    return this.http.request('delete',environment.serverUrl+this.url, {
      headers: headers,
      body: form
    });
  }

  putMethod(form): Observable<any>{
    const headers = new HttpHeaders().append('Authorization', ''+localStorage.getItem('token'));
    return this.http.put(environment.serverUrl+this.url, form, {headers: headers});
  }
}
