import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/classes/course';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.sass']
})
export class NewCourseComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  passwordMatch = false;

  constructor(private formBuilder: FormBuilder,private router: Router,private courseService: CourseService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      location: ['', Validators.required],
      time: ['', Validators.required],
      type: ['',Validators.required],
      lecturerID: ['',Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;


    if (this.registerForm.invalid) {
      //console.log("invalid");
      return;
    }

    console.log(this.registerForm.value);
    //courseService.
    // elkuldeni a cuccokat
    //this.router.navigate(['/courselist']);


  }

}
