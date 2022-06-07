import { Component, Input } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-form",
  styleUrls: ["passenger-form.component.scss"],
  template: `
    <form #form="ngForm" novalidate>
      {{ detail | json }}

      <div>
        Passenger name:
        <input type="text" name="name" [ngModel]="detail?.name" />
      </div>

      <div>
        Passenger ID:
        <input type="number" name="id" [ngModel]="detail?.id" />
      </div>

      <div>
        <label>
          <input
            type="radio"
            [value]="true"
            name="checkIn"
            [ngModel]="detail?.checkIn"
            (ngModelChange)="toggleCheckIn($event)"
          />
          Yes
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            [value]="false"
            name="checkIn"
            [ngModel]="detail?.checkIn"
          />
          No
        </label>
      </div>

      <div *ngIf="form.value.checkIn">
        Check in date:
        <input
          type="number"
          name="checkInDate"
          [ngModel]="detail?.checkInDate"
        />
      </div>

      {{ form.value | json }}
    </form>
  `,
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;
  toggleCheckIn(checkIn: boolean) {
    if (checkIn) {
      this.detail.checkinDate = Date.now();
    }
  }
}
