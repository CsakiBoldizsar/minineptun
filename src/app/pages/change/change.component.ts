import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';
import { Course } from 'src/app/classes/course';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-change',
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.sass']
})
export class ChangeComponent implements OnInit {

  course: Course;
  registerForm: FormGroup;
  submitted = false;
  loc: string;
  time: string;
  type: string;

  constructor(private route: ActivatedRoute,private courseService: CourseService,private formBuilder: FormBuilder,private router: Router) { }

  async ngOnInit() {
    this.registerForm = this.formBuilder.group({
      location: ['',Validators.required],
      time: ['',Validators.required],
      type: ['',Validators.required],
    });
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.course = await this.courseService.getCourse(id);
    //beallitani ezt a hulyeseget
    this.registerForm.controls['location'].setValue(this.course.location);
    this.registerForm.controls['time'].setValue(this.course.time);
    this.registerForm.controls['type'].setValue(this.course.type);
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;


    if (this.registerForm.invalid) {
      //console.log("invalid");
      return;
    }

    
    this.course.location = this.registerForm.value.location;
    this.course.type = this.registerForm.value.type;
    this.course.time = this.registerForm.value.time;
    console.log(this.course);
    this.courseService.updateCourse(this.course);
    // elkuldeni a cuccokat
    this.router.navigate(['/mycourses']);


  }


}
