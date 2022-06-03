import { Component, OnChanges, EventEmitter, Input, Output, SimpleChanges, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";

@Component({
selector: 'passenger-detail;',
template:` <div>
  <span class="status" [class.checked-in]="detail.checkIn"></span>
<div *ngIf="editing">
  <input type="text"
   [value]="detail.name"
  (input)="onNameChange(name.value)"
  #name>
</div>
  <div *ngIf="!editing">
   {{detail.name}}
  </div>
<div class="date">
  Check in date:
   {{detail.checkinDate? (detail.checkinDate | date: 'yMMMMd' | uppercase): 'Not checked in' }}
  </div>
  <div class="children">
    Children: {{detail.children?.length || 0}}
  </div>
  <button (click) = "toggleEdit()">{{editing ? 'Done' : 'Edit'}}</button>
  <button (click) = "onRemove()">Remove</button>
</div>`
})

export class PassengerDetailComponent implements OnChanges, OnInit{
  @Input()
  detail: Passenger;

  @Output()
  edit: EventEmitter<any> = new EventEmitter();

  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  editing: boolean = false;



  constructor(){}

  ngOnChanges(changes)   {
    if (changes.detail){
      this.detail = Object.assign({}, changes.detail.currentValue)
    }
    console.log('ngOnChanges');
}


  ngOnInit() {
    console.log('ngOnInit');
  }


  onNameChange(value: string){
    this.detail.name = value;
  }

  toggleEdit(){
    if (this.editing){
      this.edit.emit(this.detail)
    }
    this.editing = ! this.editing;
  }
  onRemove(){
    this.remove.emit(this.detail);

  }
}
