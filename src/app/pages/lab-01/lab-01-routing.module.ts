import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { LabComponent } from "./lab/lab.component";

const routes: Routes = [
  {
    path: "",
    component: LabComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lab01RoutingModule {}
