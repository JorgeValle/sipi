// Angular core
import { Component, Input, OnInit }      from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse }      from '@angular/common/http/src/response';

// Sipi custom
import { User }        from '../users/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'request-user-deletion-form',
  templateUrl: './request-user-deletion-form.component.html'
})

export class RequestUserDeletionFormComponent implements OnInit {

  // inputs
  @Input() user: User;

  request;

  constructor(
    private userService: UserService
  ) {}

  /**
   * On Init
   */
  ngOnInit(): void {

    this.request = new FormGroup({
      status: new FormControl('')
    });
  }

  /**
   * Updates the user's status to request deletion
   */
  onSubmit(request): void {

    console.log('User requested deletion');
    console.log(request);

    /**
     * Create the place, through service
     * @param
     * @param
     */
    this.userService
    .updateUserStatus(request.status)
    .subscribe(
      data => {

        console.log('User deletion was requested');

        },
      
        (err: HttpErrorResponse) => {
  
          if (err.error instanceof Error) {
            console.log('Something went wrong', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          }
        }
    );

  }

}