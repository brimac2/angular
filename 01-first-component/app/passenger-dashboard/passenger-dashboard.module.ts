import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "../app.component";
import { PassengerDashboardComponent } from "./containers/passenger-dasboard/passenger-dashboard.component";
import { PassengerCountComponent } from "./components/passanger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
@NgModule({
  declarations:[
    AppComponent,
    PassengerDashboardComponent,
    PassengerCountComponent,
    PassengerDetailComponent

  ],
  imports: [
    CommonModule,
    BrowserModule,
    PassengerDashboardModule
  ],
  exports: [
PassengerDashboardComponent
  ]
})
export class PassengerDashboardModule{}
