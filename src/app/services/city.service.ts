
import {map} from 'rxjs/operators';
// Angular core
import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

// Sipi custom
import { City } from '../components/cities/city';

// Third party



@Injectable()
export class CityService {

  constructor(
    private http: Http
  ) {}

  /**
   * Gets all cities from endpoint
   * @async
   * @returns {object} - All the cities, indiscriminately
   */
  getCitiesByCountry(countryId) {
    // return this.http.get(`http://localhost:4100/api/retrieve/cities/${countryId}`)
    return this.http.get(`https://sipi-rest-api.herokuapp.com/retrieve/cities/${countryId}`).pipe(
    map((res:Response) => res.json()));
  }

}