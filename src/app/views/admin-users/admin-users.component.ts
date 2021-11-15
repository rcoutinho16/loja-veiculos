import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  public users: User[] = [];

  constructor(private userService: UsersService,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response: User[]) => {
      this.users = response;
      console.log(this.users);
    });
  }

  public delete(id: string) {
    this.userService.deleteUser(id).subscribe(
      (response) => {
        this.userService.getUsers().subscribe((response2: User[]) => {
          this.users = response2;
        });
      },
      err => {
        this.toastr.error(err.message);
      });
  }

}
