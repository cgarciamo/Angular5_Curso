import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MockLibrosComponent } from './mock-libros/mock-libros.component';
import { LibrosService } from './libros.service';


@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [MainComponent, MockLibrosComponent],
  providers: [LibrosService],
  exports: [MainComponent]
})
export class MainModule { }
