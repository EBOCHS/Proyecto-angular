import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuardChildGuard } from 'src/app/guards/guard-child.guard';
import { GuardLoginGuard } from 'src/app/guards/guard-login.guard';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { ReportesComponent } from './reportes/reportes.component';
import { CrearUsuariosComponent } from './usuarios/crear-usuarios/crear-usuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { canActivate:[GuardLoginGuard],
    canActivateChild:[GuardChildGuard],
    path:'',component:DashboardComponent,children:[
    {path:'usuarios',component:UsuariosComponent},
    {path: '',component:InicioComponent},
    {path: 'reportes',component:ReportesComponent},
    {path:'editUsuario/:id',component:CrearUsuariosComponent },
    {path:'crear-usuarios',component: CrearUsuariosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
