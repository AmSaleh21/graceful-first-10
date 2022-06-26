import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TableIndexComponent} from "./mainTable/table-index/table-index.component";
import {AboutComponent} from "./core/about/about.component";
import {ReadComponent} from "./info/read/read.component";
import {GraceComponent} from "./info/grace/grace.component";


const routes: Routes = [
  {path: "", component:TableIndexComponent},
  {path: "about", component:AboutComponent},
  {path: "read", component:ReadComponent},
  {path: "grace", component:GraceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
