import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/entities/user/user.component';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit { 
  nUsers: Array<IUser> = [];

  constructor(public userService: UsersService) {
    userService.getElems().subscribe((arg) => {
      console.log(arg);
      this.nUsers = arg
  });
   }

  ngOnInit(): void {
  }

 


}
