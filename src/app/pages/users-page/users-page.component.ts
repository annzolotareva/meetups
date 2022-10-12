import { Component, OnDestroy, OnInit } from '@angular/core';
import { distinctUntilChanged, Subscription } from 'rxjs';
import { IUser } from 'src/app/entities/user/user.component';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit, OnDestroy { 
  nUsers: Array<IUser> = [];
  subscription!: Subscription;

  constructor(public usersService: UsersService) {}

  

  ngOnInit(): void {
    this.subscription =this.usersService.getElems()
    .subscribe((arg: any) => {
      console.log(arg);
      this.nUsers = arg;
  });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
}

}

