import { Component, OnInit } from '@angular/core';
import { forEach, merge } from 'lodash';
import { distinctUntilChanged, filter, from, mergeMap } from 'rxjs';
import { IMeetup } from 'src/app/entities/meetup/meetup.component';
import { IUser } from 'src/app/entities/user/user.component';
import { AuthService } from 'src/app/services/auth.service';
import { MeetupsService } from 'src/app/services/meetups.service';

@Component({
  selector: 'app-my-meetups',
  templateUrl: './my-meetups.component.html',
  styleUrls: ['./my-meetups.component.scss']
})
export class MyMeetupsComponent implements OnInit {

  myMeetups: Array<IMeetup> = [];

  constructor(public meetupsService: MeetupsService, public authService: AuthService) {}

  
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
    this.meetupsService.getElems()
    .pipe(
      distinctUntilChanged((a: Array<IMeetup>, b: Array<IMeetup>) => this.deepEqual(a, b)),
      mergeMap((res: Array<IMeetup>) => res),
      filter((res: IMeetup) => res.owner.id === this.authService.user.id)
      )
    .subscribe((arg: any) => {
      console.log(arg);
        this.myMeetups = arg;
  });
  }

}
