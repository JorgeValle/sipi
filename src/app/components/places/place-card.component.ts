// Angular core
import { Component, Input } from '@angular/core';

// Sipi custom
import { Place } from './place';

@Component({
  selector: 'place-card',
  templateUrl: './place-card.component.html'
})

export class PlaceCardComponent {

  @Input() place: Place;

  rating;
  Arr = Array; // Array type captured in a variable
  num:number = 5;

}