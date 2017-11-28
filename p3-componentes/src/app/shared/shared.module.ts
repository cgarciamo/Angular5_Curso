import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieComponent } from './pie/pie.component';
import { CabezaComponent } from './cabeza/cabeza.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CabezaComponent, PieComponent],
  exports: [CabezaComponent, PieComponent]
})
export class SharedModule { }
