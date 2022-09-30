import { Injectable } from '@angular/core';
import { ignoreElements, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsersService } from "./users.service";
import { IMeetup } from "../entities/meetup/meetup.component"

@Injectable({
  providedIn: 'root'
})
export class MeetupsService{
  
  meetups: Array<IMeetup> = [ ];
  constructor(private http: HttpClient) {
  }

  getElems(): Observable<Array<IMeetup>>{
    return this.http.get<Array<IMeetup>>('/api/meetup');
  }

  delete(id: number): void{
    this.meetups = this.meetups.filter(elem => elem.id !== id);
  }
  
   addElem(meetup: IMeetup): void {
      this.meetups.push(meetup);
   }
}

