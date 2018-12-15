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
  token: string;
  redirectUrl: string;
  private usersUrl = 'http://localhost:8080/login';

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

    try {
      await this.http.post<HttpResponse<Object>>(
        'http://localhost:8080/login',
        {
          "username":username,
          "password":password
        },
        { observe: 'response' }
      ).subscribe(res=>{
          this.user = new User(username,password,res.headers.get("role"))
          this.token = res.headers.get("authorization")
          console.log(res.headers.get("role"))
          console.log(res.headers.get("authorization"))
      });
      
      //this.user = user;
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
