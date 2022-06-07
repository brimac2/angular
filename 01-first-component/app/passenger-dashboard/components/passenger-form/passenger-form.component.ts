import { importExpr } from "@angular/compiler/src/output/output_ast";
import { Component, Input } from "@angular/core";

import { Passenger } from "../../models/passenger.interface";
import { Baggage } from "../../models/baggage.interface";
@Component({
  selector: "passenger-form",
  styleUrls: ["passenger-form.component.scss"],
  template: `
    <form #form="ngForm" novalidate>

      <div>
        Passenger name:
        <input
          type="text"
          name="name"
          required
          #name="ngModel"
          [ngModel]="detail?.name"
        />
        <div class="error" *ngIf="name.errors?.required && name.dirty">
          Passenger name is required
        </div>
      </div>

      <div>
        Passenger ID:
        <input
          type="number"
          name="id"
          required
          #id="ngModel"
          [ngModel]="detail?.id"
        />
        <div class="error" *ngIf="id.errors?.required && id.dirty">
          Passenger ID is required
        </div>
      </div>

      <div>
        <label>
          <input
            type="checkbox"
            [value]="true"
            name="checkIn"
            [ngModel]="detail?.checkIn"
            (ngModelChange)="toggleCheckIn($event)"
          />
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

      <div>
        Luggage:
        <select name="baggage" [ngModel]="detail?.baggage">
          <option
            *ngFor="let item of baggage"
            [value]="item.key"
            [selected]="item.key === detail?.baggage"
          >
            {{ item.value }}
          </option>
        </select>
        <div>
          <!-- kitas budas kai zinome API -->
          <select name="baggage" [ngModel]="detail?.baggage">
            <option *ngFor="let item of baggage" [ngValue]="item.key">
              {{ item.value }}
            </option>
          </select>
        </div>
      </div>


<button type="submit" [disabled]="form.invalid">
  Update passenger
</button>

    </form>
  `,
})
export class PassengerFormComponent {
  @Input()
  detail: Passenger;

  baggage: Baggage[] = [
    {
      key: "none",
      value: "no baggage",
    },
    {
      key: "hand-only",
      value: "hand baggage",
    },
    {
      key: "hold-only",
      value: "hold baggage",
    },
  ];

  toggleCheckIn(checkIn: boolean) {
    if (checkIn) {
      this.detail.checkinDate = Date.now();
    }
  }
}
