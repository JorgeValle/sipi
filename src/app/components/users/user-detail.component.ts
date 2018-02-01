// Angular core
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Title }                    from '@angular/platform-browser';
import { Http }                     from '@angular/http';

// Sipi custom
import { AuthService }    from '../../services/auth.service';
import { Place }          from '../places/place';
import { PlaceService }   from '../../services/place.service';
import { User }           from './user';
import { UserService }    from '../../services/user.service';

// Third party
import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

@Component({
  selector: 'user-detail',
  templateUrl: './user-detail.component.html',
  providers: [
    AuthService,
    PlaceService,
    UserService
  ]
})

export class UserDetailComponent {

  places: Place[];
  place: Place;
  user: User;
  
  constructor(
    private authService: AuthService,
    private placeService: PlaceService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location,
    private titleService: Title,
    private http: Http
  ) {}

  /**
   * Gets all places, through service
   */
  getPlaces(): void {
    this.placeService
    .getPlaces()
    .subscribe(
      data => {
        this.places = data
      }
    );
  }

  /**
   * Sets the document title
   * @param {string} newTitle - The new title for the page
   */
  setTitle(newTitle:string) {
    this.titleService.setTitle(newTitle);	
  }

  /**
   * On Init
   */
  ngOnInit(): void {
    
    this.route.paramMap
    .switchMap((params: ParamMap) => this.userService.getUser(+params.get('id')))
    .subscribe(user => {
      this.user = user[0];
      console.log(`firstName is ${this.user.firstName}`);
      this.setTitle(`${this.user.firstName} ${this.user.lastName} | Sipi`);  // set the document title
    });

    // get our data every subsequent 10 seconds
    IntervalObservable.create(10000)
    .subscribe(() => {
      this.userService.getUser(809)
      .subscribe(user => {
        this.user = user[0];
        this.setTitle(`${this.user.firstName} ${this.user.lastName} | Sipi`);  // set the document title
      });
      this.placeService.getPlaces()
      .subscribe(data => {
        this.places = data;
      });
      }
    );

  }

  /**
   * Signs the user out, by deleting the cookie
   */
  signOut(): void {
    console.log('User signed out');
    this.authService.logout();
  }

}