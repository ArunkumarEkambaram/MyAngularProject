import { NewUser } from './../new-user';
import { Observable } from 'rxjs';
import { RegistrationService } from './../registration.service';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Users: NewUser[] = [];

  constructor(private userService: UserService, public service: RegistrationService) { }

  ngOnInit(): void {
    this.getUsers();
    //this.Users = this.service.getAllUsers();
  }


  getUsers(): void {
    this.service.getUsers().subscribe(resp => {
      this.Users = resp;
      console.log(this.Users);
    });
  }
}

