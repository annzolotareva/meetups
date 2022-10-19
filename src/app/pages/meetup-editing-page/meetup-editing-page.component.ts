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
  
  newMeetups: Array<IMeetup> = [];
  
  newMeetup?: IMeetup;
  subscription!: Subscription;

  constructor(public meetupsService: MeetupsService, private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
  
  }

  
// change(nElem: any){
//     this.meetupsService.changeMeetup(meetupId, nElem).subscribe(() => this.meetupsService.refresah());

    
//    this.router.navigate(['my-meetups']);
  
// }

// delete() {
//   this.meetupsService.deleteMeetup(this.meetupId).subscribe();
//   this.router.navigate(['my-meetups']);
// }



}
