import 'rxjs/add/operator/switchMap';

// importing, through native JS, from Angular core or libraries
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Place }        from './place';
import { PlaceService } from './place.service';

@Component({
	selector: 'place-detail',
	templateUrl: './place-detail.component.html',
	providers: [PlaceService]
})

// component classes manage the html templates
// a component controls a patch of screen called a view
// the class is where we define what the component does to support the view
// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class PlaceDetailComponent implements OnInit {
	
	place: Place;
	
	constructor(
		private placeService: PlaceService,
		private route: ActivatedRoute,
		private location: Location
	) {}
	
	ngOnInit(): void {
		this.route.paramMap
			.switchMap((params: ParamMap) => this.placeService.getPlace(+params.get('id')))
			.subscribe(place => this.place = place);
	}

}
