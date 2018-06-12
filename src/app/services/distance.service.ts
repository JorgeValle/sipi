
import {map} from 'rxjs/operators';
// Angular core
import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

// Sipi custom
import { Distance } from '../components/distances/distance';

// Third party



// application logic is added here, in the service
@Injectable()
export class DistanceService {

  constructor(
    private http: Http
  ) {}

  /**
   * Get all distances
   */
  getDistances() {
    return this.http.get(`http://localhost:4100/api/retrieve/subcategories`).pipe(
    map((res:Response) => res.json()));
  }

}