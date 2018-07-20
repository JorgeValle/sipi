// Angular core
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

// Sipi custom
import { MapService }    from '../../services/map.service';
import { Place }         from '../places/place';
import { WindowService } from '../../services/window.service';

// Third party


// declaring google variable, for use with google maps
declare var google: any;

@Component({
  selector: 'single-marker-map',
  templateUrl: './single-marker-map.component.html'
})

// components should be lean
export class SingleMarkerMapComponent implements OnInit {

  @Input() place: Place;

  // handle for window object
  private _window: Window;

  constructor (
    private windowService: WindowService,
    private mapService: MapService
  ) {
    this._window = windowService.nativeWindow;
  }

  /**
   * On Init
   */  
  ngOnInit(): void {

    console.log(`place is: ${this.place}`);

    let currentPlace = {
      lat: this.place.address.coordinates.lat,
      lng: this.place.address.coordinates.lng
    };
    let map = new google.maps.Map(document.getElementById('single-marker-map'), {
      zoom: 16,
      center: currentPlace,
      streetViewControl: false,
      mapTypeControl: false,
      styles: this.mapService.returnBaseStyles()
    });
    let marker = new google.maps.Marker({
      position: currentPlace,
      map: map
    });
  }

  /**
   * Redo the map search
   */
  redoMapSearch(): void {

  }


}