import { Injectable } from '@angular/core';
import { IUser } from "../entities/user/user.component";
import { ignoreElements, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  users: Array<IUser> = [ ];

  constructor(private http: HttpClient) {
  }

  getElems(): Observable<Array<IUser>>{
    return this.http.get<Array<IUser>>('/api/user');
  }

  delete(id: number): void{
    this.users = this.users.filter(elem => elem.id !== id);
  }
}



