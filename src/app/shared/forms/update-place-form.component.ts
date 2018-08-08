// Angular core
import { Component, OnInit, Input }                           from '@angular/core';
import { ActivatedRoute, ParamMap, Router }            from '@angular/router';
import { Location }                                    from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders }  from '@angular/common/http';
import { FormControl, FormGroup }                      from '@angular/forms';

// Sipi custom
import { Category }          from '../categories/category';
import { Place }             from '../places/place';
import { PlaceService }      from '../../services/place.service';
import { CategoryService }   from '../../services/category.service';
import { SubcategoryService} from '../../services/subcategory.service';
import { CountryService }    from '../../services/country.service';
import { CityService }       from '../../services/city.service';

@Component({
  selector: 'update-place-form',
  templateUrl: './update-place-form.component.html',
  providers: [
    CountryService,
    CityService,
    PlaceService
  ]
})

export class UpdatePlaceFormComponent implements OnInit {

  @Input() place: Place;

  // country and cities
  countries;
  cities;

  // categories
  categories;
  subcategories;

  updatedPlace: FormGroup;

  // returned values
  newPlace: object;

  constructor(
    private http: HttpClient,
    private router: Router,
    private placeService: PlaceService,
    private categoryService: CategoryService,
    private subcategoryService: SubcategoryService,
    private countryService: CountryService,
    private cityService: CityService
  ) {}

  /**
   * Update the place
   */
  onSubmit(place): void {

    this.placeService
    .updatePlace(place)
    .subscribe(
      data => {

        // data is now an instance of type PlaceResponse, so you can do this:
        this.updatedPlace = data.results;
  
        console.log('Place was updated');
        },
      
        (err: HttpErrorResponse) => {
  
          if (err.error instanceof Error) {

            console.log('Something went wrong', err.error.message);

          } else {

            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);

          }
        }

    );


  }

  /**
   * On Init
   */
  ngOnInit(): void {

    /**
     * Populate the form inputs
     */
    this.updatedPlace = new FormGroup({
      
      name: new FormControl(this.place.content.name),

      // categories
      category: new FormControl(this.place.category.name),
      subcategory: new FormControl(this.place.category.subcats),
      // address
      street: new FormControl(this.place.address.street),
      country: new FormControl(this.place.address.country),
      number: new FormControl(this.place.address.number),
      city: new FormControl(this.place.address.city),
      // contact
      phone: new FormControl(this.place.contact.phone),
      website: new FormControl(this.place.contact.website),
      email: new FormControl(this.place.contact.email),

      // temp
      password: new FormControl()

    });

    /**
     * Category and subcategory gymnastics
     */
    this.categoryService.getCategories()
    .subscribe(data => {

      this.categories = data;
      console.log('this.categories');
      console.log(this.categories);

      /**
       * 
       */
      this.subcategoryService.getSubcategories(this.categories[0].system.id)
      .subscribe(data => {

        this.subcategories = data;

      });

    });

    /**
     * Country and city gymnastics
     */
    this.countryService.getCountries()
    .subscribe(data => {

      this.countries = data;

    })
  }

  /**
   * 
   * @param parentId 
   */
  updateSubcategories(parentCat): void {

    console.log('parentCat is...');
    console.log(parentCat);

    this.subcategoryService.getSubcategories(parentCat.value.category)
    .subscribe(data => {

      this.subcategories = data;

    });

  }

  /**
   * 
   */
  updateCities(parentCountry): void {

    console.log(parentCountry);

    this.cityService.getCitiesByCountry(parentCountry.value.country)
    .subscribe(data => {

      this.cities = data;

    });

  }
}