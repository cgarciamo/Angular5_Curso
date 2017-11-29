import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template:` <div class="container">
  <article class="row alto">
    <app-tareas class="col-12"></app-tareas>

    <app-pipes class="col-12"></app-pipes>

  </article>
 </div>`,
  styles: [
    '.alto{min-height: 10rem}'
  ]
})

export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
