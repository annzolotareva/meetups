import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { filter, mergeMap, Subscription, take } from 'rxjs';
import { IMeetup } from 'src/app/entities/meetup/meetup.component';
import { AuthService } from 'src/app/services/auth.service';
import { MeetupsService } from 'src/app/services/meetups.service';
import { UsersService } from 'src/app/services/users.service';
import { MeetupCardComponent } from '../../components/meetup-card/meetup-card.component';

@Component({
  selector: 'app-meetup-editing-page',
  templateUrl: './meetup-editing-page.component.html',
  styleUrls: ['./meetup-editing-page.component.scss']
})
export class MeetupEditingPageComponent implements OnInit{
  from: any;
  meetupId!: number;
  
  newMeetups: Array<IMeetup> = [];
  
  newMeetup!: IMeetup | undefined;
  subscription!: Subscription;

  constructor(public meetupsService: MeetupsService, private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
  this.from = this.router.url.lastIndexOf('/');
  this.meetupId = Number(this.router.url.slice(this.from + 1));
  }

change(nId: number){
  nId = this.meetupId;
  this.subscription = this.meetupsService.getElems()
    .pipe(
      take(1)
    )
    .subscribe((arg: IMeetup[]) => {
      
      this.newMeetup = arg.find(elem => elem.id === this.meetupId)  
      console.log(this.newMeetup);
    });
  
    this.meetupsService.changeMeetup(nId, this.newMeetup).subscribe();

    this.meetupsService.refresah();
   this.router.navigate(['my-meetups']);
  
}

delete() {
  this.meetupsService.deleteMeetup(this.meetupId).subscribe();
  this.router.navigate(['my-meetups']);
}



}
