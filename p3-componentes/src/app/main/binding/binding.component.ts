import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  sNombre: string;

  constructor() { }

  ngOnInit() {
    this.sNombre = 'Pepe';
  }

  // tslint:disable-next-line:one-line
  borrar(){
    this.sNombre = '';
  }

}
