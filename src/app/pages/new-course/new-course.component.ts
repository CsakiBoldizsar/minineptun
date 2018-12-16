import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Course } from 'src/app/classes/course';
import { CourseService } from 'src/app/services/course.service';
import { LecturerService } from 'src/app/services/lecturer.service';
import { Lecturer } from 'src/app/classes/lecturer';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.sass']
})
export class NewCourseComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  passwordMatch = false;
  lecturers: Lecturer[];

  constructor(private formBuilder: FormBuilder,private router: Router,private courseService: CourseService,private lecturerService: LecturerService) { }

  async ngOnInit() {
    this.registerForm = this.formBuilder.group({
      location: ['', Validators.required],
      time: ['', Validators.required],
      type: ['',Validators.required],
      lecturer: ['',Validators.required]
    });
    const lecturers = await this.lecturerService.getLecturers();
    this.lecturers = lecturers;

  }

  get f() { return this.registerForm.controls; }

  async onSubmit() {
    this.submitted = true;


    if (this.registerForm.invalid) {
      //console.log("invalid");
      return;
    }

    console.log(this.registerForm.value.lecturer);
    const lecturer = await this.lecturerService.getLecturerByName(this.registerForm.value.lecturer);
    const result = await this.courseService.createCourse(this.registerForm.value,lecturer);
    // elkuldeni a cuccokat
    this.router.navigate(['/courselist']);
  }

}
