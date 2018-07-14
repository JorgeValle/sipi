// Angular core
import { Component, OnInit, Pipe, PipeTransform, Input }         from '@angular/core';
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

import { Observable } from 'rxjs';

@Component({
  selector: 'place-list',
  templateUrl: './place-list.component.html',
  providers: [
    PlaceService,
    PlaceFilterPipe,
    PriceFilterPipe
  ]
})

@Pipe({
  name: 'priceFilter'
})

export class PlaceListComponent implements OnInit {

  selectedPlace: Place;

  p;
  name: string;
  firstListing: Place;
  places$: Observable<Place[]>;
  place: Place;
  term;
  city;

  price: string;

  // used for tracking data loading state
  loading: boolean;

  // used for sorting
  orderPredicate: any = 'content.name';
  reverseOrder: boolean = false;

  paginationSize: any = 10;

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

    // getting term and location
    let term = this.route.snapshot.queryParams['t'],
        location = this.route.snapshot.queryParams['u'];

    // run the search
    this.searchPlaces(term, location);

    // SEO
    this.titleService.setTitle(`Lugares | Sipi`);  // set the document title
    this.meta.addTags([
      { name: 'description', content: `Resultados de búsqueda para lugares.` },
    ]);

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
   * 
   */
  handlePaginationSize(predicate): void {

    this.paginationSize = predicate;
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
    
    console.log(`From map, marker was clicked: ${event.content.name}`);

    this.selectedPlace = event;

    console.log(this.selectedPlace);

  }

  /**
   * 
   */
  makeFirst

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