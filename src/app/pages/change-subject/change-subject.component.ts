import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from '../../classes/subject';

@Component({
  selector: 'app-change-subject',
  templateUrl: './change-subject.component.html',
  styleUrls: ['./change-subject.component.sass']
})
export class ChangeSubjectComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  subject: Subject;

  constructor(private route: ActivatedRoute,private formBuilder: FormBuilder,private router: Router,private subjectService: SubjectService) { }

  async ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['',Validators.required],
      category: ['',Validators.required],
    });
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.subject = await this.subjectService.getSubject(id);

    this.registerForm.controls['name'].setValue(this.subject.name);
    this.registerForm.controls['category'].setValue(this.subject.category);
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;


    if (this.registerForm.invalid) {
      //console.log("invalid");
      return;
    }

    
    this.subject.name = this.registerForm.value.name;
    this.subject.category = this.registerForm.value.category;
    this.subjectService.updateSubject(this.subject);
    // elkuldeni a cuccokat
    this.router.navigate(['/subjects']);


  }

}
