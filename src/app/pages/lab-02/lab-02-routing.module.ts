import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { SecondLabaComponent } from './second-laba/second-laba.component';

const routes: Routes = [
  {
    path: '',
    component: SecondLabaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lab02RoutingModule { }
