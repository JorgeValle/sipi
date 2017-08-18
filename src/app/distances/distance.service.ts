import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Distance } from './distance';


// application logic is added here, in the service
@Injectable()
export class DistanceService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private distancesUrl = 'api/distances';  // URL to web api

  constructor(private http: Http) { }

  getDistances(): Promise<Distance[]> {
    return this.http.get(this.distancesUrl)
               .toPromise()
               .then(response => response.json().data as Distance[])
               .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}