import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form: any = {
    username: null,
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

  public isLoggedIn = false;
  public isLoginFailed = false;
  public errorMessage = '';
  public roles: string[] = [];

  constructor(private router: Router,
              private authService: AuthService,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
    }
  }


  public onSubmit(){
    const { username, password } = this.form;

    this.user.username = username;
    this.user.password = password;
    
    this.authService.login(this.user).subscribe(
      (response: User) => {
        this.tokenStorageService.saveToken(response.accessToken);
        this.tokenStorageService.saveUser(response);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorageService.getUser().roles;
        this.reloadPage();
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      });
  }

  reloadPage(): void {
    window.location.reload();
  }
}