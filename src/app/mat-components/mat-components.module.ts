import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';

import {MatGridListModule} from '@angular/material/grid-list';

import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]

  exports: [
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    MatGridListModule,
    MatCardModule,
    MatSelectModule

  ]
})
export class MatComponentsModule { }
