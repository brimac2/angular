import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppComponent } from "../app.component";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";

// parent component

import { PassengerViewerComponent } from "./containers/viewer/passenger-viewer.component";
import { PassengerDashboardComponent } from "./containers/passenger-dasboard/passenger-dashboard.component";
// child component
import { PassengerCountComponent } from "./components/passanger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";

// service
import { PassengerDashboardService } from "./models/passenger-dashboard.service";


@NgModule({
  declarations:[
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent,
    PassengerFormComponent,
    PassengerViewerComponent

  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  exports: [
PassengerViewerComponent
  ],
  providers:[
    PassengerDashboardService
  ]
})


export class PassengerDashboardModule{}
