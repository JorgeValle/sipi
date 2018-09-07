// Angular core
import { Component, Input } from '@angular/core';

// Sipi custom
import { Place } from './../place';

@Component({
  selector: 'place-location-card-edit',
  templateUrl: './place-location-card-edit.component.html'
})

export class PlaceLocationCardEditComponent {

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