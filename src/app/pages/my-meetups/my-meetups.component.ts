import { Component, OnDestroy, OnInit } from '@angular/core';
import { forEach, merge } from 'lodash';
import { distinctUntilChanged, filter, from, mergeMap, Subscription } from 'rxjs';
import { IMeetup } from 'src/app/entities/meetup/meetup.component';
import { IUser } from 'src/app/entities/user/user.component';
import { AuthService } from 'src/app/services/auth.service';
import { MeetupsService } from 'src/app/services/meetups.service';

@Component({
  selector: 'app-my-meetups',
  templateUrl: './my-meetups.component.html',
  styleUrls: ['./my-meetups.component.scss']
})
export class MyMeetupsComponent implements OnInit, OnDestroy  {

  myMeetups: Array<IMeetup> = [];
  subscription!: Subscription;

  constructor(public meetupsService: MeetupsService, public authService: AuthService) {}

  

  ngOnInit(): void {
    
    this.subscription = this.meetupsService.getElems()
    .pipe(
      mergeMap((res: Array<IMeetup>) => res),
      filter((res: IMeetup) => res.owner.id === this.authService.user.id)
      )
    .subscribe((arg: any) => {
      console.log(arg);
        this.myMeetups = arg;
  });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
}

}
