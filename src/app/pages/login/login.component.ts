import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    const target = event.target
    const username = target.querySelector('#name').value;
    const password = target.querySelector('#password').value;
    const userDetails = { username : username, password: password}
    console.log(username + " " + password);
    console.log(userDetails);
  }

}
