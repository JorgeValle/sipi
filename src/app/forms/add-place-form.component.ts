import 'rxjs/add/operator/switchMap';

// importing, through native JS, from Angular core or libraries
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Subcategory } from '../categories/subcategory';
import { SubcategoryService } from '../categories/subcategory.service';


@Component({
	selector: 'add-place-form',
	templateUrl: './add-place-form.component.html',
	styleUrls: [ './add-place-form.component.css' ],
	providers: [SubcategoryService]
})

// component classes manage the html templates
// a component controls a patch of screen called a view
// the class is where we define what the component does to support the view
// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class AddPlaceFormComponent implements OnInit {
	
	subcategories: Subcategory[];
	subcategory: Subcategory;
	
	constructor(
		private subcategoryService: SubcategoryService,
		private route: ActivatedRoute,
		private location: Location
	) {}
	
	getSubcategories(): void {
		this.subcategoryService
		.getSubcategories()
		.then(subcategories => this.subcategories = subcategories);
	}
	
	updatePlace() {
		console.log("API request to save this place");
	}
	
	ngOnInit(): void {
		this.getSubcategories();
	}
	


}