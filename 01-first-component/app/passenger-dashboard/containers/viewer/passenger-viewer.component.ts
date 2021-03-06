import { Component, OnInit } from "@angular/core";
import { PassengerDashboardService } from "../../models/passenger-dashboard.service";
import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-viewer",
  styleUrls: ["passenger-viewer.component.scss"],
  template: `
    <div>
      <passenger-form [detail]="passenger" (update)="onUpdatePassenger()"></passenger-form>
    </div>
  `
})
// sitoj vietoj bindinam su form passangeriu
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;
  constructor(private passengerService: PassengerDashboardService) {}
  ngOnInit() {
    this.passengerService
      .getPassenger(1)
      .subscribe((data: Passenger) => (this.passenger = data));
  }

  onUpdatePassenger(event: Passenger) {
    this.passengerService
    .updatePassenger(event)
    .subscribe((data: Passenger) => {
      this.passenger = Object.assign({}, this.passenger, event)
    });
}
}
