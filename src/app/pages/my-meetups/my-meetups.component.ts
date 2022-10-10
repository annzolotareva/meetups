import { Component, OnInit } from '@angular/core';
import { distinctUntilChanged, filter, from } from 'rxjs';
import { IMeetup } from 'src/app/entities/meetup/meetup.component';
import { IUser } from 'src/app/entities/user/user.component';
import { MeetupsService } from 'src/app/services/meetups.service';

@Component({
  selector: 'app-my-meetups',
  templateUrl: './my-meetups.component.html',
  styleUrls: ['./my-meetups.component.scss']
})
export class MyMeetupsComponent implements OnInit {

  myMeetups: Array<IMeetup> = [];

  constructor(public meetupsService: MeetupsService) {}

  

  ngOnInit(): void {
    this.meetupsService.getElems()
    .pipe(
      distinctUntilChanged(((p: Array<IMeetup>, q: Array<IMeetup>) => /*deepEquel...*/ p === q)),
      //from((res: any) => return res)
      // filter((res: IMeetup[]) => res.owner.id === 0)
    )
    .subscribe((arg: any) => {
      console.log(arg);
        this.myMeetups = arg;
  });
  }
}
