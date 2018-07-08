// Angular core
import { Component, Input } from '@angular/core';

// Sipi custom
import { Place } from './../place';

@Component({
  selector: 'place-hours-card-edit',
  templateUrl: './place-hours-card-edit.component.html'
})

export class PlaceHoursCardEditComponent {

  @Input() place: Place;

  rating;
  Arr = Array; // Array type captured in a variable
  num:number = 5;

}