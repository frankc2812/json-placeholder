import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Users } from './users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  implements OnInit{
  usuarios: Users[] = [];

  constructor(private serviciodeusuarios: UsersService){}

  ngOnInit(): void {
      this.CargarUsuarios();
  }

  CargarUsuarios(): void {
    this.serviciodeusuarios.traerUsuarios().subscribe((res: any) =>{
      this.usuarios= res;

      // Recorrer el array usando forEach
      this.usuarios.forEach((usuario: Users) =>{
      // Hacer algo con cada tarea, por ejemplo, mostrar su nombre
      console.log(usuario.address.city);
      })
    })
  }
}