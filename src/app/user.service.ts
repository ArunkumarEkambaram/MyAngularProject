import { User } from './user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

  constructor() { }

  public addNewUser(user: User): number {
    this.users.push(user);
    if (this.users.length > 0) {
      return 1;
    }
  }

  public getUsers(): User[] {
    return this.users;
  }
}
