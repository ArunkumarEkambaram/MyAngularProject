// import { parseTemplate } from '@angular/compiler';

export class User {
  firstname: string;
  lastname: string;
  emailId: string;
  password: string;
  mobileNo: number;
  gender: string;
  constructor(firstName: string, lastName: string, emailId: string, password: string, mobileNo: number, gender: string
  ) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.emailId = emailId;
    this.password = password;
    this.mobileNo = mobileNo;
    this.gender = gender;
  }
}
