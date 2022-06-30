import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';
import {RouterModule} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    AboutComponent,
    NavComponent,
    NotFoundComponent
  ],
  exports: [
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ButtonModule,
    RippleModule
  ]
})
export class CoreModule { }
