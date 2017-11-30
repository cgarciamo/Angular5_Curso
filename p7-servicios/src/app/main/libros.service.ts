import { Injectable } from '@angular/core';

@Injectable()
export class LibrosService {

  aDatos: Array<string>;


  constructor() {
    this.aDatos = [
      'libro 1', 'libro 2', 'libro 3', 'libro 4', 'libro 5'
    ];
   }

  buscarLibros(clave: string) {
    return this.aDatos;
  }

  buscarLibrosAsync(clave: string) {
    return new Promise((resolve, reject) => {
      setTimeout ( () => {
          resolve (this.aDatos);
      }
        , 1000 );
    });
    // this.aDatos;
  }

}
