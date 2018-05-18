import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  providers: [UserService]
})
export class UserListComponent implements OnInit {

  users: User[];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers() {
    this.userService.findAll().subscribe(
      users => {
        this.users = users;
      },
      err => {
        console.log(err);
      }
    );
  }

  redirectNewUserPage() {
    this.router.navigate(['/user/create']);
  }

  editUserPage(user: User) {
    if (user) {
      this.router.navigate(['user/edit', user.id]);
    }
  }

  deleteUserPage(user: User) {
    if (user) {
      this.userService.deleteUserById(user.id).subscribe(
        res => {
          this.getAllUsers();
          this.router.navigate(['/user']);
          console.log('done');
        }
      );
    }
  }
}
