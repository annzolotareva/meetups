import { Component, OnDestroy, OnInit } from '@angular/core';
import { find, forEach, merge } from 'lodash';
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
    .subscribe((arg: any) => {
        this.myMeetups = arg.filter((elem: IMeetup) => elem.owner.id === this.authService.user.id)
        console.log(this.myMeetups)
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
}

}
