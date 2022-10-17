import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { IMeetup } from 'src/app/entities/meetup/meetup.component';
import { MeetupsService } from 'src/app/services/meetups.service';
import { MeetupCreatingComponent } from "../meetup-creating/meetup-creating.component";

@Component({
  selector: 'app-meetup-creating-page',
  templateUrl: './meetup-creating-page.component.html',
  styleUrls: ['./meetup-creating-page.component.scss']
})
export class MeetupCreatingPageComponent implements OnInit {

  constructor(private meetupsService: MeetupsService) { }

  // create(newValue: IMeetup){
  //   this.meetupsService.createNewMeetup(newValue);
  // }

  ngOnInit(): void {
    
  }

}
