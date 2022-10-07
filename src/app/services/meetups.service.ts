import { Injectable } from '@angular/core';
import { BehaviorSubject, ignoreElements, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsersService } from "./users.service";
import { IMeetup } from "../entities/meetup/meetup.component"

@Injectable({
  providedIn: 'root'
})
export class MeetupsService{
  meetups$: Observable<Array<IMeetup>> = this.http.get<Array<IMeetup>>('/api/meetup');
  subject$ = new BehaviorSubject<IMeetup[]>([]);
  constructor(private http: HttpClient) {
    console.log('create');
    this.refresah();
    setInterval(() => this.refresah(), 30000);
  }
  refresah() {
    this.meetups$.subscribe((result: IMeetup[]) => {
      console.log(result);
      this.subject$.next(result)
    });
  }

  getElems(){
    return this.subject$;
  }

  // delete(id: number): void{
  //   this.meetups = this.meetups.filter(elem => elem.id !== id);
  // }
  
  //  addElem(meetup: IMeetup): void {
  //     this.meetups.push(meetup);
  //  }
}

