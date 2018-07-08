// Angular core
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';

// Sipi custom
import { Place }         from '../places/place';
import { WindowService } from '../../services/window.service';
import { PlaceService } from '../../services/place.service';

// declaring google variable, for use with google maps
declare var google: any;

@Component({
  selector: 'editable-marker-map',
  templateUrl: './editable-marker-map.component.html'
})

// components should be lean
export class EditableMarkerMapComponent implements OnInit {

  @Input() place: Place;

  lat;
  lng;

  // handle for window object
  private _window: Window;

  constructor (
    private windowService: WindowService,
    private placeService: PlaceService
  ) {
    this._window = windowService.nativeWindow;
  }

  /**
   * On Init
   */  
  ngOnInit(): void {

    console.log('Editable marker map loaded');
    console.log(`place is: ${this.place}`);

    if (this.place.address.coordinates) {

      let currentPlace = {
        lat: this.place.address.coordinates.lat,
        lng: this.place.address.coordinates.lng
      };
      let map = new google.maps.Map(document.getElementById('editable-marker-map'), {
        zoom: 17,
        center: currentPlace,
        streetViewControl: false,
        mapTypeControl: false
      });
      let marker = new google.maps.Marker({
        position: currentPlace,
        map: map,
        draggable: true,
        title: 'Mueva el pin para actualizar ubicación'
      });
  
      /**
       * Runs on marker drag end
       */
      google.maps.event.addListener(marker, 'dragend', (event) => {
        this.lat = event.latLng.lat();
        this.lng = event.latLng.lng();
      });  

    }
  
  }

  /**
   * Redo the map search
   */
  redoMapSearch(): void {

  }

  /**
   * Updates the place coordinates, after marker has been dragged to new location
   */
  updatePlaceCoords(): void {

    this.placeService.updatePlaceCoordinates(this.place.system.id, this.lat, this.lng)
    .subscribe(data => {

      console.log(data);


    });

  }


}