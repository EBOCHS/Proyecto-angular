import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyButtonModule as MatButtonModule} from '@angular/material/legacy-button';
import {MatLegacyTableModule as MatTableModule} from '@angular/material/legacy-table';
import {MatLegacyPaginatorModule as MatPaginatorModule} from '@angular/material/legacy-paginator';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatLegacyTooltipModule as MatTooltipModule} from '@angular/material/legacy-tooltip';
import {MatRippleModule} from '@angular/material/core';
import {MatLegacyProgressSpinnerModule as MatProgressSpinnerModule} from '@angular/material/legacy-progress-spinner';
import {MatLegacySnackBarModule as MatSnackBarModule} from '@angular/material/legacy-snack-bar';
//import {NgxQRCodeModule } from 'ngx-qrcode';
//nesesario para los formularios reactivos 
import { ReactiveFormsModule } from '@angular/forms';
//forceimport { QRCodeComponent, QRCodeModule } from 'angularx-qrcode';
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
