import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import {MatLegacySnackBar as MatSnackBar} from '@angular/material/legacy-snack-bar';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  styles: [
    `
         .example-pizza-party {
           color: hotpink;
         }
       `,
  ]
})
export class LoginComponent implements OnInit {
  usuario : any;
  formulario : UntypedFormGroup;
  durationInSeconds = 5;
  
  valLoading = false;
  constructor(private  loginServices: UsuariosService ,
     private fb : UntypedFormBuilder, private rout : Router,
     private _snackBar: MatSnackBar  ) { 
      this.formulario = this.fb.group({
        nombre : ['', Validators.required],
        contrasena: ['', Validators.required] 
      });

   }

  ngOnInit(): void {
    this.algoritmos();
    
  }
  
usuarioIngresando(){
  console.log(this.formulario.value);
  this.loginServices.autentificacionUsuario(this.formulario.value).subscribe(resp=>{
    console.log(resp);
    if(resp===true){
      this.loading();
    }else{
      this.error();
      this.rout.navigate(['']);
      this.formulario.reset();
    }
  })
}

loading(){
  this.valLoading = true;
  setTimeout(()=>{
    this.rout.navigate(['dashboard']);
  },1500)
}
algoritmos(){
 //ALGORITMOS DE CALCULO DE UN FACTORIAL
  let num = 4;
  let resFactorial = 1;
  for(let i=1; i<=num ; i++){
    resFactorial = resFactorial*i;
    //console.log(resFactorial);
  }
  console.log('********El factorial de:'+num+' Es:'+resFactorial+"*******");
//algoritmo de fibonacci 1,1,2,3,5,8,13

  let numFibo = 7;
  let fibo1 = 1;
  let fibo2 = 1;
  
  for(let i = 2 ; i<numFibo ; i++  ){
    //console.log(fibo2+",");
    fibo2 = fibo1+fibo2;
    fibo1 = fibo2 - fibo1;
  }
  console.log("El fibonacci de: "+numFibo +" Es:"+ fibo2);
}
error(){
  this._snackBar.open("Usuario o Contraseña incorrectos!!!",'',{
    horizontalPosition:'end' ,
    verticalPosition:'top', 
    duration: 5000,
    panelClass: ['redNoMatch']
  })
}

}
