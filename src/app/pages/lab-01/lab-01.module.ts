import { PdfViewerModule } from "ng2-pdf-viewer";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { Lab01RoutingModule } from "./lab-01-routing.module";
import { LabComponent } from "./lab/lab.component";

@NgModule({
  declarations: [LabComponent],
  imports: [CommonModule, Lab01RoutingModule, PdfViewerModule],
})
export class Lab01Module {}
