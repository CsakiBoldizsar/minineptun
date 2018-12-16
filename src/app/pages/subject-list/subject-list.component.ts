import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from '../../classes/subject';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.sass']
})
export class SubjectListComponent implements OnInit {

  subjects: Subject[];

  constructor(private router: Router,private authService: AuthService,private subjectService: SubjectService) { }

  async ngOnInit() {
    const allsubjects = await this.subjectService.getSubjects();
    this.subjects = allsubjects;
  }


  async delete(subject: Subject){
    const result = this.subjectService.deleteSubject(subject.id);
    const allsubjects = await this.subjectService.getSubjects();
    this.subjects = allsubjects;
  }

  goToChange(subject: Subject): void{
    this.router.navigate(['/changeSubject',subject.id]);
  }

}
