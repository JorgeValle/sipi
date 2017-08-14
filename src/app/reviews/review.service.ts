import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Review } from './review';


// application logic is added here, in the service
@Injectable()
export class ReviewService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private reviewsUrl = 'api/reviews';  // URL to web api

  constructor(private http: Http) { }

  getReviews(): Promise<Review[]> {
    return this.http.get(this.reviewsUrl)
               .toPromise()
               .then(response => response.json().data as Review[])
               .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}