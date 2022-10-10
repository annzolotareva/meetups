import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, Observable, of } from 'rxjs';
import { Router, RouteReuseStrategy } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { forEach } from 'lodash';
import { Roles } from '../entities/user/user.component';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl: string = `${environment.backendOrigin}/auth`;

  constructor(private http: HttpClient, private routes: Router) {}

  parseJwt(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(
      window
        .atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join('')
    );
    return JSON.parse(jsonPayload);
  }

  getUser(token: string) {
    const objUser = this.parseJwt(token);
    return objUser;
  }


  public get user(): any {
    const token = localStorage.getItem('del_meetups_auth_token');
    if (token) {
      const user: any = this.parseJwt(token);
      return user;
    } else return null;
  }

  // public get isAdmin(): boolean {
  //   let isAdmin: boolean = false;
  //   const objUser = this.user;
  //   console.log(objUser);
  //   objUser.id.forEach((nId: number) => {
  //     if (nId == 1) {
  //       isAdmin = true;
  //     }
  //   });
  //   return isAdmin;
  // }


  public get token(): string | null {
    return localStorage.getItem('del_meetups_auth_token');
  }

  login(email: string, password: string) {
    return this.http
      .post<{ token: string }>(`${this.baseUrl}/login`, { email, password})
      .pipe(
        map((res) => {
          if (res.token) {
            localStorage.setItem('del_meetups_auth_token', res.token);
            this.routes.navigate(['meetups']);
          }
          return null;
        })
      );
  }

  logout() {
    localStorage.removeItem('del_meetups_auth_token');
    this.routes.navigate(['auth']);
  }

  public get isAuth(): boolean {
    if (this.user) {
      return true;
    } else {
      return false;
  }
  } 
  
  public get isAdmin(): boolean {
    this.user.roles.forEach((role: Array<Roles>) => {
      // if (role.id == 1) {
      //   return true;
      // } else {
      //   return false;
      // }
    })
    return this.isAdmin;
  }
}