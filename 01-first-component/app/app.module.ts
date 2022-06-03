import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PassengerDashboardComponent } from './passenger-dashboard/containers/passenger-dasboard/passenger-dashboard.component';
import { PassengerDetailComponent } from './passenger-dashboard/components/passenger-detail/passenger-detail.component';
import { PassengerCountComponent } from './passenger-dashboard/components/passanger-count/passenger-count.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    PassengerDashboardComponent,
    PassengerDetailComponent,
    PassengerCountComponent
  ]
})
export class AppModule {}
