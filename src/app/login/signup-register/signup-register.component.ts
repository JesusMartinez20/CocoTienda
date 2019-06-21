import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './../../Services/login.service';
import { Router } from '@angular/router'
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';
import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-signup-register',
  templateUrl: './signup-register.component.html',
  styleUrls: ['./signup-register.component.css'],
  providers: [DatePipe]
})
export class SignupRegisterComponent implements OnInit {
  urlP="/usuarios"
  
  email = new FormControl('', [Validators.required, Validators.email]);
  myDate = new Date();

  cardState:boolean=false;
  
  
  constructor(private http:LoginService, private router : Router, private datePipe: DatePipe, private snack:MatSnackBar) { }
  Usersignup : FormGroup;
  ngOnInit() {
    this.Usersignup = new FormGroup({
        nombre: new FormControl(),
        apellidoPaterno: new FormControl(),
        apellidoMaterno: new FormControl(),
        nombreUsuario: new FormControl(),
        contrasena: new FormControl(),
        confirmacion: new FormControl(),
        correo: this.email,
        CP: new FormControl(),
        ciudad: new FormControl(),
        direccionYNumero: new FormControl(),
        tarjeta: new FormControl(),
        fechaExpiracion: new FormControl()
    });

  }

  onSubmit(){
    console.log(this.Usersignup.value);
    console.log(formatDate(this.myDate, 'yyyy-MM-dd', 'en'));
    console.log(this.myDate);
    console.log(this.Usersignup.value.fechaExpiracion)
    let form = JSON.stringify(this.Usersignup.value)
    console.log(form);
    this.http.url=this.urlP;
    //this.http.postMethod(form);
    localStorage.setItem('userId', '');
    localStorage.getItem('userId');
    if(true){
      this.http.createUser(form).subscribe(token=>{
        localStorage.setItem('token',token.token);
        if (token.userType === 'Usuario') {
          localStorage.setItem('admin', 'false');
        }
        else {
          localStorage.setItem('admin', 'true');
        }
        
        if(localStorage.getItem('source') == 'cart'){
          localStorage.removeItem('source'); 
          this.router.navigate(['/cart']);
        }else{
          this.router.navigate(['/user-info']);
        }

      });
    }else{
      this.snack.open("Información de tarjeta invalida", "OK",{duration:2000});
    }
  }
  
  getErrorMessage() {
    return this.email.hasError('required') ? '' :
        this.email.hasError('email') ? 'Correo invalido' :
            '';
  }

 cardConfirmation(){
   let url="";
   console.log(this.Usersignup.get('fechaExpiracion').value); 
   console.log(this.Usersignup.get('tarjeta').value); 
   this.http.url=url;
   this.http.getMethod().subscribe((d:boolean)=>{
     this.cardState=true;
   })
 }


  private passwordsMatch = (_form: FormGroup): boolean => {
    if (_form.controls['contrasena'].touched && _form.controls['confirmacion'].touched) {
        if (_form.value.contrasena === _form.value.confirmacion) {
            return true;
        } else {
            return false;
        }
    }
    return true;
}

private validCP = (_form: FormGroup): boolean => {
  if (_form.controls['CP'].touched) {
      if (_form.value.CP > 1000 && _form.value.CP < 99999) {
          return true;
      } else {
          return false;
      }
  }
  return true;
}


private validExpireDate = (_form: FormGroup): boolean => {
    if (_form.controls['fechaExpiracion'].touched) {
      var yourYear = parseInt(formatDate(_form.value.fechaExpiracion, 'yyyy', 'en'), 10);
      console.log(yourYear); 
       
      var myYear = parseInt(formatDate(this.myDate, 'yyyy-MM-dd', 'en'), 10);
      console.log(myYear); 
      formatDate(_form.value.fechaExpiracion, 'yyyy', 'en');
      if (myYear < yourYear) {
          return true;
      } else {
          var yourMonth = parseInt(formatDate(_form.value.fechaExpiracion, 'MM', 'en'), 10); 
          var myMonth = parseInt(formatDate(this.myDate, 'MM', 'en'), 10);        
          if(myMonth < yourMonth){
            return true; 
          }else{
            var yourDay = parseInt(formatDate(_form.value.fechaExpiracion, 'dd', 'en'), 10); 
            var myDay = parseInt(formatDate(this.myDate, 'dd', 'en'), 10);        
            if(myDay < yourDay){
              return true;
            }else{
              return false;
            }
          }
      }
  }
  return true;
}

/*
 validarSiNumero(numero){
    if (!/^([0-9])*$/.test(numero))
      alert("El valor " + numero + " no es un número");
  }*/


 
}