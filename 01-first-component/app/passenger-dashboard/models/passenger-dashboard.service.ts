import { Passenger } from "./passenger.interface";

export class PassengerDashboardService {
  constructor(){}


getPassengers(): Passenger[] {
return [{
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

}