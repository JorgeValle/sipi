// Angular core
import { Component, OnInit, Pipe, PipeTransform }                from '@angular/core';
import { ActivatedRoute, ParamMap, Params }                      from '@angular/router';
import { Location }                                              from '@angular/common';
import { Meta, Title }                                           from '@angular/platform-browser';
import { trigger, style, state, transition, animate, keyframes, query, stagger } from '@angular/animations';

// Sipi custom
import { Place }           from './place';
import { PlaceService }    from '../../services/place.service';
import { PlaceFilterPipe } from '../../pipes/place-filter.pipe';
import { PriceFilterPipe } from '../../pipes/price-filter.pipe';

// Third party
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'place-list',
  templateUrl: './place-list.component.html',
  providers: [
    PlaceService,
    PlaceFilterPipe,
    PriceFilterPipe
  ],
  // animations: [
  //   trigger('fadeIn', [
  //     transition(':enter', [
  //       style({ opacity: '0' }),
  //       animate('3s ease-out', style({ opacity: '1' })),
  //     ]),
  //   ]),
  //   trigger('animating', [
  //     state('inactive', style({
  //       opacity: '0.8'
  //     })),
  //     state('active', style({
  //       opacity: '1'
  //     })),
  //     transition('inactive => active', animate('1000ms ease-in')),
  //     transition('active => inactive', animate('1000ms ease-out'))
  //   ]),
  // ],
})

@Pipe({
  name: 'priceFilter'
})

export class PlaceListComponent implements OnInit {

  p;
  name: string;
  firstListing: Place;
  places$: Observable<Place[]>;
  place: Place;
  category;
  city;

  price: string;

  // used for tracking data loading state
  loading: boolean;

  // used for sorting
  orderPredicate: any = 'hits';
  reverseOrder: boolean = true;

  // used for animations
  state: string = 'inactive';

  constructor(
    private placeService: PlaceService,
    private route: ActivatedRoute,
    private location: Location,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private meta: Meta
  ) {}

  /**
   * Through the place service, fetches all places
   * @param term
   * @param location
   */
  searchPlaces(term?, location?): void {

    this.places$ = this.placeService.searchPlaces(term, location);

  }

  /**
   * OnInit()
   */
  ngOnInit(): void {

    this.activatedRoute.queryParams
    .subscribe((params: Params) => {

      this.city = params['ubicacion'];
      this.category = params['categoria'];
      this.searchPlaces(this.category, this.city);

    });

  }

  /**
   * Changes the place list sort order, when the sort order predicate changes in child component
   * @param predicate 
   */
  handlePredicateChanged(predicate): void {

    console.log(`From place list component, predicate is ${predicate}`);
    this.orderPredicate = predicate;

    this.state = 'inactive';

  }

  /**
   * Updates the place list, when new map bounds are selected
   */
  handleNewMapBounds(): void {
    console.log(`From place list component, new map bounds are set`);
  }

  /**
   * Handles a user clicking on a marker, on the multi marker map
   */
  handleMarkerClick(event): void {
    console.log(`From map, marker was clicked: ${event}`);
    this.firstListing = event;
  }

  /**
   * Filters by price
   */
  filterByPrice(price): void {
    this.price = price.target.innerHTML;
    console.log(price);
  }

  /**
   * Handler for when price predicate has changed
   * @param price 
   */
  handlePricePredicateChanged(price): void {
    this.price = price.path[0].innerHTML;
    console.log(price);
  }

}