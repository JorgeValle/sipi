// Angular core
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Router }               from '@angular/router';
import { Location }                                       from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders }     from '@angular/common/http';
import { FormControl, FormGroup }                         from '@angular/forms';

// Sipi custom
import { Category }     from '../categories/category';
import { Place }        from '../places/place';
import { PlaceService } from '../../services/place.service';

@Component({
  selector: 'add-place-form',
  templateUrl: './add-place-form.component.html'
})

export class AddPlaceFormComponent implements OnInit {

  // form group
  place: FormGroup;

  places: [Place];
  // outputs
  @Output() placesChanged = new EventEmitter<[Place]>();

  errorAlert: string;
  successAlert: string;

  // returned values
  createdPlace;

  constructor(
    private placeService: PlaceService,
    private http: HttpClient,
    private router: Router
  ) {}

  /**
   * Executes a request to the endpoint that adds a place
   */
  onSubmit(newPlace): void {

    console.log('API request to save this place');

    /**
     * Create the place, through service
     * @param
     * @param
     */
    this.placeService
    .createPlace(newPlace)
    .subscribe(
      data => {

        this.placeService
        .getPlacesByOwner(72)
        .subscribe(
          data => {

            console.log(data);
            this.places = data;

            this.placesChanged.emit(this.places);

          }
        );

        this.createdPlace = data.results;
        this.successAlert = 'Tu lugar ha sido creado, ahora debes publicarlo!';
        console.log('Place was created');
        
        },
      
        (err: HttpErrorResponse) => {
  
          if (err.error instanceof Error) {
            console.log('Something went wrong', err.error.message);
          } else {
            this.errorAlert = 'Ha sucedido un problema, y no hemos creado tu lugar';
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        }

    );
  }

  /**
   * On Init
   */
  ngOnInit(): void {

    this.place = new FormGroup({
      name: new FormControl(''),
      category: new FormControl('Restaurantes')  // prepopulated
    });
  }
  
}