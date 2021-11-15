import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

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

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorageService.getUser().roles;
    }

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      password: ['', Validators.compose([Validators.required])]
    });
  }


  public onSubmit(){
    if (this.loginForm.valid){
      this.user.username = this.loginForm.value.username;
      this.user.password = this.loginForm.value.password;
      
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
        }
      );
    }
  }

  reloadPage(): void {
    window.location.reload();
  }
}