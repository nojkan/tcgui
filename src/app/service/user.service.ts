import { Injectable } from '@angular/core';

import { User } from '../model/user';
import { USERS } from '../mock/mock-users';

@Injectable()
export class UserService {

  constructor() { }

  	 getUsers(): Promise<User[]> {
  	return Promise.resolve(USERS);
  } 

}
