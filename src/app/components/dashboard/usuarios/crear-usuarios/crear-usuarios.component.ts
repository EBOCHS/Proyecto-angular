import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private fb: FormBuilder,private usuarioServices : UsuariosService, private router: Router, private oRouter: ActivatedRoute  ) { 

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
      Swal.fire({
        icon: 'success',
        title: 'Creado',
        text: 'Se Agrego Correctamente'
      })
      this.router.navigate(['/dashboard/usuarios']);
    },
    error=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio Mal Al crear el Usuario!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }); 
  }

  editarUsuario(){
    //console.log(this.formulario.value);
    this.usuarioServices.updateUsuario(this.formulario.value).subscribe(res=>{
      Swal.fire({
        icon: 'success',
        title: 'Actualizado!!',
        text: 'Se Actualizo Correctamente'
      })
      this.router.navigate(['/dashboard/usuarios']);
    },
    error=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal Al Actualizar!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
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
}
