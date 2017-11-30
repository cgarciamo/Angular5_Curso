import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../libros.service';

@Component({
  selector: 'app-mock-libros',
  templateUrl: './mock-libros.component.html',
  styleUrls: ['./mock-libros.component.css']
})
export class MockLibrosComponent implements OnInit {
  sClave: string;
  aLibros: Array <String>;

  constructor(public librosService: LibrosService) { }

  ngOnInit() {
    this.sClave = '';
    this.aLibros = [];
  }

  // tslint:disable-next-line:one-line
  buscar(){
    this.sClave = '';
    this.aLibros = this.librosService.buscarLibros(this.sClave);
  }
