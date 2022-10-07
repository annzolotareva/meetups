import { Injectable } from '@angular/core';
import { IUser } from "../entities/user/user.component";
import { ignoreElements, Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
users$: Observable<Array<IUser>> = this.http.get<Array<IUser>>('/api/user');
subject$ = new BehaviorSubject<IUser[]>([]);;

constructor(private http: HttpClient) {
  this.refresah();
  setInterval(() => this.refresah(), 30000);
}

refresah() {
  this.users$.subscribe((result: IUser[]) => {
    console.log(result);
    this.subject$.next(result)
  });
}

getElems(){
  return this.subject$;
}

  // delete(id: number): void{
  //   this.users = this.users.filter(elem => elem.id !== id);
  // }
}


