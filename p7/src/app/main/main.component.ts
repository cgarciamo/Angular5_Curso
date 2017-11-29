import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <p class="alto text-center">
      main works!
    </p>
  `,
  styles: [
    '.alto{min-height: 10rem}'
  ]
})

export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
