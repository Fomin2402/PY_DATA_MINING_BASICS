import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { GettingStartedComponent } from './getting-started.component';


const routes: Routes = [
  {
    path: '',
  component: GettingStartedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GettingStartedRoutingModule { }
