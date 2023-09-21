import { Component, OnInit } from '@angular/core';
import { TodosService } from './todos.service';
import { Todos } from './todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  tareas: Todos[] = [];

  constructor(private serviciodetareas: TodosService) {}

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas(): void {
    this.serviciodetareas.traerTareas().subscribe((res: any) => {
      this.tareas = res;
  
      // Recorrer el array usando forEach
      this.tareas.forEach((tarea: Todos) => {
        // Hacer algo con cada tarea, por ejemplo, mostrar su nombre
        console.log(tarea.title);
      });
    });
  }
}
