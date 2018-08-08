// Angular core
import { Component, Input, OnInit }      from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse }      from '@angular/common/http/src/response';

// Sipi custom
import { User }        from '../users/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'update-privacy-settings-form',
  templateUrl: './update-privacy-settings-form.component.html'
})

export class UpdatePrivacySettingsFormComponent implements OnInit {

  // inputs
  @Input() user: User;

  privacy: FormGroup;

  // alerts
  errorAlert: string;
  successAlert: string;

  constructor(
    private userService: UserService
  ) {}

  /**
   * Updates the current user's privacy settings
   */
  onSubmit(privacy): void {

    console.log('Email settings were updated');
    console.log(privacy);

    /**
     * Create the place, through service
     * @param
     * @param
     */
    this.userService
    .updateUserPrivacy(privacy)
    .subscribe(
      data => {
        console.log('User privacy was updated');

        this.successAlert = 'Hemos actualizado sus preferencias de privacidad';
        },
      
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Something went wrong', err.error.message);
          } else {
            console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
            this.errorAlert = 'Ha sucedido un problema al actualizar tus preferencias de privacidad';
          }
        }
    );

  }

  /**
   * On Init
   */
  ngOnInit(): void {

    console.log(this.user.privacy.level);

    this.privacy = new FormGroup({
      level: new FormControl(this.user.privacy.level)
    });
  }

}