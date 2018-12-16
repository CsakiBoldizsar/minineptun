import { Component, OnInit } from '@angular/core';
import { CourseService} from '../../services/course.service';
import { AuthService } from '../../services/auth.service';
import { Course } from '../../classes/course';
import { Router } from '@angular/router';
import { Student } from '../../classes/student';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass']
})
export class CourseListComponent implements OnInit {
  
  courses: Course[] ;

  constructor(private router: Router,private authService: AuthService, private courseService: CourseService) { }

  async ngOnInit() {
      //ha auth -ban a role lecturer vagy student
      //lekérdezni a getbyname el, kiírni a kurzusait
      //ha admin, akkor az összes kurzust lekérdezni
      //service ekben lehet hogy async await fog kelleni
      const allcourses = await this.courseService.getCourses();
      this.courses = allcourses
  }

  showDetails(course: Course): void{
    this.router.navigate(['/coursedetails',course.id]);
  }

  addCourse(course: Course): void{
    console.log("kappa");
  }

}
