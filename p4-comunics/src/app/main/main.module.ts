import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MainComponent, PadreComponent, HijoComponent],
  exports: [MainComponent]
})
export class MainModule { }
