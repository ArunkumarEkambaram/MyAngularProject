import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-user',
  templateUrl: './sign-user.component.html',
  styleUrls: ['./sign-user.component.css']
})
export class SignUserComponent implements OnInit {

  emailId: string = "";
  password: string = "";
  status: string = "";
  //isValid = false;

  constructor() { }

  ngOnInit(): void {
  }

  onValidate() {
    if (this.emailId.toLowerCase() == "admin@gmail.com"
    && this.password == "Admin@123") {
      this.status = "Login Successfull";
      // this.isValid = true;
    }
    else {
      this.status = "Invalid EmailId or Password";
      //this.isValid = false;
    }
  }

  getStatus() {
    //return this.isValid ? 'green' : 'red';
    return this.status.includes("Success") ? 'green' : 'red';
  }

  isValid(){
    return this.status.includes("Success");
  }
}
