// Angular core
import { ActivatedRoute, Router, ParamMap }                                 from '@angular/router';
import { Component, OnInit }                                                from '@angular/core';
import { FormControl, FormGroup, NgForm, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse }                                                from '@angular/common/http/src/response';
import { Location }                                                         from '@angular/common';

// Sipi custom
import { AuthService } from '../../services/auth.service';

// component decorator
@Component({
  selector: 'sign-in-form',
  templateUrl: './sign-in-form.component.html',
  providers: [
    AuthService
  ]
})

export class SignInFormComponent {

  signedInUser;

  errorAlert: string;
  successAlert: string;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  signIn: FormGroup;

  /**
   * On Init
   */
  ngOnInit(): void {
    this.signIn= new FormGroup({
      email: new FormControl('maja@vasilj.com'),
      password: new FormControl('12345')
    });
  }

  // /**
  //  * The main on submit function
  //  */
  // onSubmit(signInData): void {

  //   console.log(signInData);

  //   /**
  //    * Create the place, through service
  //    * @param
  //    * @param
  //    */
  //   this.authService
  //   .login(signInData)
  //   .subscribe(
  //     data => {

  //       this.signedInUser = data;

  //       // login was successful
  //       this.authService.saveToken(data.token);
  //       this.router.navigate([`/usuario/${this.signedInUser.id}`]);
  //       // this.successAlert = 'Bienvenido de regreso';
  //       console.log('User was signed in');

  //       },
      
  //       (err: HttpErrorResponse) => {
  
  //         if (err.error instanceof Error) {
  //           console.log('Something went wrong', err.error.message);
  //         } else {
  //           this.errorAlert = 'La combinación de usuario y contraseña esta incorrecta';
  //           console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
  //         }
  //       }
  //   );

  // }

  // /**
  //  * Signs the user in using the Facebook API
  //  */
  // signInFacebook(): void {
    
  // }

  testClick(): void {
    this.authService.login();
  }
  
}