import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  @ViewChild('nombre2') sNombre2: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log (this.sNombre2);
    this.sNombre2.nativeElement.value = 'PAco';
  }

}
