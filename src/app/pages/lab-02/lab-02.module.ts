import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { Lab02RoutingModule } from './lab-02-routing.module';
import { SecondLabaComponent } from './second-laba/second-laba.component';


@NgModule({
  declarations: [SecondLabaComponent],
  imports: [
    CommonModule,
    Lab02RoutingModule,
    PdfViewerModule
  ]
})
export class Lab02Module { }
