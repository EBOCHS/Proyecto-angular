import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ListUsuarios, UsuariosService } from 'src/app/services/usuarios.service';
import Swal from 'sweetalert2';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  
  listUsuarios : any =[];

  constructor(private usuarios: UsuariosService  ) { 
    
  }

  ngOnInit(): void {
    this.usuarios.getAllUsuarios().subscribe(resp=>{
      this.dataSource.data = resp as ListUsuarios[];
     console.log(resp);
    })
  }

  ELEMENT_DATA: ListUsuarios[] = [];
  dataSource = new MatTableDataSource<ListUsuarios> (this.ELEMENT_DATA);

  displayedColumns: string[] = ['id', 'nombre', 'Apellido', 'Contraseña','Correo','Telefono','Direccion','QR','Aciones'];

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUsuario( usuarioDelete : any){
    Swal.fire({
      title: 'Estas Seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarios.deleteUser(usuarioDelete).subscribe(resul=>{
          if(resul){
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Algo salió mal!',
              footer: '<a href="">Why do I have this issue?</a>'
            })
          }
        });
        
      }
    })
  }


}
