// Angular core
import { Component, Input } from '@angular/core';

// Sipi custom
import { AmPmPipe } from '../../../pipes/ampm.pipe';
import { Place }    from './../place';

@Component({
  selector: 'place-hours-card',
  templateUrl: './place-hours-card.component.html'
})

export class PlaceHoursCardComponent {

  @Input() place: Place;

}