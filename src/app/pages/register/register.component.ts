import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  passwordMatch = false;

  constructor(private formBuilder: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      registerUsername: ['', Validators.required],
      registerPassword: ['', [Validators.required, Validators.minLength(6)]],
      registerRole: ['',Validators.required],
      registerPasswordCo: []
    });
  }

  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;
    console.log(this.registerForm.value.registerRole);

    if (this.registerForm.value.registerPassword !== this.registerForm.value.registerPasswordCo) {
      //console.log("password do not patch");
      this.passwordMatch = true;
      return;
    }

    if (this.registerForm.invalid) {
      //console.log("invalid");
      return;
    }

    //console.log(this.registerForm.value);
    this.router.navigate(['/login']);


  }

}
