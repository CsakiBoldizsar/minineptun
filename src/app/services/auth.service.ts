import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
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
  token: string = "";
  redirectUrl: string;
  private usersUrl = 'http://localhost:8080/users';

  constructor(
    private http: HttpClient
  ) { }

  //regisztracio
    async register(username: string, password: string,role:string){
      try {
        await this.http.post(
          'http://localhost:8080/users/register',
          {
            "username":username,
            "password":password,
            "role":role
          },
          httpOptions
         
        ).toPromise();
        console.log('hej')
        //this.user = user;
        return Promise.resolve(true);
      } catch (e) {
        console.log('hiba', e);
        return Promise.resolve(false);
      }
    }

  //bejelenkeztetes
  async login(username: string, password: string): Promise<boolean> {
    const token = btoa(`${username}:${password}`);
    httpOptions.headers =
      httpOptions.headers.set(
        'Authorization',
        `Basic ${token}`
      );
    try {
      const user = await this.http.post<User>(
        `${this.usersUrl}/login`,
        {

        },
        httpOptions
      ).toPromise();
      this.user = user;
      console.log(user)
      return Promise.resolve(true);
    } catch (e) {
      console.log('hiba', e);
      return Promise.resolve(false);
    }
  }

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
