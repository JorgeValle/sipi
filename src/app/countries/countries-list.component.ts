import 'rxjs/add/operator/switchMap';

// importing, through native JS, from Angular core or libraries
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

import { Country } from './country';
import { CountryService } from './country.service';

@Component({
  // this selector is the html tag
  selector: 'countries-list',
  // which template to render
  templateUrl: './countries-list.component.html',
  providers: [CountryService]
})

// component classes manage the html templates
// a component controls a patch of screen called a view
// the class is where we define what the component does to support the view
export class CountriesListComponent implements OnInit {
	
	countries: Country[];
	country: Country;
	
	constructor(
		private countryService: CountryService,
		private route: ActivatedRoute,
		private location: Location
	) {}
	
	getCountries(): void {
		this.countryService
		.getCountries()
		.then(countries => this.countries = countries);
	}
	
	ngOnInit(): void {
		this.getCountries();
	}
	
}
