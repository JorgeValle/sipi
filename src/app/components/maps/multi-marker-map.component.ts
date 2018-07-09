// Angular core
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap }                       from '@angular/router';
import { Location }                                       from '@angular/common';

// Sipi custom
import { Place }         from '../places/place';
import { WindowService } from '../../services/window.service';
import { MapService }    from '../../services/map.service';

declare var google: any;

@Component({
  selector: 'multi-marker-map',
  templateUrl: './multi-marker-map.component.html'
})

export class MultiMarkerMapComponent implements OnInit {

  that = this;

  boundsChanged: boolean = false;

  @Input() places: Place[];

  @Output() mapBounds = new EventEmitter<object>();
  @Output() selectedPlace = new EventEmitter<any>();  // We can use the Output decorator to label our property add as an event a component can fire to send data to its parent
  @Output() redoSearch = new EventEmitter();

  // handle for window object
  private _window: Window;

  constructor (
    private windowService: WindowService,
    private mapService: MapService
  ) {
    this._window = windowService.nativeWindow;
  }

  /**
   * OnInit
   */
  
  ngOnInit(): void {

    let allPlaces = this.places;

    // console.log(allPlaces);

    var map = new google.maps.Map(document.getElementById('multi-marker-map'), {
      zoom: 12,
      center: new google.maps.LatLng(13.6929403, -89.21819110000001),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    // let coordsArray = [];

    for (let i = 0; i < allPlaces.length; i++) {

      let currentPlace = allPlaces[i];
      
      // let currentCoords = [];

      // if (currentPlace.address.coordinates) {

      //   currentCoords.push(currentPlace.address.coordinates.lat, currentPlace.address.coordinates.lng);

      // }

      // coordsArray.push(currentCoords);

      if (currentPlace.address.coordinates) {

        let marker = new google.maps.Marker({
          position: new google.maps.LatLng(currentPlace.address.coordinates.lat, currentPlace.address.coordinates.lng),
          map: map
        });
  
        /**
         * Marker click listener
         */
        marker.addListener('click', () => {
  
          this.selectedPlace.emit(currentPlace);
          map.panTo(marker.position);
          // map.panTo(this.getPosition());
          map.setZoom(15);
  
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
    
  }

  /**
   * Updates the map bounds
   */
  mapBoundsChanged(mapBounds): void {

    console.log(mapBounds);
    this.mapBounds.emit(mapBounds);

  }

}