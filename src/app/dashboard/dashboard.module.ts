import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {PrimeTemplate, SharedModule} from "primeng/api";
import { ContainersComponent } from './containers/containers.component';
import {ToastModule} from "primeng/toast";
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {RippleModule} from "primeng/ripple";
import {FileUploadModule} from "primeng/fileupload";
import {TableModule} from "primeng/table";
import {RatingModule} from "primeng/rating";
import {FormsModule} from "@angular/forms";
import {DialogModule} from "primeng/dialog";
import {InputNumberModule} from "primeng/inputnumber";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {RadioButtonModule} from "primeng/radiobutton";
import {DropdownModule} from "primeng/dropdown";
import { ImagesComponent } from './images/images.component';
import {HttpClientModule} from "@angular/common/http";
import {CardModule} from "primeng/card";


@NgModule({
  declarations: [
    DashboardComponent,
    ContainersComponent,
    ImagesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    InputTextModule,
    DashboardRoutingModule,
  ]
})
export class DashboardModule { }
