import { Component, OnDestroy, OnInit } from '@angular/core';
import { MeetupsService } from "../../services/meetups.service";
import { IMeetup } from "../../entities/meetup/meetup.component"
import { distinctUntilChanged, map, Subscription} from 'rxjs';
import { forEach } from 'lodash';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.scss']
})
export class MeetupsComponent implements OnInit, OnDestroy {
  
  nMeetups: Array<IMeetup> = [];
  subscription!: Subscription;

  constructor(public meetupsService: MeetupsService, public authService: AuthService) {}
  
  

  
  ngOnInit(): void {
    this.subscription = this.meetupsService.getElems()
    .subscribe((arg: any) => {
      console.log(arg);
        this.nMeetups = arg;
    });
  }
   ngOnDestroy() {
    this.subscription.unsubscribe()
}

}


