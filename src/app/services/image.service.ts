// Angular core
import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { HttpHeaders }             from '@angular/common/http';

// Third party
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class ImageService {

  constructor(
    private http: Http
  ) {}

  /**
   * Upload user profile image
   */
  uploadUserImage(fileToUpload) {

    let input = new FormData();
    input.append('file', fileToUpload);

    return this.http.post(
      'http://localhost:4100/api/upload/user/image',
      fileToUpload
    )
    .map((res:Response) => res.json());
  }

  // /**
  //  * Upload place image
  //  */
  // uploadPlaceImage() {

  //   const placeImage = {
  //     userId: 72,
  //     status: status
  //   };

  //   return this.http.post(
  //     'http://localhost:4100/api/upload/user/image',
  //     placeImage
  //   )
  //   .map((res:Response) => res.json());
  // }
  
}