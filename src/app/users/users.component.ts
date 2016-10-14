import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]
})
export class UsersComponent implements OnInit {

  users: User[] = [];	
   selectedUser: User;

  constructor(private userService: UserService) {}

  onSelect(user: User): void {
       this.selectedUser = user;
   }

   getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);

  }

  ngOnInit(): void {
    this.getUsers();
  }

  gotoDetail(user: User): void { /* not implemented yet */}
  

}
