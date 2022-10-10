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

  deepEqual = (a: any, b: any) => {
    if (a === b) {
      return true;
    }
    if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
      return false;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
      return false;
    }
    for (let i = 0; i < aKeys.length; i += 1) {
      const key = aKeys[i];
      if (!bKeys.includes(key) || !this.deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  };
  

  ngOnInit(): void {
    this.usersService.getElems()
    .pipe(
      distinctUntilChanged(((a: Array<IUser>, b: Array<IUser>) => this.deepEqual(a, b)))
    )
    .subscribe((arg: any) => {
      console.log(arg);
      this.nUsers = arg;
  });
  }
}

