
import {map} from 'rxjs/operators';
// Angular core
import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

// Sipi custom
import { Country } from '../components/countries/country';

// Third party



@Injectable()
export class CountryService {

  constructor(
    private http: Http
  ) {}

  /**
   * Gets all countries from endpoint
   * @async
   * @returns {observable} - All the countries, indiscriminately
   */
  getCountries() {
    return this.http.get(`https://sipi-rest-api.herokuapp.com/retrieve/countries`).pipe(
    map((res:Response) => res.json()));
  }

}