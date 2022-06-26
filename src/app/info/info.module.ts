import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadComponent } from './read/read.component';
import { GraceComponent } from './grace/grace.component';



@NgModule({
  declarations: [
    ReadComponent,
    GraceComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InfoModule { }
