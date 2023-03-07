import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRippleModule} from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
//import {NgxQRCodeModule } from 'ngx-qrcode';
//nesesario para los formularios reactivos 
import { ReactiveFormsModule } from '@angular/forms';
//import { QRCodeComponent, QRCodeModule } from 'angularx-qrcode';
//import { QRCodeModule } from 'angularx-qrcode';
@NgModule({
  declarations: [],
  imports: [
  
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatTooltipModule,
    MatRippleModule,
    MatProgressSpinnerModule,
    MatSnackBarModule
    
  ]
})
export class SharedModule { }
