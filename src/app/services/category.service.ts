
import {map} from 'rxjs/operators';
// Angular core
import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

// Sipi custom
import { Category } from '../components/categories/category';

// Third party



@Injectable()
export class CategoryService {

  constructor(
    private http: Http
  ) {}

  /**
   * Gets all categories
   * @async
   * @returns {object} - All the categories, indiscriminately
   */
  getCategories() {
    
    // return this.http.get(`http://localhost:4100/api/retrieve/categories`)
    return this.http.get(`https://sipi-antares.herokuapp.com/api/retrieve/categories`).pipe(
    map((res:Response) => res.json()));
  }

}