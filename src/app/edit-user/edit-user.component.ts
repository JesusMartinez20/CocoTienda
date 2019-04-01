import { Component, OnInit } from '@angular/core';
import {Validators, FormGroup, FormControl} from '@angular/forms';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']

})
export class EditUserComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor() { }

  EditUser : FormGroup;
  ngOnInit() {
    this.EditUser = new FormGroup({
      FirstName: new FormControl(),
      LastName: new FormControl(),
      UserName: new FormControl(),
      Email: new FormControl(),
      Password: new FormControl(),
      Address: new FormControl(),
      CP: new FormControl(),
      City: new FormControl(),
      States: new FormControl()
    });
  }

  onSubmit(){
    console.log(this.EditUser.value)
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