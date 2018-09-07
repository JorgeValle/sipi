// Angular core
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

// Sipi custom
import { Place }        from './place';
import { PlaceService } from '../../services/place.service';

// Third party


@Component({
  // this selector is the html tag
  selector: 'suggested-places-list',
  // which template to render
  templateUrl: './suggested-places-list.component.html',
  providers: [PlaceService]
})

// component classes manage the html templates
// a component controls a patch of screen called a view
// the class is where we define what the component does to support the view
export class SuggestedPlacesListComponent implements OnInit {

  places: Place[];
  place: Place;

  constructor(
  private placeService: PlaceService,
  private route: ActivatedRoute,
  private location: Location
  ) {}

  ngOnInit(): void {

  }
}