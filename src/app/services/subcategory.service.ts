
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
  getSubcategories() {

    return this.http.get(`http://localhost:4100/api/retrieve/subcategories`).pipe(
    map((res:Response) => res.json()));
  }

}