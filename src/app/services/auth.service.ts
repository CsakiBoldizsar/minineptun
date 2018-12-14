import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { User } from '../classes/user';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': '',
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = null;
  redirectUrl: string;
  private usersUrl = 'http://localhost:8080/users';

  constructor() { }

  //regisztracio

  //bejelenkeztetes


  //kijelentzetetes
  logout() {
    httpOptions.headers = httpOptions.headers.set('Authorization', ``);
    this.user = null;
  }

  // megvizsgalni hogy be van e lepve a felhasznalo
  isLoggedIn() {
    return this.user != null;
  }
}
