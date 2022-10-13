import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
export class MeetupEditingPageComponent {
  
  newMeetups: Array<IMeetup> = [];
  // @Output()
  // public parentEvent = new EventEmitter();
  
  // newMeetup!: IMeetup | undefined;
  // subscription!: Subscription;
  // nId!: number;
  

  // constructor(public meetupsService: MeetupsService, private router: Router) {}

  // ngOnInit(): void {
  //   const from = this.router.url.lastIndexOf('/');
  //   let meetupId = Number(this.router.url.slice(from + 1));
    
  //   this.subscription = this.meetupsService.getElems()
  //   .pipe(
  //     take(1)
  //   )
  //   .subscribe((arg: IMeetup[]) => {
      
  //     this.newMeetup = arg.find(elem => elem.id === meetupId)  
  //     console.log(this.newMeetup);
  //     this.parentEvent.emit(this.newMeetup)
  //     // this.newMeetups.push(this.newMeetup);
  //     // console.log(this.newMeetups);
//   //   });
//   }
//    ngOnDestroy() {
//     this.subscription.unsubscribe()
// }

}
