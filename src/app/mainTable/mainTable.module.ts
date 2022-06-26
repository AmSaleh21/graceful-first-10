import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableModule} from "primeng/table";
import {CheckboxModule} from "primeng/checkbox";
import {FormsModule} from "@angular/forms";

import { VerticalTextComponent } from './vertical-text/vertical-text.component';
import { CheckTableComponent } from "./check-table/check-table.component";
import { TableIndexComponent } from './table-index/table-index.component';

@NgModule({
  declarations: [
    CheckTableComponent,
    VerticalTextComponent,
    TableIndexComponent
  ],
  exports: [
    TableIndexComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    CheckboxModule,
    FormsModule,
  ]
})
export class MainTableModule { }
