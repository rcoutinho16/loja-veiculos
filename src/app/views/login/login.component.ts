import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = {
    "_id": "",
    "name": "",
    "email": "",
    "pass": "",
    "isAdmin": false,
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  public onSubmit(form: any){
    this.user.email = form.value.email;
    this.user.pass  = form.value.pass;

    if (this.user.email == 'admin@admin.com' && this.user.pass == 'admin') {
      this.router.navigate(['/home']);
    }else{
      console.log('Unauth');
    }
  }

}
