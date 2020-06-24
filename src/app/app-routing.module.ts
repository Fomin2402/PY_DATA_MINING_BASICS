import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { SIDEBAR_LINKS } from './shell/sidebar-links';

const routes: Routes = [
  {
    path: "docs/:name",
    loadChildren: () =>
      import("./pages/docs/docs.module").then(
        (m: any) => m.DocsModule
      ),
  },
  {
    path: "**",
    redirectTo: `${SIDEBAR_LINKS[0].value}`,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
