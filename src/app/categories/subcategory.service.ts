import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Subcategory } from './subcategory';


// application logic is added here, in the service
@Injectable()
export class SubcategoryService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private subcategoriesUrl = 'api/subcategories';  // URL to web api

  constructor(private http: Http) { }

  getSubcategories(): Promise<Subcategory[]> {
    return this.http.get(this.subcategoriesUrl)
               .toPromise()
               .then(response => response.json().data as Subcategory[])
               .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}