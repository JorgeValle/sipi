// Angular core
import { Component, Input } from '@angular/core';

// Sipi custom
import { Place } from './../place';

@Component({
  selector: 'place-branches-card-edit',
  templateUrl: './place-branches-card-edit.component.html'
})

export class PlaceBranchesCardEditComponent {
  
  @Input() branches: Place[];

}