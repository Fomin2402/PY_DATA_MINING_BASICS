import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DocsComponent } from './docs.component';

const routes: Routes = [
  {
    path: '',
  component: DocsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocsRoutingModule { }
