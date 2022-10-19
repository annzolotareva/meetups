import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, take } from 'rxjs';
import { IMeetup } from 'src/app/entities/meetup/meetup.component';
import { AuthService } from 'src/app/services/auth.service';
import { MeetupsService } from 'src/app/services/meetups.service';
import { MeetupEditingPageComponent } from '../../pages/meetup-editing-page/meetup-editing-page.component'

@Component({
  selector: 'app-meetup-card',
  templateUrl: './meetup-card.component.html',
  styleUrls: ['./meetup-card.component.scss']
})
export class MeetupCardComponent implements OnInit {
  @Output()
public createEvent = new EventEmitter();
  panelOpenState = false;
  isOpened: boolean = false;
  visible: boolean = false;
  isSubscriber: boolean = false;
  subs!: string;
  subscription!: Subscription;
  
  
  constructor(public meetupsService: MeetupsService, private router: Router, public authService: AuthService) { }
  toggle(){
    this.isOpened = !this.isOpened;
    if (this.isOpened) {
      this.visible = true
    } else {
      this.visible = false
    }
  }
  
  @Input()
    newMeetup!: IMeetup;


  subscr() {
    this.isSubscriber = !this.isSubscriber;
          this.meetupsService.addSubscriber(this.newMeetup.id, this.authService.user.id).subscribe(() => this.meetupsService.refresah());
  }

  unSubscr() {
    this.isSubscriber = !this.isSubscriber;
    this.meetupsService.deleteSubscriber(this.newMeetup.id, this.authService.user.id).subscribe(() => this.meetupsService.refresah());
  }


  change(): void {
    this.createEvent.emit(this.newMeetup);
    this.router.navigate([`meetups/edit/${this.newMeetup.id}`]);
    
  }

  sklonenie(number: number, txt: Array<string>) {
    const cases = [2, 0, 1, 1, 1, 2];
    return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
  }

  ngOnInit(): void {
    this.subs = this.sklonenie(this.newMeetup.users.length, ['подписчик', 'подписчика', 'подписчиков']);
  } 

  // isOwner() {
  //   this.subscription = this.meetupsService.getElems()
  //   .pipe(
  //     take(1)
  //   )
  //   .subscribe((arg: IMeetup[]) => {
  //     if (this.authService.user.id ===) {

  //     }
      
  //     this.newMeetup = arg.find(elem => elem.id === this.meetupId)  
  //     console.log(this.newMeetup);
  //   });
  //   if (this.authService.user.id === )
  // }

}

  

