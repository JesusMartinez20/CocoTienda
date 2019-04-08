import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms';
import { EditUserService } from './../Services/edit-user.service'


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']

})
export class EditUserComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  urlGet="";
  urlPost="";

  data:any;

  constructor(private http:EditUserService) { }

  EditUser : FormGroup;
  ngOnInit() {
    this.EditUser = new FormGroup({
      nombre: new FormControl(),
      apellidoMaterno: new FormControl(),
      nombreUsuario: new FormControl(),
      correo: this.email,
      contrasena: new FormControl(),
      direccion: new FormControl(),
      CP: new FormControl(),
      municipio: new FormControl(),
      estado: new FormControl(),
    });

    this.http.url=this.urlGet;
    this.data=this.http.getMethod().subscribe(d=>this.info=d)
  }




  info:any;

  onSubmit(){
    console.log(this.EditUser.value);
    let form = JSON.stringify(this.EditUser.value);
    console.log(form);
    this.http.url = this.urlPost;
    this.http.postMethod(form);
  }

  states: string[] = [
    'Jalisco', 'Monterrey', 'Colima', 'Zacatecas', 'Baja California', 'Baja California Sur', 'Sonora', 'Tlaxcala',
    'Veracruz', 'Quintanta Roo', 'Yucatan', 'Sinaloa', 'Chiapas', 'Oaxaca',
  ];

  getErrorMessage() {
    return this.email.hasError('required') ? 'Debe ingresar un valor' :
        this.email.hasError('email') ? 'Correo invalido' :
            '';
  }
}