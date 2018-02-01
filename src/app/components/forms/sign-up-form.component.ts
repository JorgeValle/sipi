// Angular core
import { ActivatedRoute, Router, ParamMap }    from '@angular/router';
import { Component, OnInit }                   from '@angular/core';
import { HttpClient }                          from '@angular/common/http';
import { Location }                            from '@angular/common';
import { HttpErrorResponse }                   from '@angular/common/http/src/response';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

// Sipi custom
import { AuthService } from '../../services/auth.service';

// the component decorator
@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html',
  providers: [
    AuthService
  ]
})

export class SignUpFormComponent implements OnInit {
  
  signUp: FormGroup;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}

  /**
   * On Init
   */
  ngOnInit(): void {
    this.signUp= new FormGroup({
      email: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      password: new FormControl(''),
      consent: new FormControl()
    });
  }

  /**
   * The main on submit function
   */
  onSubmit(signUpData): void {
    
    console.log(signUpData);

    /**
     * Create the place, through service
     * @param
     * @param
     */
    this.authService
    .signup(signUpData)
    .subscribe(
      data => {  
        console.log('New user was created');
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

  /**
   * Signs up user using the Facebook API
   */
  signUpFacebook(): void {

  }

}