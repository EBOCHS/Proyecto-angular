import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ListUsuarios, UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-usuarios',
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})
export class CrearUsuariosComponent implements OnInit {
   id : String| null;
  titulo = 'Agregar Usuario';
  mensaje : String ="";

  formulario = this.fb.group({
    idUsuario: [''],
    nombre : ['',Validators.required],
    apellido : ['', Validators.required],
    contrasena : ['',Validators.required],
    correo : ['', Validators.required],
    edad:['',Validators.required],
    telefono : ['', Validators.required],
    direccion : ['', Validators.required]
  });
  constructor(private fb: UntypedFormBuilder,
    private usuarioServices : UsuariosService,
    private router: Router,
    private oRouter: ActivatedRoute,
    private  _snackBar: MatSnackBar   ) { 

      this.id = this.oRouter.snapshot.paramMap.get('id');
      console.log(this.id);
   }

  ngOnInit(): void {
    this.esEditar();
  }
  
 
  
 
  creandoEditando(){
    if(this.id===null){
      this.crear_usuario();
    }else{
      this.editarUsuario();
    }
  }
  crear_usuario(){
   //console.log(this.formulario.value);
    this.usuarioServices.createUser (this.formulario.value).subscribe(resp=>{
      this.confirmacion();
      this.router.navigate(['/dashboard/usuarios']);
    },
    error=>{
      this.error();
    }); 
  }

  editarUsuario(){
    //console.log(this.formulario.value);
    this.usuarioServices.updateUsuario(this.formulario.value).subscribe(res=>{
     this._snackBar.open('Usuario Actualizado Correctamente!!','',{
       verticalPosition:'bottom',
       horizontalPosition:'end',
       duration:5000,
       panelClass:['succesNoMatch']
     });
      this.router.navigate(['/dashboard/usuarios']);
    },
    error=>{
      this._snackBar.open('Error Al Actualizar Usuario!!','',{
        verticalPosition:'bottom',
        horizontalPosition:'end',
        duration:5000,
        panelClass:['redNoMatch']
      });
    });
  }


  esEditar(){
    if (this.id!=null){
      this.titulo = 'Editar Usuario';
      this.usuarioServices.updateUsario(this.id).subscribe(res=>{
        this.formulario = this.fb.group({
          idUsuario: [res.idUsuario],
          nombre : [res.nombre ,Validators.required],
          apellido : [res.apellido , Validators.required],
          contrasena : [res.contrasena ,Validators.required],
          correo : [res.correo, Validators.required],
          edad:[res.edad ,Validators.required],
          telefono : [res.telefono, Validators.required],
          direccion : [res.direccion, Validators.required]
        });
      })
    }
  }
  confirmacion(){
    this._snackBar.open('Usuario Creado Correctamente!!!','',{
      verticalPosition:'bottom',
      horizontalPosition:'end',
      duration: 5000,
      panelClass:['succesNoMatch']
    })
  }

  error(){
    this._snackBar.open('Error Al crear Usuario','',{
      horizontalPosition:'end',
      verticalPosition:'bottom',
      duration:5000,
      panelClass:['redNoMatch']
    })

  }

}
