import { Injectable } from '@angular/core';
import { ignoreElements, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface IMeetup {
  id: number;
  name: string,
  description: string, 
  location: string, 
  target_audience: string,
  need_to_know: string, 
  will_happen: string,
  reason_to_come: string,
  time:, 
  duration: number,
  createdBy: 1,
  owner: ,
  users:, 
}

@Injectable({
  providedIn: 'root'
})
export class MeetupsService{
  
  meetups: Array<IMeetup> = [ ];
  constructor(private http: HttpClient) {
    this.getElems().subscribe(arg => this.meetups = arg);
  }

  getElems(): Observable<Array<IMeetup>>{
    return this.http.get<Array<IMeetup>>('/api/auth/login');
  }

  delete(id: number): void{
    this.meetups = this.meetups.filter(elem => elem.id !== id);
  }
  
   addElem(meetup: IMeetup): void {
   }
}
