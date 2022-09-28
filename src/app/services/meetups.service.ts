import { Injectable } from '@angular/core';
import {  } from "module";

@Injectable({
  providedIn: 'root'
})
export class MeetupsService {
  
  constructor() { }

  meetups: Array<IMeetup> = [ ];

  delete(id: number): void{
    this.meetups = this.meetups.filter(meetup => meetup.id !== id);
  }

   addElem(meetup: IMeetup): void {
    this.meetups.unshift(meetup);
   }
}
