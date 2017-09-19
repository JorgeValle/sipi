import 'rxjs/add/operator/switchMap';

// importing, through native JS, from Angular core or libraries
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Place }        from './place';
import { PlaceService } from './place.service';

@Component({
	// this selector is the html tag
	selector: 'place-list',
	// which template to render
	templateUrl: './place-list.component.html',
	providers: [PlaceService]
})

// component classes manage the html templates
// a component controls a patch of screen called a view
// the class is where we define what the component does to support the view
export class PlaceListComponent implements OnInit {
	
	places: Place[];
	place: Place;
	
	// constructors for services
	constructor(
		private placeService: PlaceService,
		private route: ActivatedRoute,
		private location: Location
	) {}
	
	getPlaces(): void {
		this.placeService
		.getPlaces()
		// when the promise resolves...
		.then(places => this.places = places);
	}
	
	ngOnInit(): void {
		this.getPlaces();

	}
}
