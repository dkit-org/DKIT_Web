import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {ContainersComponent} from "./containers/containers.component";
import {ImagesComponent} from "./images/images.component";

const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {path: "containers", component: ContainersComponent},
      {path: "images", component: ImagesComponent},
      {path: "", redirectTo: "images", pathMatch: "full"}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
