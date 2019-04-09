import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  url;
  constructor(private http: HttpClient) {}

  getMethod(){
    return this.http.get(environment.serverUrl+this.url);
  }

  postMethod(form){
    return this.http.post(environment.serverUrl+this.url,form);
  }
}
