import { Component, OnInit } from '@angular/core';
import { MeetupCreatingComponent } from "../meetup-creating/meetup-creating.component";

@Component({
  selector: 'app-meetup-creating-page',
  templateUrl: './meetup-creating-page.component.html',
  styleUrls: ['./meetup-creating-page.component.scss']
})
export class MeetupCreatingPageComponent implements OnInit {

  constructor() { }

  create(value: object){
    console.log(value);
  }

  ngOnInit(): void {
  }

}
