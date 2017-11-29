import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template:` 
    <div class="container">
     <article class="row alto">
       <app-form-td class="row-12"></app-form-td>
       <app-form-md class="row-12"></app-form-md>
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
