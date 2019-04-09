import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EditUserService {

  urlA;
  urlB;
  constructor(private http: HttpClient) {}

  getUsersMethod(){
    return this.http.get(environment.serverUrl+this.urlA);
  }

  postUsersMethod(form){
    return this.http.post(environment.serverUrl+this.urlA,form);
  }

  getStatesMethod(){
    return this.http.get(environment.serverUrl+this.urlA);
  }
}
