import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Dropdown, DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {DashboardModule} from "./dashboard/dashboard.module";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {SharedModule} from "primeng/api";
import {SettingsModule} from "./settings/settings.module";
import {ProfileModule} from "./profile/profile.module";
import {HelpModule} from "./help/help.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MenubarModule,
    InputTextModule,
    SharedModule,
    FormsModule,
    BrowserModule,
    DashboardModule,
    SettingsModule,
    ProfileModule,
    HelpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
