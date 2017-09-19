import 'rxjs/add/operator/switchMap';

// importing, through native JS, from Angular core or libraries
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Distance } from '../distances/distance';
import { DistanceService } from '../distances/distance.service';

import { Subcategory } from '../categories/subcategory';
import { SubcategoryService } from '../categories/subcategory.service';

@Component({
	selector: 'filter-places-form',
	templateUrl: './filter-places-form.component.html',
	providers: [SubcategoryService, DistanceService]
})

// component classes manage the html templates
// a component controls a patch of screen called a view
// the class is where we define what the component does to support the view
// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class FilterPlacesFormComponent implements OnInit{
	
	subcategories: Subcategory[];
	subcategory: Subcategory;
	
	distances: Distance[];
	
	constructor(
		private subcategoryService: SubcategoryService,
		private distanceService: DistanceService,
		private route: ActivatedRoute,
		private location: Location
	) {}
	
	// to populate the list of checkboxes
	getSubcategories(): void {
		this.subcategoryService
		.getSubcategories()
		.then(subcategories => this.subcategories = subcategories);
	}
	
	// to populate the distance sliders
	getDistances(): void {
		this.distanceService
		.getDistances()
		.then(distances => this.distances = distances);
	}
	
	applyFilter(): void {
		console.log("Filter has been applied");
	}
	
	ngOnInit(): void {
		this.getSubcategories();
		this.getDistances();
	}
	


}
