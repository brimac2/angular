import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// containers
import { PassengerDashboardComponent } from './passenger-dashboard/containers/passenger-dasboard/passenger-dashboard.component';
// components
import { PassengerDetailComponent } from './passenger-dashboard/components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from './passenger-dashboard/components/passanger-count/passenger-count.component';
// service
import { PassengerDashboardService } from './passenger-dashboard/models/passenger-dashboard.service';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    PassengerDashboardComponent,
    PassengerDetailComponent,
    PassengerCountComponent
  ],
  providers: [
    PassengerDashboardService
  ]
})
export class AppModule {}
