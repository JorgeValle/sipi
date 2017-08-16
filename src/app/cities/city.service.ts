import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { City } from './city';


// application logic is added here, in the service
// @Injectable tells TypeScript to emit metadata about the service
@Injectable()
export class CityService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private citiesUrl = 'api/cities';  // URL to web api

	constructor(private http: Http) { }

	// get all cities from endpoint
	getCities(): Promise<City[]> {
		return this.http.get(this.citiesUrl)
		.toPromise()
		.then(response => response.json().data as City[])
		.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
	console.error('An error occurred', error); // for demo purposes only
	return Promise.reject(error.message || error);
	}

}