import { Component, OnInit } from '@angular/core';
import { MeetupsService } from "../../services/meetups.service";
import { IMeetup } from "../../entities/meetup/meetup.component"
import { distinctUntilChanged} from 'rxjs';

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.scss']
})
export class MeetupsComponent implements OnInit {
  
  nMeetups: Array<IMeetup> = [];

  constructor(public meetupsService: MeetupsService) {}

  

  ngOnInit(): void {
    this.meetupsService.getElems()
    .pipe(
      distinctUntilChanged(((p: Array<IMeetup>, q: Array<IMeetup>) => p === q)),
    )
    .subscribe((arg: any) => {
      console.log(arg);
        this.nMeetups = arg;
  });
  }

}


