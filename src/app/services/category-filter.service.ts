// Angular core
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

// Sipi custom
import { CategoryFilter } from '../components/categories/category-filter';

// Third party


// application logic is added here, in the service
@Injectable()
export class CategoryFilterService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private categoryFiltersUrl = 'api/categoryFilters';  // URL to web api, maps on to in-memory data service property names

  constructor(private http: Http) { }

  getCategoryFilters(): Promise<CategoryFilter[]> {
    return this.http.get(this.categoryFiltersUrl)
               .toPromise()
               .then(response => response.json().data as CategoryFilter[])
               .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}