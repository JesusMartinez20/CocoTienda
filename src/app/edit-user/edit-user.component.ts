import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms';
import { EditUserService } from './../Services/edit-user.service';
import { Router } from '@angular/router';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';


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

  constructor(private http:EditUserService, private router:Router) { }

  EditUser : FormGroup;
  ngOnInit() {
    this.EditUser = new FormGroup({
      nombre: new FormControl(),
      apellidoPaterno: new FormControl(),
      apellidoMaterno: new FormControl(),
      nombreUsuario: new FormControl(),
      correo: this.correo,
      contrasena: new FormControl(),
      direccion: new FormControl(),
      CP: new FormControl(),
      municipio : new FormControl(),
      confcontrasena:new FormControl()
    });
   
    this.http.url=this.urlGetUsers;
    this.data=this.http.getMethod();
    this.data.subscribe(d=>{console.log(d);this.datos=d});
  }



  datos:any;
  info:any;  
  /*[]=[
    {id:1,estado:'Jalisco'},
    {id:2,estado:'Michoacsan'},
    {id:3,estado:'Tlaxcala'},
  ];*/
  
  onSubmit(){
    // if (this.datos.Contrasena.touched && this.EditUser.controls['confcontrasena'].touched) {
    //   console.log("holi");
    console.log(this.datos.Contrasena); 
    console.log(this.EditUser.get('confcontrasena').value)
      if (this.datos.Contrasena == this.EditUser.get('confcontrasena').value) {
        console.log(this.EditUser.value);
        let form = JSON.stringify(this.EditUser.value);
        console.log(form);
        this.http.url = this.urlPutUsers;
        this.http.putMethod(form).subscribe(d => {});
        this.router.navigate(['/user-info']);
      } else{
          console.log("pues no entra xd");
      }
    
    
    
    //}
  }



  getErrorMessage() {
    return this.correo.hasError('required') ? 'Debe ingresar un valor' :
        this.correo.hasError('email') ? 'Correo invalido' :
            '';
  }

  goToUserInfo(){
    this.router.navigate(['/user-info']);
  }
}


