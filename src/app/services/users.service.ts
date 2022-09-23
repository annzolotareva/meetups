import { Injectable } from '@angular/core';

export interface IUser {
  id: number;
  email: string;
  password: string; 
  fio: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  meetups: Array<IUser> = [ ];

  constructor() { }
}
