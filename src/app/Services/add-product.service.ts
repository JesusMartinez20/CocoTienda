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

  getMethod(): Observable<any>{
    const headers = new HttpHeaders().append('Authorization', ''+localStorage.getItem('token'));
    return this.http.get(environment.serverUrl+this.url, {headers: headers});
    //return this.http.get('http://localhost/categorias.php', {headers: headers});
  }

  postMethod(form): Observable<any>{
    const headers = new HttpHeaders().append('Authorization', ''+localStorage.getItem('token'));
    return this.http.put(environment.serverUrl+this.url, form, {headers: headers});
  }

}