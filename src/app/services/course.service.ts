import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpOptions } from './auth.service'
import { Course } from '../classes/course';
import { Lecturer } from '../classes/lecturer';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courseUrl = 'http://localhost:8080/courses';

  constructor(private http: HttpClient) { }

  getCourses(): Promise<Course[]> {
    return this.http.get<Course[]>(`${this.courseUrl}`, httpOptions).toPromise();
  }

  getCourse(id: number): Promise<Course> {
    return this.http.get<Course>(`${this.courseUrl}/${id}`,httpOptions).toPromise();
  }

  getCoursesLecturer(name: String): Promise<Course[]>{
    return this.http.get<Course[]>(`${this.courseUrl}/by-lecturer/${name}`,httpOptions).toPromise();
  }

  createCourse(data): Promise<Course> {
    console.log(data);
    return this.http.post<Course>(`${this.courseUrl}`,{
      location: data.location,
      time: data.time,
      type: data.type,
      lecturer: data.lecturerID,
      students: [],
      subject: null
      //hogyan kuldjuk az adatokat
    },httpOptions).toPromise();
  }

  updateCourse(course: Course): Promise<Course> {
    return this.http.put<Course>(`${this.courseUrl}/${course.id}`,{
      //az uj course adatok
    },httpOptions).toPromise();
  }

  deleteCourse(id: number): Promise<Course> {
    return this.http.delete<Course>(`${this.courseUrl}/${id}`,httpOptions).toPromise();
  }


}
