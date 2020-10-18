import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DependenciesRoutingModule } from './dependencies-routing.module';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { DependenciesComponent } from './dependencies.component';

@NgModule({
  declarations: [DependenciesComponent],
  imports: [
    CommonModule,
    DependenciesRoutingModule,
    SharedModule
  ]
})
export class DependenciesModule { }
