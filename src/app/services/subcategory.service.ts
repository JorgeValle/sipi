
import {map} from 'rxjs/operators';
// Angular core
import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

// Sipi custom
import { Subcategory } from '../components/categories/subcategory';

// Third party


@Injectable()
export class SubcategoryService {

  constructor(
    private http: Http
  ) {}

  /**
   * Gets all subcategories, indiscriminately
   */
  getSubcategories(parentId) {

    return this.http.get(`https://sipi-rest-api.herokuapp.com/retrieve/subcategories/${parentId}`).pipe(
    map((res:Response) => res.json()));
  }
  

}