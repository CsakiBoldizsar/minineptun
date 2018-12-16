import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  message: string;
  form: FormGroup;
  
  submitted: boolean;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get f() { return this.form.controls; }

  async loginUser(event){
    event.preventDefault();
    this.submitted = true;
    if (this.form.invalid) {
      console.log("invalid");
      return;
    }
    const target = event.target
    const username = target.querySelector('#name').value;
    const password = target.querySelector('#password').value;
    console.log(username + " " + password);
    /*const userDetails = { username : username, password: password}
    console.log(userDetails);*/
    const success = await this.authService.login(username, password)
    if (success) {
      console.log("Login successfull")
      this.router.navigate([""])
    } else {
      console.log('Login failed!');
      this.message = 'Nem sikerült bejelentkezeni';
    }
  }

}
