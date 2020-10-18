import { PdfViewerModule } from "ng2-pdf-viewer";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { DocsRoutingModule } from "./docs-routing.module";
import { DocsComponent } from "./docs.component";

@NgModule({
  declarations: [DocsComponent],
  imports: [CommonModule, DocsRoutingModule, PdfViewerModule],
})
export class DocsModule {}
