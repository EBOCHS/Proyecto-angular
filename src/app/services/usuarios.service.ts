import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface ListUsuarios {
  idUsuario : number;
  nombre : String;
  apellido : String;
  contrasena : String;
  correo : String;
  edad : number;
  telefono : number;
  direccion : String;
}

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  private urlUsuarios = 'http://localhost:8081';

  constructor(private http:HttpClient ) { }


  //metodo para obtener una lista de usuarios
  public getAllUsuarios():Observable<ListUsuarios[]>{
    return this.http.get<ListUsuarios[]>(this.urlUsuarios+'/usuarios/findAll');
  }
  //metodo para crear un nuevo usuario
  public createUser(usuarioNuevo: any):Observable<any>{
    return this.http.post(this.urlUsuarios+'/create/user',usuarioNuevo);
  }
  //metodo para actualizar un usuario
  public updateUsuario( usuarioUpdate : any ):Observable<any>{
    return this.http.post(this.urlUsuarios+"/update/user",usuarioUpdate);

  }

  //metodo para eliminar usuarios
  public deleteUser( usuarioDelte: any ):Observable<any>{
    return this.http.post(this.urlUsuarios+'/delete/User', usuarioDelte );
  }

  //metodo para traer un usuario 
  usurio : any = []; 

  public updateUsario(usuarioUnico : any ):Observable<any>{
    this.usurio = {
      "idUsuario": usuarioUnico
    }
        return this.http.post(this.urlUsuarios+'/usuario',this.usurio);

  }

  //METODO PARA LE LOGIN
  public autentificacionUsuario(dataUser: any){
      return this.http.post(this.urlUsuarios+'/usuario/login',dataUser);
  }
}
