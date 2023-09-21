import { Component, OnInit } from '@angular/core';
import { CommentsService } from './comments.service';
import { Comments } from './comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})

export class CommentsComponent implements OnInit {
  comentarios: Comments[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private commentservice: CommentsService) {}

  ngOnInit(): void {
    this.cargarComments();
  }

  cargarComments(): void {
    this.commentservice.traerCommenst().subscribe((res: any) => {

      //Validar los datos  que trae el api 
      console.log('Respuesta del API:', res);

      this.comentarios = res;

      this.comentarios.forEach((comentario : Comments) => {
        console.log(comentario.body);
      });
    });
  }
}
