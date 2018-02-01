// Angular core
import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

// Sipi custom
import { Category } from '../components/categories/category';

// Third party
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

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
    
    return this.http.get(`http://localhost:4100/api/retrieve/categories`)
    .map((res:Response) => res.json());
  }

}