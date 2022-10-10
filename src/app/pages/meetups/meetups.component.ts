import { Component, OnInit } from '@angular/core';
import { MeetupsService } from "../../services/meetups.service";
import { IMeetup } from "../../entities/meetup/meetup.component"
import { distinctUntilChanged, map} from 'rxjs';
import { forEach } from 'lodash';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-meetups',
  templateUrl: './meetups.component.html',
  styleUrls: ['./meetups.component.scss']
})
export class MeetupsComponent implements OnInit {
  
  nMeetups: Array<IMeetup> = [];

  constructor(public meetupsService: MeetupsService, public authService: AuthService) {}

  deepEqual = (a: any, b: any) => {
    if (a === b) {
      return true;
    }
    if (a === null || b === null || typeof a !== 'object' || typeof b !== 'object') {
      return false;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
      return false;
    }
    for (let i = 0; i < aKeys.length; i += 1) {
      const key = aKeys[i];
      if (!bKeys.includes(key) || !this.deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  };


  
  ngOnInit(): void {
    this.meetupsService.getElems()
    .pipe(
      distinctUntilChanged((a: Array<IMeetup>, b: Array<IMeetup>) => this.deepEqual(a, b)),
    )
    .subscribe((arg: any) => {
      console.log(arg);
        this.nMeetups = arg;
    });
  }

}


