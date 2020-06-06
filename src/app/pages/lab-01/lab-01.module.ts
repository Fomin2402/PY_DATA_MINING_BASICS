import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Lab01RoutingModule } from "./lab-01-routing.module";
import { LabComponent } from "./lab/lab.component";

@NgModule({
  declarations: [LabComponent],
  imports: [CommonModule, Lab01RoutingModule],
})
export class Lab01Module {}
