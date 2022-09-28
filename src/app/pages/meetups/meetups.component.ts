import { Component, OnInit } from '@angular/core';
import { MeetupsService } from "../../services/meetups.service";

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.scss']
})
export class MeetupsComponent implements OnInit {

  constructor(public meetupsService: MeetupsService) { }

  ngOnInit(): void {
  }

}
