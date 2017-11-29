import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  aTareas: Array<String>;
  sTarea: String;

  constructor() { }

  ngOnInit() {
    if (localStorage.getItem('tareas')) {
      this.aTareas = JSON.parse(localStorage.getItem('tareas'));
    } else {
      this.aTareas = [];
    }

    this.sTarea = '';
  }

  addTareas() {
    this.aTareas.push (this.sTarea);
    this.sTarea = '';
    this.actualizarStrogage ();
  }

  borrar(i: number) {
    this.aTareas.splice(i, 1);
    this.actualizarStrogage ();
  }

  private actualizarStrogage () {
    localStorage.setItem('tareas', JSON.stringify(this.aTareas));
  }

}
