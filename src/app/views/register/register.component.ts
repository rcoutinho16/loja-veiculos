import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form: any = {
    username: null,
    email: null,
    password: null
  };

  public user: User = {
    "_id": "",
    "username": "",
    "email": "",
    "password": "",
    "roles": [],
    "accessToken": ""
  };

  public isSuccessful = false;
  public isSignUpFailed = false;
  public errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.user.username = username;
    this.user.email = email;
    this.user.password = password;

    this.authService.register(this.user).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

}
