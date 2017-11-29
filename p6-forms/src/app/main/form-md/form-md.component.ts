import { Component, OnInit } from '@angular/core';
import { ImpresoraModel, DepartamentoModel } from '../datos.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-md',
  templateUrl: './form-md.component.html',
  styleUrls: ['./form-md.component.css']
})
export class FormMdComponent implements OnInit {
  aImpresoras: Array <ImpresoraModel>;
  aDepartamentos: Array <DepartamentoModel>;
  formulario: FormGroup;

  constructor() { }

  ngOnInit() {

        this.aImpresoras = [
          {id: 1, nombre: 'imp1'},
          {id: 2, nombre: 'imp2'},
          {id: 3, nombre: 'imp3'}
        ];

        this.aDepartamentos = [
          {id: 1, nombre: 'Ventas'},
          {id: 2, nombre: 'Marketing'},
          {id: 3, nombre: 'Compras'},
          {id: 4, nombre: 'Sistemas'}
        ];

        this.formulario = new FormGroup({
          name: new FormControl ('', [Validators.required, Validators.minLength(3)]),
          apellidos: new FormControl (),
          telefono: new FormControl ('', [Validators.required, Validators.pattern('^\d{9}$')]),
          impresora: new FormControl (),
          isColor: new FormControl (true),
          isClaro: new FormControl (),
          departamento: new FormControl ()
        });

        console.log (this.formulario);
  }

  enviarForm() {

  }

  borrarForm() {

  }


}
