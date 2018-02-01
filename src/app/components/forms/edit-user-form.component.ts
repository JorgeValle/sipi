// Angular core
import { Component, OnInit, Input }                    from '@angular/core';
import { ActivatedRoute, ParamMap, Router }            from '@angular/router';
import { Location }                                    from '@angular/common';
import { HttpClient, HttpErrorResponse, HttpHeaders }  from '@angular/common/http';
import { FormControl, FormGroup }                      from '@angular/forms';

// Sipi custom
import { User }        from '../users/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'edit-user-form',
  templateUrl: './edit-user-form.component.html'
})

export class EditUserFormComponent implements OnInit {

  // inputs
  @Input() user: User;

  // form group
  updatedUser: FormGroup;

  // alerts
  errorAlert: string;
  successAlert: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) {}

  /**
   * Update the user
   */
  onSubmit(user): void {

    this.userService
    .updateUser(user)
    .subscribe(
      data => {
        console.log('User was updated');
        this.successAlert = 'Tu perfil ha sido actualizado';
        },
      
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Something went wrong', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            this.errorAlert = 'Ha sucedio un error actualizando tu perfil';
          }
        }

    );


  }

  /**
   * On Init
   */
  ngOnInit(): void {
    this.updatedUser = new FormGroup({
      firstName: new FormControl(this.user.firstName),
      lastName: new FormControl(this.user.lastName),
      bio: new FormControl(this.user.bio),
      country: new FormControl(this.user.currentCountry),
      city: new FormControl(this.user.currentCity),
      favorites: new FormControl('')
    });
  }

}