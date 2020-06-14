import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "getting-started",
    loadChildren: () =>
      import("./pages/getting-started/getting-started.module").then(
        (m: any) => m.GettingStartedModule
      ),
  },
  {
    path: "lab-01",
    loadChildren: () =>
      import("./pages/lab-01/lab-01.module").then((m: any) => m.Lab01Module),
  },
  {
    path: "lab-02",
    loadChildren: () =>
      import("./pages/lab-02/lab-02.module").then((m: any) => m.Lab02Module),
  },
  {
    path: "**",
    redirectTo: "getting-started",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
