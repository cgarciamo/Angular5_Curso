import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormMdComponent } from './form-md/form-md.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MainComponent, FormTdComponent, FormMdComponent],
  exports: [MainComponent]
})
export class MainModule { }
