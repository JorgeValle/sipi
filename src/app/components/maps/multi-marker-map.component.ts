// Angular core
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap }                       from '@angular/router';
import { Location }                                       from '@angular/common';

// Sipi custom
import { Place }         from '../places/place';
import { WindowService } from '../../services/window.service';

// Third party
import 'rxjs/add/operator/switchMap';

// declaring google variable, for use with google maps
declare var google: any;

@Component({
selector: 'multi-marker-map',
templateUrl: './multi-marker-map.component.html'
})

// components are big consumers of services
// components jobs is to enbale the user experience, nothing more
// components should be lean
export class MultiMarkerMapComponent implements OnInit {

  that = this;

  boundsChanged: boolean = false;

  @Input() country: string;
  @Input() city: string;
  @Input() places: Place[];

  @Output() mapBounds = new EventEmitter<object>();
  @Output() firstPlace = new EventEmitter<any>();  // We can use the Output decorator to label our property add as an event a component can fire to send data to its parent
  @Output() redoSearch = new EventEmitter();

  // handle for window object
  private _window: Window;

  constructor (private windowService: WindowService) {
    // console.log('Window object in multi-marker-map component is: ', windowService.nativeWindow);
    this._window = windowService.nativeWindow;
  }

  /**
   * OnInit
   */
  
  ngOnInit(): void {

    let allPlaces = this.places;

    let visiblePlaces = [
      { lat: 8.972880, lng: -79.515572 },
      { lat: 8.977021, lng: -79.514033 },
      { lat: 8.975826, lng: -79.507676 },
      { lat: 8.981090, lng: -79.509012 },
    ];

    var map = new google.maps.Map(document.getElementById('multi-marker-map'), {
      zoom: 16,
      center: new google.maps.LatLng(8.972485, -79.511463),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    for (let i = 0; i < allPlaces.length; i++) {

      let currentPlace = allPlaces[i];

      let marker = new google.maps.Marker({
        position: new google.maps.LatLng(currentPlace.address.coordinates.lat, currentPlace.address.coordinates.lng),
        map: map
      });

      /**
       * Marker click listener
       */
      marker.addListener('click', () => {

        this.firstPlace.emit(currentPlace.content.name);

      });

      /**
       * Listens for bound change
       */
      google.maps.event.addListener(map, 'bounds_changed', function() {

        this.boundsChanged = true; // sets to true if map bounds changed, to reveal button
        // console.log(`Map bounds are: ${map.getBounds()}`);

     });

    }
    
  }

  /**
   * Updates the map bounds
   */
  mapBoundsChanged(mapBounds): void {

    console.log(mapBounds);
    this.mapBounds.emit(mapBounds);

  }

}