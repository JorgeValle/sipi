// Angular core
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ParamMap, Router }               from '@angular/router';
import { Location }                                       from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders }     from '@angular/common/http';
import { FormControl, FormGroup }                         from '@angular/forms';

// Sipi custom
import { ImageService } from '../../services/image.service';


@Component({
  selector: 'upload-user-photo-form',
  templateUrl: './upload-user-photo-form.component.html',
  providers: [

  ],
})

export class UploadUserPhotoFormComponent implements OnInit {

  // form group
  image: FormGroup;

  errorAlert: string;
  successAlert: string;

  // returned values
  createdPlace;

  constructor(
    private imageService: ImageService,
    private http: HttpClient,
    private router: Router
  ) {}

  /**
   * Executes a request to the endpoint to upload an image
   */
  onSubmit(image): void {

    console.log(image);

    /**
     * 
     */
    this.imageService
    .uploadUserImage(image)
    .subscribe(
      data => {

        console.log('Image was uploaded');
        
        },
      
        (err: HttpErrorResponse) => {
  
          if (err.error instanceof Error) {
            console.log('Something went wrong', err.error.message);
          } else {
            this.errorAlert = 'Ha sucedido un problema, y no hemos creado tu lugar';
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        }

    );
  }

  /**
   * On Init
   */
  ngOnInit(): void {

    this.image = new FormGroup({
      data: new FormControl('')
    });
  }
  
}