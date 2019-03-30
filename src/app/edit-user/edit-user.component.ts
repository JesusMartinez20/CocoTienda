import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']

})
export class EditUserComponent implements OnInit {

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  constructor() { }

  ngOnInit() {
    
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