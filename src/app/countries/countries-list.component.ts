// Angular core
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

// Sipi custom
import { Country }        from './country';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'countries-list',
  templateUrl: './countries-list.component.html',
  providers: [
    CountryService
  ]
})

export class CountriesListComponent implements OnInit {

  countries: Country[];
  country: Country;

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  /**
   * Get all countries, since the API returns an Observable, we need to subscribe to it to actually perform the http request
   */
  getCountries(): void {
    this.countryService
    .getCountries()
    .subscribe(
      data => {
        this.countries = data
      }
    );
  }

  /**
   * On Init
   */
  ngOnInit(): void {
    this.getCountries();
  }

}