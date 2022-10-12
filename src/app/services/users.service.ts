import { Injectable } from '@angular/core';
import { IUser } from "../entities/user/user.component";
import { ignoreElements, Observable, BehaviorSubject, distinctUntilChanged } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
users$: Observable<Array<IUser>> = this.http.get<Array<IUser>>('/api/user');
subject$ = new BehaviorSubject<IUser[]>([]);

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
  return this.subject$
  .pipe(
    distinctUntilChanged(((a: Array<IUser>, b: Array<IUser>) => this.deepEqual(a, b)))
  )
}

  delete(id: number): void{

  }
}


