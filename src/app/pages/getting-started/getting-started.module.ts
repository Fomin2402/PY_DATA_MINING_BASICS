import { PdfViewerModule } from "ng2-pdf-viewer";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { GettingStartedRoutingModule } from "./getting-started-routing.module";
import { GettingStartedComponent } from "./getting-started.component";

@NgModule({
  declarations: [GettingStartedComponent],
  imports: [CommonModule, GettingStartedRoutingModule, PdfViewerModule],
})
export class GettingStartedModule {}
