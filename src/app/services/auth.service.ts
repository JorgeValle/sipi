
// Angular core
import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

// Sipi custom
import { WindowService } from '../services/window.service';

// Third party
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  private window;

  constructor(
    private http: Http,
    private windowService: WindowService
  ) {
    this.window = windowService.nativeWindow;
  }


  /**
   * Deletes the token, logging the user out
   */
  logout(): void {
    window.localStorage.removeItem('sipiToken');
  }

  /**
   * returns current user
   */
  getCurrentUser() {

  }

  /**
   * Registers a new user
   * @async
   * @param
   * @param
   * @returns
   */
  signup(user) {

    // the user we are about to create
    const newUser = {
      firstName: user.firstName,
      lastName: user.lastName,
      password: user.password,
      email: user.email,
      consent: user.consent
    };

    return this.http.post(
      // `http://localhost:4100/api/auth/signup`,
      `https://sipi-antares.herokuapp.com/api/auth/signup`,
      newUser
    )
    .map((res:Response) => res.json());    
  }

  /**
   * Logs a user in
   * @async
   * @param
   * @param
   * @returns
   */
  login(user) {

    // the user trying to sign in
    const userData = {
      email: user.email,
      password: user.password
    };

    return this.http.post(
      // `http://localhost:4100/api/auth/login`,
      `https://sipi-antares.herokuapp.com/api/auth/login`,
      userData
    )
    .map((res:Response) => res.json());    
  }

  /**
   * Gets token from local storage
   * @returns
   */
  getToken() {
    return window.localStorage['sipiToken'];
  }

  /**
   * Saves token to local storage
   * @returns
   */
  saveToken(token) {
    window.localStorage['sipiToken'] = token;
  };

}