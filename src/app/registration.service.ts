import { NewUser } from './new-user';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RegistrationService {

  //newUser: NewUser[];

  url: string = "http://localhost:60745/api/NewUser/";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<NewUser[]> {
    return this.http.get<NewUser[]>(this.url + "GetAll");
  }

  createNew(user: NewUser): Observable<NewUser> {
    return this.http.post<NewUser>(this.url + "AddNewUser", user)
  }
}
