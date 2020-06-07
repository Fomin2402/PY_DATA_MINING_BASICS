import { PdfViewerModule } from "ng2-pdf-viewer";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy,
} from "@angular/common";

import { GettingStartedRoutingModule } from "./getting-started-routing.module";
import { GettingStartedComponent } from "./getting-started.component";

@NgModule({
  declarations: [GettingStartedComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: "/" },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  imports: [CommonModule, GettingStartedRoutingModule, PdfViewerModule],
})
export class GettingStartedModule {}
