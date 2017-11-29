import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  sNonmre: string;
  nPrecio: number;
  nValor: number;
  dFecha: Date;
  oDatos: object;

  constructor() { }

  ngOnInit() {
    this.sNonmre = 'Pepe perez';
    this.nPrecio = 25.5;
    this.nValor = 5635.45343;
    this.dFecha = new Date ();

    this.oDatos = {
      sNonmre : 'Pepe perez',
      nPrecio : 25.5,
      nValor : 5635.45343,
      dFecha : new Date ()
    };
  }

}
