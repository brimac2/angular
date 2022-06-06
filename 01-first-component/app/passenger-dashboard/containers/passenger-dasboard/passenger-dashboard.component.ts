import { Component, OnInit, Output } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import { PassengerDashboardService } from "../../models/passenger-dashboard.service";
import { ThrowStmt } from "@angular/compiler/src/output/output_ast";


@Component ({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
  <div>
    <passenger-count
    [items]="passengers">
  </passenger-count>
  <div *ngFor="let passenger of passengers">
    {{passenger.name}}
  </div>
    <passenger-detail
*ngFor="let passenger of passengers"
 [detail]="passenger"
 (edit)="handleEdit($event)"
 (remove)="handleRemove($event)">
    </passenger-detail>
  </div>`
})

export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor(private passengerService: PassengerDashboardService  ){}


  ngOnInit() {
   this.passengerService
   .getPassengers()
   .subscribe((data: Passenger[]) => this.passengers = data);
  }


handleEdit(event: Passenger) {
  this.passengerService
  .updatePassenger(event)
  .subscribe((data: Passenger) => {
    this.passengers = this.passengers.map((passenger: Passenger) =>{
      if (passenger.id === event.id) {
    passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    })
  })
  this.passengers = this.passengers.map((passenger: Passenger) =>{
    if (passenger.id === event.id) {
  passenger = Object.assign({}, passenger, event);
    }
    return passenger;
  })

}



handleRemove(event: Passenger){
  this.passengerService
  .removePassenger(event)
  .subscribe((data:Passenger) => {
  this.passengers = this.passengers.filter((passenger: Passenger) => {
    return passenger.id !== event.id;
  });
});
}
}
function subscribe(arg0: (data: Passenger[]) => void) {
  throw new Error("Function not implemented.");
}

