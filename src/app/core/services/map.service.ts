// Angular core
import { Injectable }    from '@angular/core';

@Injectable()
export class MapService {

  constructor() {}

  /**
   * 
   * 
   * 
   */
  returnBoundingPoints(latLngInDegr) {

    var LATIDX = 0;
    var LNGIDX = 1;
    var sumX = 0;
    var sumY = 0;
    var sumZ = 0;

    for (var i=0; i<latLngInDegr.length; i++) {
        var lat = this.degr2rad(latLngInDegr[i][LATIDX]);
        var lng = this.degr2rad(latLngInDegr[i][LNGIDX]);
        // sum of cartesian coordinates
        sumX += Math.cos(lat) * Math.cos(lng);
        sumY += Math.cos(lat) * Math.sin(lng);
        sumZ += Math.sin(lat);
    }

    var avgX = sumX / latLngInDegr.length;
    var avgY = sumY / latLngInDegr.length;
    var avgZ = sumZ / latLngInDegr.length;

    // convert average x, y, z coordinate to latitude and longtitude
    var lng = Math.atan2(avgY, avgX);
    var hyp = Math.sqrt(avgX * avgX + avgY * avgY);
    var lat = Math.atan2(avgZ, hyp);

    // return ([this.rad2degr(lat), this.rad2degr(lng)]);
    console.log([this.rad2degr(lat), this.rad2degr(lng)]);

  }

  /**
   * 
   * @param rad 
   */
  rad2degr(rad) {
    return rad * 180 / Math.PI;
  }

  /**
   * 
   * @param degr 
   */
  degr2rad(degr) {
    return degr * Math.PI / 180;
  }

  /**
   * Returns base styles to be used in Google Maps
   * 
   * 
   */
  returnBaseStyles() {
    return [
      {
        'featureType': 'poi.business',
        'stylers': [
          { 'visibility': 'off' }
        ]
      },
      {
        'featureType': 'poi.government',
        'stylers': [
          { 'visibility': 'off' }
        ]
      },
      {
        'featureType': 'poi.school',
        'stylers': [
          { 'visibility': 'off' }
        ]
      },
      {
        'featureType': 'poi.place_of_worship',
        'stylers': [
          { 'visibility': 'off' }
        ]
      },
      // {
      //   'featureType': 'poi.attraction',
      //   'stylers': [
      //     { 'visibility': 'off' }
      //   ]
      // },

    ];
  }

}