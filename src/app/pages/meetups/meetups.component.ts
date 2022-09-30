import { Component, OnInit } from '@angular/core';
import { MeetupsService } from "../../services/meetups.service";
import { IMeetup } from "../../entities/meetup/meetup.component"

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.scss']
})
export class MeetupsComponent implements OnInit {
  
  nMeetups: Array<IMeetup> = [];

  constructor(public meetupsService: MeetupsService) {
    meetupsService.getElems().subscribe((arg) => {
      console.log(arg);
      this.nMeetups = arg
  });
   }

  ngOnInit(): void {
    console.log(this.nMeetups)
  }

}


