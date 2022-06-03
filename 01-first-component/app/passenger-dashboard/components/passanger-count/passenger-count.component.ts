import { Component, Input } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";


@Component({
selector: 'passenger-count',
template:` <div>
   <h3>Airline Passengers!</h3>
   <div>
     Total passengers: {{items.length}}
</div>
<div>
     Total checked in: {{checkInCount() }}/{{items.length}}
</div>
</div>
`
})

export class PassengerCountComponent{
  @Input()
  items: Passenger[];
checkInCount():number {
  if (!this.items) return;
  return this.items.filter((passenger: Passenger) =>  passenger.checkIn).length;
  }
  constructor(){}
}



