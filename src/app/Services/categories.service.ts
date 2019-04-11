import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  URL ='';
  categoria : any;

  constructor(private http: HttpClient) { }

  getContenido() {
  return this.categoria = this.http.get(environment.serverUrl+this.URL);
  }

}
