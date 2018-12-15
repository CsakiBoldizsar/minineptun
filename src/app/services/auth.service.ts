import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../classes/user';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin':'*'
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = null;
  redirectUrl: string;
  private usersUrl = 'http://localhost:8080/login';

  constructor(
    private http: HttpClient
  ) { }

  //regisztracio
    async register(username: string, password: string,role:string){
      try {
        const user = await this.http.post<HttpResponse<Object>>(
          'http://localhost:8080/users/register',
          {
            "username":username,
            "password":password,
            "role":role
          },
          httpOptions
        ).toPromise().then(response=>{
          console.log(response.headers)
        });
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

    try {
      const user = await this.http.post<User>(
        'http://localhost:8080/login',
        {
          "username":username,
          "password":password
        },
        httpOptions
      ).toPromise();
      this.user = user;
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
