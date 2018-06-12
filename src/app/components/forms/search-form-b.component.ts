// Angular core
import { Component, OnInit }                              from '@angular/core';
import { ActivatedRoute, ParamMap, RouterModule, Routes } from '@angular/router';
import { Location }                                       from '@angular/common';
import { FormControl, FormBuilder, FormGroup }            from "@angular/forms";

// Sipi custom
import { Search }          from './search-form.interface';
import { LocationService } from '../../services/location.service';

// Third party
// import { CompleterService, CompleterData }                from "ng2-completer";

@Component({
  selector: 'search-form-b',
  templateUrl: './search-form-b.component.html',
  providers: [
    LocationService
  ]
})

export class SearchFormBComponent implements OnInit {

  constructor(
    private locationService: LocationService,
    private builder: FormBuilder,
  ) {}

  // protected dataService: CompleterData;

  search: FormGroup;

  /**
   * On Init
   */
  ngOnInit(): void {
    this.search = new FormGroup({
      term: new FormControl(''),
      location: new FormControl('')
    });

    this.locationService
    .getLocation()
    .subscribe(
      data => {

        let userLocation;
        if (data.city_name != undefined) {
          userLocation = data.city_name;
        } else {
          userLocation = data.country_name;
        }

        this.search = this.builder.group({
          term : "",
          location: userLocation
        });
      }
    )

  }

  /**
   * The main on submit function
   */
  onSubmit(search): void {

    console.log(this.search['term']);
    console.log(this.search['location']);

  }
  
}