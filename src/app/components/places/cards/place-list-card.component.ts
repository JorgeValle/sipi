// Angular core
import { Component, Input } from '@angular/core';

// Sipi custom
import { Place } from './../place';

@Component({
  selector: 'place-list-card',
  templateUrl: './place-list-card.component.html'
})

export class PlaceListCardComponent {

  @Input() place: Place;



  rating;
  Arr = Array; // Array type captured in a variable
  num:number = 5;

  /**
   * 
   */
  mouseOver(event):void {

    console.log(`Mouse went over card ${event}`);

  }

  /**
   * @param event 
   * 
   */
  mouseOut(event): void {

    console.log(`Mouse left card ${event}`);
  }

}