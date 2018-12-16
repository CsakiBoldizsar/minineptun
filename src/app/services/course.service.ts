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

  createCourse(data,lecturer,subject): Promise<Course> {
    return this.http.post<Course>(`${this.courseUrl}`,{
      location: data.location,
      time: data.time,
      type: data.type,
      lecturer: lecturer,
      students: [],
      subject: subject
      //hogyan kuldjuk az adatokat
    },httpOptions).toPromise();
  }

  updateCourse(course: Course): Promise<Course> {
    return this.http.put<Course>(`${this.courseUrl}/${course.id}`,course,httpOptions).toPromise();
  }

  deleteCourse(id: number): Promise<Course> {
    return this.http.delete<Course>(`${this.courseUrl}/${id}`,httpOptions).toPromise();
  }


}
