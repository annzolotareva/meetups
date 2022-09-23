import { Injectable } from '@angular/core';

export interface IMeetup {
  id: number;
  name: string;
  description: string; 
  location: string;
  target_audience: string;
  need_to_know: string;
  will_happen: string;
  reason_to_come: string;
  time: string;
  duration: number;
  createdBy: number, 
}

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
