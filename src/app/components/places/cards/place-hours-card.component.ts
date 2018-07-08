// Angular core
import { Component, Input } from '@angular/core';

// Sipi custom
import { Place } from './../place';

@Component({
  selector: 'place-hours-card',
  templateUrl: './place-hours-card.component.html'
})

export class PlaceHoursCardComponent {

  @Input() place: Place;

  rating;
  Arr = Array; // Array type captured in a variable
  num:number = 5;

}