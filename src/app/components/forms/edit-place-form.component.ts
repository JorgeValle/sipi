// Angular core
import { Component, OnInit, Input }                           from '@angular/core';
import { ActivatedRoute, ParamMap, Router }            from '@angular/router';
import { Location }                                    from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders }  from '@angular/common/http';
import { FormControl, FormGroup }                      from '@angular/forms';

// Sipi custom
import { Category }     from '../categories/category';
import { Place }        from '../places/place';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'edit-place-form',
  templateUrl: './edit-place-form.component.html'
})

export class EditPlaceFormComponent implements OnInit {

  @Input() place: Place;

  updatedPlace: FormGroup;

  // returned values
  newPlace: object;

  constructor(
    private http: HttpClient,
    private router: Router,
    private placeService: PlaceService
  ) {}

  /**
   * Update the place
   */
  onSubmit(place): void {

    this.placeService
    .updatePlace(3)
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

    this.updatedPlace = new FormGroup({
      name: new FormControl(''),
      category: new FormControl('Restaurantes'),
      subcategory: new FormControl('Mariscos'),
      phone: new FormControl(3334455),
      website: new FormControl('http://www.google.com'),
      street: new FormControl('1234 Calle Principal'),
      country: new FormControl('El Salvador')
    });
  }

}