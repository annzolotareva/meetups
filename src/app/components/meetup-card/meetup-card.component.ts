import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  panelOpenState = false;
  isOpened: boolean = false;
  visible: boolean = false;
  isSubscriber: boolean = false;
  
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
    this.meetupsService.addSubscriber(this.newMeetup.id, this.authService.user.id)
  }

  unSubscr() {
    this.isSubscriber = !this.isSubscriber;
    this.meetupsService.addSubscriber(this.newMeetup.id, this.authService.user.id)
  }


  change(): void {
    this.meetupsService.changeMeetup(this.newMeetup.id);
  }

  ngOnInit(): void {
    
  } 

  
}

  

