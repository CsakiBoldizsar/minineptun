import { Component, OnInit } from '@angular/core';
import {Course} from '../../classes/course';
import { Router } from '@angular/router';
import { StudentService} from '../../services/student.service';
import { LecturerService} from '../../services/lecturer.service';
import { AuthService } from '../../services/auth.service';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.sass']
})
export class MyCoursesComponent implements OnInit {

  courses: Course[]; 

  constructor(private router: Router, private authService: AuthService, private courseService: CourseService,
    private studentService: StudentService, private lecturerService: LecturerService) { }

  async ngOnInit() {
    switch(this.authService.user.role){
      case "ROLE_STUDENT":
        const student = await this.studentService.getStudentByName(this.authService.user.username);
        this.courses = student.courses;
        console.log(student.courses)
        break;
      case "ROLE_LECTURER":
        const lecturer = await this.lecturerService.getLecturerByName(this.authService.user.username);
        this.courses = lecturer.courses;
        console.log(lecturer.courses)
        break;
      default:
        const allcourses = await this.courseService.getCourses();
        this.courses = allcourses
        break;
    }
  }

  removeCourse(course: Course): void{
    console.log(course.id)
  }

  showDetails(course: Course): void{
    this.router.navigate(['/coursedetails',course.id]);
  }

}
