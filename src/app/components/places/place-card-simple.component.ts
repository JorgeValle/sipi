// Angular core
import { Component, Input, OnInit }        from '@angular/core';

// Sipi custom
import { Place }        from './place';

@Component({
  selector: 'place-card-simple',
  templateUrl: './place-card-simple.component.html'
})

// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class PlaceCardSimpleComponent {

  @Input() place: Place;

}