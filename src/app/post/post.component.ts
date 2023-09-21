import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post';

@Component({
  selector: 'app-posts', // Cambiado el selector a 'app-posts' para que coincida con el nombre del componente
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit { // Cambiado el nombre de la clase a PostComponent
  usuarios: Post[] = [];

  constructor(private servicioUsuarios: PostService) {} // Cambiado el nombre del servicio a servicioUsuarios

  ngOnInit(): void {
    this.CargarUsuarios();
  }

  CargarUsuarios(): void {
    this.servicioUsuarios.traerUsuarios().subscribe((res: Post[]) => { // Cambiado 'any' a 'Post[]' para especificar el tipo
      this.usuarios = res;

      // Recorrer el array usando forEach
      this.usuarios.forEach((usuario: Post) => {
        // Hacer algo con cada tarea, por ejemplo, mostrar su nombre
        console.log(usuario.id);
      });
    });
  }
}