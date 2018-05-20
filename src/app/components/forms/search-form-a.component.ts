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
import { CompleterService, CompleterData } from 'ng2-completer';
import { Observable } from 'rxjs/Observable';

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

  placeListFormatter = (data: any): SafeHtml => {
    
    let placeHtml = `<img style="margin-right: 10px;" src="http://via.placeholder.com/20x20" height="20" width="20"><span><a href="/lugar/159">${data.name}</a></span>`;

    let categoryHtml = `<span>${data.name}</span>`;

    if (data.category.name != undefined) {
      return this._sanitizer.bypassSecurityTrustHtml(placeHtml);
    } else {
      return this._sanitizer.bypassSecurityTrustHtml(categoryHtml);
    }
  }

  locationListFormatter = (data: any): SafeHtml => {
    
    let cityHtml = `<span class="city">${data.name}</span>`;

    let countryHtml = `<span class="country">${data.name}</span>`;

    if (data.countryId != undefined) {
      // it's a city
      return this._sanitizer.bypassSecurityTrustHtml(cityHtml);
    } else {
      return this._sanitizer.bypassSecurityTrustHtml(countryHtml);
    }
  }


  locationObservable = (keyword: any): Observable<any[]> => {
    let url: string = 
      // 'https://maps.googleapis.com/maps/api/geocode/json?address='+keyword
      `http://localhost:4100/api/retrieve/location/${keyword}`
    if (keyword) {
      return this.http.get(url)
      .map(res => {
        let json = res.json();
        console.log(json);
        return json;
      })
    } else {
      return Observable.of([]);
    }
  }

  placeObservable = (keyword: any): Observable<any[]> => {
    let url: string = 
      // 'https://maps.googleapis.com/maps/api/geocode/json?address='+keyword
      `http://localhost:4100/api/retrieve/place/${keyword}`
    if (keyword) {
      return this.http.get(url)
      .map(res => {
        let json = res.json();
        console.log(json);
        return json;
      })
    } else {
      return Observable.of([]);
    }
  }

  // the form group
  public search: FormGroup;

  public terms = [
  {
    name: 'Restaurantes',
    type: 'Category'
  },
  {
    name: 'Bombay Grill',
    type: 'Place',
    id: 123,
    img: 'https://pbs.twimg.com/profile_images/723442376933396481/V3QBgFkA.jpg'
  },
  {
    name: 'Compras',
    type: 'Category'
  },
  {
    name: 'Mejicano',
    type: 'Subcategory'
  },
  {
    name: 'Bitbit',
    type: 'Place',
    id: 234,
    img: 'https://pbs.twimg.com/profile_images/723442376933396481/V3QBgFkA.jpg'
  }
  ];

  public locations = [
  {
    name: 'El Salvador',
    type: 'Country'
  },
  {
    name: 'Guatemala',
    type: 'Country'
  },
  {
    name: 'San Salvador',
    type: 'City'
  },
  {

  }
  ];

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

        console.log(data);

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

    var term = this.search.value['term'];
    var location = this.search.value['location'];

    // route to place list, with search terms passed as URL parameters
    this.router.navigate([
      '/busqueda'],
      // { categoria: term, ubicacion: location }
      { queryParams: { categoria: term, ubicacion: location } }
    );
  }



}