import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Page } from './page';


// application logic is added here, in the service
// @Injectable tells TypeScript to emit metadata about the service
@Injectable()
export class PageService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private placesUrl = 'api/pages';  // URL to web api
  
  constructor(private http: Http) { }

  // gets one specific page from endpoint
  getPage(name: string): Promise<Page> {
    const url = `${name}/`;
    return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Page)
    .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}