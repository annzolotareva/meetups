import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, mergeMap, Subscription, take } from 'rxjs';
import { IMeetup } from 'src/app/entities/meetup/meetup.component';
import { MeetupsService } from 'src/app/services/meetups.service';
import { MeetupCardComponent } from '../../components/meetup-card/meetup-card.component';

@Component({
  selector: 'app-meetup-editing-page',
  templateUrl: './meetup-editing-page.component.html',
  styleUrls: ['./meetup-editing-page.component.scss']
})
export class MeetupEditingPageComponent implements OnInit {
  
  newMeetups: Array<IMeetup> = [];
  newMeetup!: IMeetup;
  subscription!: Subscription;
  meetupId!: number;
  nId!: number;
  

  constructor(public meetupsService: MeetupsService, private router: Router) {}

  ngOnInit(): void {
    const from = this.router.url.lastIndexOf('/');
    this.meetupId = Number(this.router.url.slice(from + 1));
    
    this.subscription = this.meetupsService.getElems()
    .pipe(
      take(1)
    )
    .subscribe((arg: IMeetup[]) => {
      arg.find(elem => elem.id === this.meetupId)
      this.newMeetups.push(this.newMeetup);
    });
  }
   ngOnDestroy() {
    this.subscription.unsubscribe()
}

}
