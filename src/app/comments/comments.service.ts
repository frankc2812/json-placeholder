import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { Comments } from './comments';

const direccionweb = 'https://jsonplaceholder.typicode.com/comments';

@Injectable({
  providedIn: 'root'
})

export class CommentsService {

  comments: Comment[] = [];

  constructor(private elquetraedatos: HttpClient) { }

  traerCommenst(): Observable<any> {
    return this.elquetraedatos
      .get(direccionweb)
      .pipe(catchError(this.manejarError));
  }

  private manejarError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocurrió un error:', error.error.message);
    } else {
      console.error(`Código de error ${error.status}, mensaje: ${error.error}`);
    }
    return console.log('algo pasó por favor intente más tardecito');
  }
}
