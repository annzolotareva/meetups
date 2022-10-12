import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, mergeMap, Subscription } from 'rxjs';
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
  static nId: number;
  

  constructor(public meetupsService: MeetupsService, private router: Router) {}

  ngOnInit(): void {
    const from = this.router.url.lastIndexOf('/');
    this.meetupId = Number(this.router.url.slice(from + 1));
    
    this.subscription = this.meetupsService.getElems()
    .pipe(
      mergeMap((res: Array<IMeetup>) => res),
      filter((res: IMeetup) => res.id === this.meetupId)
    )
    .subscribe((meetup: IMeetup) => {
      console.log('mimimmim');
      console.log(meetup);
        this.newMeetup = meetup;
        MeetupEditingPageComponent.nId = meetup.id;
    });
  }
   ngOnDestroy() {
    this.subscription.unsubscribe()
}

}
