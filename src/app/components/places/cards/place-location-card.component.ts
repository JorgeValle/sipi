// Angular core
import { Component, Input } from '@angular/core';

// Sipi custom
import { Place } from './../place';

@Component({
  selector: 'place-location-card',
  templateUrl: './place-location-card.component.html'
})

export class PlaceLocationCardComponent {

  @Input() place: Place;

  rating;
  Arr = Array; // Array type captured in a variable
  num:number = 5;

  /**
   * 
   */
  toggleEdit() {



  }

}