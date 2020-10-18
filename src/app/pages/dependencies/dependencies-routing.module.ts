import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { DependenciesComponent } from './dependencies.component';


const routes: Routes = [
    {
        path: '',
        component: DependenciesComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DependenciesRoutingModule { }
