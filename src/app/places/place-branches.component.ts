// Angular core
import { Component, Input } from '@angular/core';

// Sipi custom
import { Place } from './../place';

@Component({
  selector: 'place-branches-card',
  templateUrl: './place-branches-card.component.html'
})

export class PlaceBranchesCardComponent {
  
  @Input() branches: Place[];

}