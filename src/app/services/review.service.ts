
import {map} from 'rxjs/operators';
// Angular core
import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { HttpHeaders }             from '@angular/common/http';

// Sipi custom
import { Review } from '../components/reviews/review';

// Third party



// application logic is added here, in the service
@Injectable()
export class ReviewService {

  constructor(
    private http: Http
  ) {}

  /**
   * Gets all reviews from endpoint
   * @async
   * @returns {object} - All the reviews, indiscriminately
   */
  getReviews() {
    
    return this.http.get(`http://localhost:4100/api/retrieve/reviews`).pipe(
    map((res:Response) => res.json()));
  }

}