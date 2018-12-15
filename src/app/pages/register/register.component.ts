import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  passwordMatch = false;

  constructor(private formBuilder: FormBuilder,private router: Router,private authService: AuthService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      registerUsername: ['', Validators.required],
      registerPassword: ['', [Validators.required, Validators.minLength(6)]],
      registerRole: ['',Validators.required],
      registerPasswordCo: []
    });
  }

  get f() { return this.registerForm.controls; }


  async onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value.registerRole);
    console.log(this.registerForm.value.registerUsername);
    console.log(this.registerForm.value.registerPassword);
    if (this.registerForm.value.registerPassword !== this.registerForm.value.registerPasswordCo) {
      console.log("password do not patch");
      this.passwordMatch = true;
      return;
    }

    if (this.registerForm.invalid) {
      console.log("invalid");
      return;
    }
    const success = await this.authService.register(
      this.registerForm.value.registerUsername,
      this.registerForm.value.registerPassword,
      this.registerForm.value.registerRole);
    if (success) {
      console.log('Registration successfull')
    //console.log(this.registerForm.value);
      this.router.navigate(['/login']);
    }else{
      console.log('Registration failed')
    }


  }

}
