import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

// application logic is added here, in the service
@Injectable()
export class ProgressBarService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private reviewsUrl = 'api/reviews';  // URL to web api

	constructor(private http: Http) { }
	
	// get one specific review
	getReview() {
	}
	
	// create one new review
	createReview() {
	}
	
	// update one specific review
	updateReview() {
	}
	
	// delete one specific review
	deleteReview() {
	}
	
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}