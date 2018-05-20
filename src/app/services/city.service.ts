// Angular core
import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

// Sipi custom
import { City } from '../components/cities/city';

// Third party
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

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
    return this.http.get(`https://sipi-rest-api.herokuapp.com/retrieve/cities/${countryId}`)
    .map((res:Response) => res.json());
  }

}