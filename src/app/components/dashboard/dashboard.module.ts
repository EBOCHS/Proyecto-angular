import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NavbarComponent } from './navbar/navbar.component';

import { SharedModule } from '../shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuariosComponent } from './usuarios/crear-usuarios/crear-usuarios.component';
import { GuardLoginGuard } from 'src/app/guards/guard-login.guard';
import { GuardChildGuard } from 'src/app/guards/guard-child.guard';
@NgModule({
  declarations: [
    DashboardComponent,
    UsuariosComponent,
    NavbarComponent,
    InicioComponent,
    ReportesComponent,
    CrearUsuariosComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ],
  providers:[
    GuardLoginGuard,
    GuardChildGuard
  ]
})
export class DashboardModule { }
