import { Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, filter, ignoreElements, mergeMap, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsersService } from "./users.service";
import { IMeetup } from "../entities/meetup/meetup.component"
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { IUser } from '../entities/user/user.component';

@Injectable({
  providedIn: 'root'
})
export class MeetupsService{
  meetups$: Observable<Array<IMeetup>> = this.http.get<Array<IMeetup>>('/api/meetup');
  subject$ = new BehaviorSubject<IMeetup[]>([]);
  newMeetup!: Array<IMeetup>;
  
  
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


  constructor(private http: HttpClient, public authService: AuthService, private router: Router) {
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
    return this.subject$
    .pipe(
      distinctUntilChanged((a: Array<IMeetup>, b: Array<IMeetup>) => this.deepEqual(a, b)),
    )
    //subscribe и запись массива, запись Data в массив
  }

  public addSubscriber(idMeetup: number, idUser: number){
    const body = {
    idMeetup: idMeetup,
    idUser: idUser
    };
    return this.http.put('meetups', body); 
  } 

  public deleteSubscriber(idMeetup: number, idUser: number) {
    const body = {
      idMeetup: idMeetup,
      idUser: idUser
    }
   // return this.http.delete('meetups', body); 
  }

  createMeetup(): void {
    location.replace('creating');
  }

  changeMeetup(id: number): void {
    console.log('hi');
    this.router.navigate([`meetups/edit/${id}`]);
  }

  createNewMeetup(newMeetup: IMeetup){     
    const body = {
      name: newMeetup.name, 
      description: newMeetup.description,
      time: newMeetup.time,
      lacation: newMeetup.location,
      target_audience: newMeetup.target_audience,
      need_to_know: newMeetup.need_to_know,
      will_happen: newMeetup.will_happen,
      reason_to_come: newMeetup.reason_to_come
    };
    return this.http.post('/meetup', body); 
}

  // delete(id: number): void{
  //   this.meetups = this.meetups.filter(elem => elem.id !== id);
  // }
  
    // addElem(meetup: IMeetup): void {
    //   this.getElems()
    //   .pipe(

    //   )
    // }
}
