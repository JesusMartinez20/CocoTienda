import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {
  url;
  producto:any;
  constructor(private http: HttpClient) { }

  postMethod(form): Observable<any>{
    const headers = new HttpHeaders().append('Authorization', 'JWT ' + localStorage.getItem('token'));
    return this.http.put(environment.serverUrl+this.url, form, {headers: headers});
  }

  //Aquí va el  get
}