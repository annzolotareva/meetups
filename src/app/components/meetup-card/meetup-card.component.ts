import { Component, Input, OnInit } from '@angular/core';
import { IMeetup } from 'src/app/entities/meetup/meetup.component';

@Component({
  selector: 'app-meetup-card',
  templateUrl: './meetup-card.component.html',
  styleUrls: ['./meetup-card.component.scss']
})
export class MeetupCardComponent implements OnInit {
  ngOnInit(): void {
  } 

  @Input()
    newMeetup!: IMeetup;

    constructor() { }

}

  

