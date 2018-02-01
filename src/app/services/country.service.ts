// Angular core
import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

// Sipi custom
import { Country } from '../components/countries/country';

// Third party
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

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
    return this.http.get(`http://localhost:4100/api/retrieve/countries`)
    .map((res:Response) => res.json());
  }

}