import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SubjectService } from 'src/app/services/subject.service';

@Component({
  selector: 'app-new-subject',
  templateUrl: './new-subject.component.html',
  styleUrls: ['./new-subject.component.sass']
})
export class NewSubjectComponent implements OnInit {


  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder,private router: Router,private subjectService: SubjectService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      category: ['',Validators.required]
    });
  }

  get f() { return this.registerForm.controls; }

  async onSubmit() {
    this.submitted = true;


    if (this.registerForm.invalid) {
      //console.log("invalid");
      return;
    }

    console.log(this.registerForm.value);
    this.subjectService.createSubject(this.registerForm.value);
    // elkuldeni a cuccokat
    this.router.navigate(['/subjects']);
  }

}
