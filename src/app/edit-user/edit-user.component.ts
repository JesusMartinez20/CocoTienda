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
  correo = new FormControl('', [Validators.required, Validators.email]);

  urlGetUsers="/usuarios";
  urlPutUsers="/usuarios";


 data:any;
 
 /*[]=[
    {
      nombre: "YoMero",
      apellidoPaterno: "Daddy",
      apellidoMaterno: "Mommy",
      nombreUsuario: "Guacamero",
      correo: "Depresion@ceti.proyecto",
      contrasena: "solomititulopls",
      direccion: "Cocolinas de los MoMolinos",
      CP: "12345",
      municipio: "GDL",
      estado: "Zacatecas",
    }
 ];*/

  constructor(private http:EditUserService) { }

  EditUser : FormGroup;
  ngOnInit() {
    this.EditUser = new FormGroup({
      nombre: new FormControl(),
      apellidoPaterno: new FormControl(),
      apellidoMaterno: new FormControl(),
      nombreUsuario: new FormControl(),
      correo: this.correo,
      contrasena: new FormControl(),
    });

    this.http.url=this.urlGetUsers;
    this.data=this.http.getMethod().subscribe(d=>this.info=d);

  }




  info:any;  
  /*[]=[
    {id:1,estado:'Jalisco'},
    {id:2,estado:'Michoacsan'},
    {id:3,estado:'Tlaxcala'},
  ];*/
  
  onSubmit(){
    console.log(this.EditUser.value);
    let form = JSON.stringify(this.EditUser.value);
    console.log(form);
    this.http.url = this.urlPutUsers;
    this.http.putMethod(form);
  }



  getErrorMessage() {
    return this.correo.hasError('required') ? 'Debe ingresar un valor' :
        this.correo.hasError('email') ? 'Correo invalido' :
            '';
  }
}