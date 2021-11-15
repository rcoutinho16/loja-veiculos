import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;

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

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(40)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  onSubmit(): void {

    if (this.registerForm.valid) {
      this.user.username = this.registerForm.value.username;
      this.user.email = this.registerForm.value.email;
      this.user.password = this.registerForm.value.password;

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

}
