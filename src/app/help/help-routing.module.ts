import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GettingStartedComponent} from "./getting-started/getting-started.component";
import {AboutComponent} from "./about/about.component";

const routes: Routes = [
  {
    path: 'help',
    children: [
      {path: 'getting-started', component: GettingStartedComponent},
      {path: 'about', component: AboutComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HelpRoutingModule { }
