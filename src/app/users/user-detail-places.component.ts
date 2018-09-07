// Angular core
import { Component, Input, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap }        from '@angular/router';
import { Location }                        from '@angular/common';

// Sipi custom
import { AlertService }   from '../../services/alert.service';
import { Place }          from '../places/place';
import { PlaceService }   from '../../services/place.service';
import { User }           from './user';
import { UserService }    from '../../services/user.service';

// Third party


@Component({
  selector: 'user-detail-places',
  templateUrl: './user-detail-places.component.html',
  providers: [
    PlaceService,
    UserService
  ]
})

export class UserDetailPlacesComponent implements OnInit {

  // Inputs
  @Input() user: User;
  @Input() message: string;

  places: Place[];
  place: Place;
  
  constructor(
    private placeService: PlaceService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    // Sipi services
    private alertService: AlertService
  ) {}

  /**
   * Gets places that the current user manages
   */
  getUserPlaces(): void {
    this.placeService
    .getPlacesByOwner(72)
    .subscribe(
      data => {
        this.places = data;
      }
    );
  }

  /**
   * On Init
   */
  ngOnInit(): void {

    this.getUserPlaces();
  }

  /**
   * 
   * @param updatedPlaces 
   */
  updatePlaces(updatedPlaces) {

    console.log(updatedPlaces);
    this.places = updatedPlaces;

  }


}