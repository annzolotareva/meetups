import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
import { IUser } from 'src/app/entities/user/user.component';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit { 
  nUsers: Array<IUser> = [];

  constructor(public usersService: UsersService) {}

  

  ngOnInit(): void {
    this.usersService.getElems()
    .pipe(
      distinctUntilChanged(((p: Array<IUser>, q: Array<IUser>) => p === q))
    )
    .subscribe((arg: any) => {
      console.log(arg);
      this.nUsers = arg;
  });
  }
}

