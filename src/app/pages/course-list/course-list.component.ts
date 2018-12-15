import { Component, OnInit } from '@angular/core';
import { CourseService} from '../../services/course.service';
import { Course } from '../../classes/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass']
})
export class CourseListComponent implements OnInit {
  
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

  showDetails(course: Course): void{
    this.router.navigate(['/coursedetails',course.id]);
  }

  addCourse(course: Course): void{
    console.log("kappa");
  }

}
