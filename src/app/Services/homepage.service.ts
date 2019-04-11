import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  
  URLContenido ='';
  URLCategoria = '';
  contenido : any;
  categoria : any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
 
  getContenido() {
    return this.contenido = this.http.get(environment.serverUrl+this.URLContenido);
  }

  getCategoria() {
    return  this.http.get(environment.serverUrl+this.URLCategoria);
  }

}


