
import {of as observableOf,  Observable } from 'rxjs';

import {map} from 'rxjs/operators';
// Angular core
import { Component, NgModule, OnInit }                            from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterModule, Routes } from '@angular/router';
import { Location }                                               from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders }             from '@angular/common/http';
import { FormControl, FormBuilder, FormGroup }                    from "@angular/forms";
import { DomSanitizer, SafeHtml }                                 from "@angular/platform-browser";
import { Http, Response, Headers, RequestOptions }                from '@angular/http';

// Sipi custom
import { PlaceService }    from '../../services/place.service';
import { LocationService } from '../../services/location.service';

// Third party
// import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
  selector: 'search-form-a',
  templateUrl: './search-form-a.component.html',
  providers: [
    LocationService,
    PlaceService
  ]
})

export class SearchFormAComponent implements OnInit {

  constructor(
    private placeService: PlaceService,
    private locationService: LocationService,
    private router: Router,
    private builder: FormBuilder,
    private _sanitizer: DomSanitizer,
    public http: Http
  ) {}

  /**
   *  Formats the place autosuggest, with HTML templates
   */
  placeListFormatter = (data: any): SafeHtml => {
    
    let placeHtml = `<img style="margin-right: 10px;" src="http://via.placeholder.com/20x20" height="20" width="20">
                     <span><a href="/lugar/159">${data.content.name}</a></span>`,
        categoryHtml = `<span>${data.content.name}</span>`;

    if (data.category.name != undefined) {
      // it's a place
      return this._sanitizer.bypassSecurityTrustHtml(placeHtml);
    } else {
      // it's a category
      return this._sanitizer.bypassSecurityTrustHtml(categoryHtml);
    }
  }

  /**
   * Formats the location autosuggest, with HTML templates
   */
  locationListFormatter = (data: any): SafeHtml => {
    
    let cityHtml = `<span class="city">${data.content.name}</span>`,
        countryHtml = `<span class="country">${data.content.name}</span>`;

    if (data.countryId != undefined) {
      // it's a city
      return this._sanitizer.bypassSecurityTrustHtml(cityHtml);
    } else {
      // it's a country
      return this._sanitizer.bypassSecurityTrustHtml(countryHtml);
    }
  }

  /**
   * 
   */
  locationObservable = (keyword: any): Observable<any[]> => {

    let url: string = 
      `https://sipi-rest-api.herokuapp.com/retrieve/location/${keyword}`;

    if (keyword) {
      return this.http.get(url).pipe(
      map(res => {
        let json = res.json();
        console.log(json);
        return json;
      }))
    } else {
      return observableOf([]);
    }
  }

  /**
   * 
   */
  placeObservable = (keyword: any): Observable<any[]> => {

    let url: string = 
      `https://sipi-rest-api.herokuapp.com/retrieve/place/${keyword}`;

    if (keyword) {
      return this.http.get(url).pipe(
      map(res => {
        let json = res.json();
        console.log(json);
        return json;
      }))
    } else {
      return observableOf([]);
    }
  }

  // the form group
  public search: FormGroup;

  /**
   * On Init
   */
  ngOnInit(): void {

    this.search = this.builder.group({
      term : "",
      location: ""
    });

    // this.locationService
    // .getLocation()
    // .subscribe(
    //   data => {
    //     console.log(data);

    //     let userLocation;
    //     if (data.city_name != undefined) {
    //       userLocation = data.city_name;
    //     } else {
    //       userLocation = data.country_name;
    //     }

    //     this.search = this.builder.group({
    //       term : "",
    //       location: userLocation
    //     });
    //   }
    // )

    this.placeService
    .searchPlaces(this.search.value['term'], this.search.value['location'])
    .subscribe(
      data => {

        // console.log(data);

      }
    )
  }

  /**
   * The main on submit function
   * @param
   * @param
   * @returns
   */
  onSubmit(search): void {

   let term = this.search.value['term'],
       location = this.search.value['location'];

    // route to place list, with search terms passed as URL parameters
    this.router.navigate([
      '/lugares'],
      {
        queryParams: {
          t: term,
          u: location
        }
      }
    );
  }



}