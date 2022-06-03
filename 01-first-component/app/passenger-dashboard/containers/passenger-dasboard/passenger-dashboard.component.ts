import { Component, OnInit, Output } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";


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
  constructor(){}
  ngOnInit() {
    this.passengers=[{
      id: 1,
      name: 'Maka',
      checkIn: true,
      checkinDate: 2020204,
      children: null
    },
   {
     id: 2,
     name: 'Lala',
     checkIn: false,
     checkinDate: null,
     children:[{name: 'Ted', age: 12}, {name: 'Chloe', age: 4}]
   }];
  }


handleEdit(event: Passenger) {
  this.passengers = this.passengers.map((passenger: Passenger) =>{
    if (passenger.id === event.id) {
  passenger = Object.assign({}, passenger, event);
    }
    return passenger;
  })

}

handleRemove(event: Passenger){
  this.passengers = this.passengers.filter((passenger: Passenger) => {
    return passenger.id !== event.id;
  })
}
}
