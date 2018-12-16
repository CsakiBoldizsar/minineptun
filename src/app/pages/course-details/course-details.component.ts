import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/classes/course';
import { CourseService } from 'src/app/services/course.service';
import { Student } from 'src/app/classes/student';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.sass']
})
export class CourseDetailsComponent implements OnInit {

  public id: number;
  course: Course = new Course();
  students: Student[];
  constructor(private route: ActivatedRoute,private courseService: CourseService) { }

  async ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.course = await this.courseService.getCourse(id);
    this.students = this.course.students;
  }

}
