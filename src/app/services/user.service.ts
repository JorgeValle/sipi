
import {map} from 'rxjs/operators';
// Angular core
import { Injectable }              from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { HttpHeaders }             from '@angular/common/http';

// Sipi custom
import { User }          from '../components/users/user';

// Third party

// import { Observable } from "rxjs";
// import 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(
    private http: Http
  ) {}

  /**
   * Gets all users, indiscriminately
   * @async
   * @param
   * @returns
   */
  getUsers() {
    return this.http.get(`http://localhost:4100/api/retrieve/users`).pipe(
    map((res:Response) => res.json()));
  }

  /**
   * Gets one specific user from endpoint, by id
   * @async
   * @param {number} id - The id of the user we want to fetch
   * @returns {object} - The returned, singular place from the endpoint
   */
  getUser(id: number) {
    console.log('Get user ran');

    return this.http.get(`http://localhost:4100/api/retrieve/user/${id}`).pipe(
    map((res:Response) => res.json()));
  }

  /**
   * Polls user, by id
   * @async
   * @param {number} id - The id of the user we want to poll
   * @returns {object} - The returned, singular place from the endpoint
   */
  pollUser(id: number) {

    console.log('Poll ran');

    return this.http.get(`http://localhost:4100/api/retrieve/user/poll/${id}`).pipe(
    map((res: Response) => res.json()));
  }

  /**
   * Retrieves user notifications
   */
  getUserNotifications(id: number) {
    return this.http.get(`http://localhost:4100/api/retrieve/notifications/${id}`).pipe(
    map((res:Response) => res.json()));
  }

  /**
   * Updates a user with updated information
   */
  updateUser(user) {

    const updatedUser = {
      "userId": 809,
      "firstName": user.firstName,
      "lastName": user.lastName,
      "bio": user.bio,
      "country": user.country,
      "city": user.city,
      "favorites": user.favorites
    };

    return this.http.put(
      `http://localhost:4100/api/update/user`,
      updatedUser
    ).pipe(
    map((res:Response) => res.json()));

  }

  /**
   * Update the user's privacy settings
   */
  updateUserPrivacy(setting) {

    const updatedPrivacy = {
      userId: 809,
      privacyLevel: setting.level
    };

    return this.http.put(
      'http://localhost:4100/api/update/user/privacy',
      updatedPrivacy
    ).pipe(
    map((res:Response) => res.json()));
  }

  /**
   * Update the user's status
   */
  updateUserStatus(status) {

    const updatedStatus = {
      userId: 72,
      status: status
    };

    return this.http.put(
      'http://localhost:4100/api/update/user/status',
      updatedStatus
    ).pipe(
    map((res:Response) => res.json()));
  }

  // delete one specific user
  deleteUser() {
  }

}