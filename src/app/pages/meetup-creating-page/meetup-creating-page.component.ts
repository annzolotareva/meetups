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
  newElem!: IMeetup;

  constructor(private meetupsService: MeetupsService) { }

  create(newValue: any){
    this.meetupsService.createNewMeetup(newValue).subscribe(() => this.meetupsService.refresah());
  }

  ngOnInit(): void {
    
  }

}
