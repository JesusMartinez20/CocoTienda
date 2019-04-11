import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url;
  constructor(private http: HttpClient) { }

  getMethod(){
    return this.http.get(environment.serverUrl+this.url);
  }

  deleteMethod(form){
    return this.http.delete(environment.serverUrl+this.url,form);
  }

  putMethod(form){
    return this.http.put(environment.serverUrl+this.url,form);
  }
}
