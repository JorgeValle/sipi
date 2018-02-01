// Angular core
import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

// Sipi custom
import { Page } from '../components/pages/page';

// Third party
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class PageService {

  constructor(
    private http: Http
  ) {}

  /**
   * Gets one specific page from endpoint, by id
   * @async
   * @param {number} id - The id of the page we want to fetch
   * @returns {object} - The returned, singular page from the endpoint
   */
  getPage(id: number) {

    return this.http.get(`http://localhost:4100/api/retrieve/page/${id}`)
    .map((res:Response) => res.json())
  }

}