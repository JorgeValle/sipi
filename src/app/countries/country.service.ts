import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Country } from './country';


// application logic is added here, in the service
// @Injectable tells TypeScript to emit metadata about the service
@Injectable()
export class CountryService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private countriesUrl = 'api/countries';  // URL to web api

	constructor(private http: Http) { }

	// get all countries from endpoint
	getCountries(): Promise<Country[]> {
		return this.http.get(this.countriesUrl)
		.toPromise()
		.then(response => response.json().data as Country[])
		.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
	}

}