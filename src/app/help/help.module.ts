import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpRoutingModule } from './help-routing.module';
import { AboutComponent } from './about/about.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';


@NgModule({
  declarations: [
    AboutComponent,
    GettingStartedComponent
  ],
  imports: [
    CommonModule,
    HelpRoutingModule
  ]
})
export class HelpModule { }
