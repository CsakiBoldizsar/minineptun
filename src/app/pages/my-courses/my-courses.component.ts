import { Component, OnInit } from '@angular/core';
import {Course} from '../../classes/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.sass']
})
export class MyCoursesComponent implements OnInit {

  courses: Course[] = [
    {id: 1, location: 'kappa', time: '11:50',type: 'yeah', students: ['Krisz','Boldi'], lecturer: 'Loczi'},
    {id: 2, location: 'kappa2', time: '12:00',type: 'prog', students: ['Krisz','Boldi','Gergely'], lecturer: 'Klettner Peter'},
    {id: 3, location: 'kappa2', time: '12:00',type: 'prog', students: ['Krisz','Boldi','Gergely'], lecturer: 'Klettner Peter'},
    {id: 4, location: 'kappa2', time: '12:00',type: 'prog', students: ['Krisz','Boldi','Gergely'], lecturer: 'Klettner Peter'},
    {id: 5, location: 'kappa2', time: '12:00',type: 'prog', students: ['Krisz','Boldi','Gergely'], lecturer: 'Klettner Peter'},
    {id: 6, location: 'kappa2', time: '12:00',type: 'prog', students: ['Krisz','Boldi','Gergely'], lecturer: 'Klettner Peter'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  removeCourse(course: Course): void{
    console.log(course.id)
  }

  showDetails(course: Course): void{
    this.router.navigate(['/coursedetails',course.id]);
  }

}
