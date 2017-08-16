import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { User } from './user';

// application logic is added here, in the service
@Injectable()
export class UserRolesService {

	private headers = new Headers({'Content-Type': 'application/json'});
	private usersUrl = 'api/users';  // URL to web api

	constructor(private http: Http) { }

	// assign role to user
	assignRole() {
	}
		
	private handleError(error: any): Promise<any> {
		console.error('An error occurred', error); // for demo purposes only
		return Promise.reject(error.message || error);
	}

}