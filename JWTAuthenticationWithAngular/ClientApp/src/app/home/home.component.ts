import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../Model/User';
import { TokenGen } from '../Service/tokenGen';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  UserInformation: User;
  userInfo: User;
  unauthorized: boolean;
  successMessage: string;
  constructor(private tokenGen: TokenGen) {
  }
  ngOnInit() {
    this.UserInformation = new User();
  }
  Login(UserInformation: NgForm) {
    this.tokenGen.GetToken(this.UserInformation).subscribe(response => {
      this.userInfo = response;
      if (response == null) {
        this.unauthorized = true;
        this.successMessage = "Wrong Credentials."
      }
      else {
        sessionStorage.setItem("token", this.userInfo.token);
        this.unauthorized = false;
        this.successMessage="You are logged in successfully now you can fetch the data from weatherforecast api."
      }
    });
  }
}
