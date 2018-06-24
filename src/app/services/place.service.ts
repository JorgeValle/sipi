
import {map} from 'rxjs/operators';
// Angular core
import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { HttpHeaders }             from '@angular/common/http';

// Sipi custom
import { Place } from '../components/places/place';

// Third party
import { Observable } from 'rxjs';

@Injectable()
export class PlaceService {

  constructor(
    private http: Http
  ) {}

  /**
   * Gets all places from endpoint
   * @async
   * @returns {object} - All the places, indiscriminately
   */
  getPlaces():  Observable<Place[]> {
    return this.http.get(
      // `http://localhost:4100/api/retrieve/places`
      `https://sipi-rest-api.herokuapp.com/retrieve/places`
    ).pipe(
    map((res:Response) => res.json()));
  }

  /**
   * Gets all places by owner
   * @async
   * @returns {object} - All the owner's places
   */
  getPlacesByOwner(ownerId) {
    return this.http.get(
      // `http://localhost:4100/api/retrieve/places/${ownerId}`
      `https://sipi-rest-api.herokuapp.com/retrieve/places/${ownerId}`
    ).pipe(
    map((res:Response) => res.json()));
  }

  /**
   * Search for places based on term and location
   * Term can match on place name, category or subcategory
   * Location can match on city or country
   * @async
   * @param term - An optional term parameter
   * @param location - An optional location parameter
   * @returns
   */
  searchPlaces(term?, location?) {
    return this.http.get(
      `https://sipi-rest-api.herokuapp.com/retrieve/places/search?q=${term}&l=${location}`
      // `http://localhost:4100/retrieve/places/search?q=${term}&l=${location}`
    ).pipe(
    map((res:Response) => res.json()));
  }

  /**
   * Gets one specific place from endpoint, by id
   * @async
   * @param {number} id - The id of the place we want to fetch
   * @returns {object} - The returned, singular place from the endpoint
   */
  getPlace(id: number): Observable<Place> {
    return this.http.get(
      // `http://localhost:4100/retrieve/place/${id}`
      `https://sipi-rest-api.herokuapp.com/retrieve/place/${id}`
    ).pipe(
    map((res:Response) => res.json()));
  }

  /**
   * Gets branches, by id
   * @async
   * @param {number} id - The id of the parent, of which we want to get branches for
   * @returns {object} - The returned branch children
   */
  getBranches(id: number): Observable<Place[]> {
    return this.http.get(
      `https://sipi-rest-api.herokuapp.com/retrieve/places/branches/${id}`
      // `http://localhost:4100/retrieve/places/branches/${id}`
    ).pipe(
    map((res:Response) => res.json()));
  }

  /**
   * Creates a place, on endpoint
   * @todo Make place dynamic
   * @async
   * @param name
   * @param category
   */
  createPlace(place) {
    return this.http.post(
      `http://localhost:4100/api/create/place`,
      place
    ).pipe(
    map((res:Response) => res.json()))
  }

  /**
   * Updates a place
   * @async
   * @param id
   */
  updatePlace(id:number) {

    // the new information to update place with
    const updatedPlace = {
      "placeId": 728,
      "category": "Compras",
      "subcategories": ["Asiatico", "Mejicano"]
    };

    return this.http.put(
      `http://localhost:4100/api/update/place`,
      updatedPlace
    ).pipe(
    map((res:Response) => res.json()))
  }

  /**
   * Deletes a place, from endpoint
   */
  deletePlace(id:number) {
  }

}