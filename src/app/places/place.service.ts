import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Place } from './place';


// application logic is added here, in the service
// @Injectable tells TypeScript to emit metadata about the service
@Injectable()
export class PlaceService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private placesUrl = 'api/places';  // URL to web api

	constructor(private http: Http) { }

	// get all places from endpoint
	getPlaces(): Promise<Place[]> {
		return this.http.get(this.placesUrl)
		.toPromise()
		.then(response => response.json().data as Place[])
		.catch(this.handleError);
	}

	// gets one specific place from endpoint
	getPlace(id: number): Promise<Place> {
		const url = `${this.placesUrl}/${id}`;
		return this.http.get(url)
		.toPromise()
		.then(response => response.json().data as Place)
		.catch(this.handleError);
	}
		
	// create one new place on endpoint
	createPlace() {
	}
	
	// update one specific place on endpoint
	updatePlace() {
	}
	
	// delete one specific place from endpoint
	deletePlace() {
	}

	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}