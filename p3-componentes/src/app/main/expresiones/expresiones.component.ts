import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expresiones',
  templateUrl: './expresiones.component.html',
  styleUrls: ['./expresiones.component.css']
})
export class ExpresionesComponent implements OnInit {
  sNumber: number;
  constructor() { }

  ngOnInit() {
      this.sNumber = 22;
  }

}
