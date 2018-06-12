
import {map} from 'rxjs/operators';
// Angular core
import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

// Sipi custom
import { Page } from '../components/pages/page';

// Third party



@Injectable()
export class PageService {

  constructor(
    private http: Http
  ) {}

  /**
   * Gets one specific page from endpoint, by id
   * @async
   * @param {string} slug - The slug of the page we want to fetch
   * @returns {object} - The returned, singular page from the endpoint
   */
  getPage(slug: string) {

    return this.http.get(`https://sipi-rest-api.herokuapp.com/retrieve/page/${slug}`).pipe(
    map((res:Response) => res.json()))
  }

}