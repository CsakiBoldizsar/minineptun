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

  constructor(private route: ActivatedRoute,private courseService: CourseService,private formBuilder: FormBuilder,private router: Router,) { }

  async ngOnInit() {
    this.registerForm = this.formBuilder.group({
      location: [],
      time: [],
      type: [],
    });
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.course = await this.courseService.getCourse(id);
    console.log(this.course.location);

    
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;


    if (this.registerForm.invalid) {
      //console.log("invalid");
      return;
    }

    console.log(this.registerForm.value);
    //this.courseService.createCourse(this.registerForm.value);
    // elkuldeni a cuccokat
    //this.router.navigate(['/courselist']);


  }


}
