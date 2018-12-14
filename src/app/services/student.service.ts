import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpOptions } from './auth.service'
import {Student} from '../classes/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentUrl = 'http://localhost:8080/students';

  constructor(private http:HttpClient) { }

  getStudents(): Promise<Student[]> {
    return this.http.get<Student[]>(`${this.studentUrl}`, httpOptions).toPromise();
  }

  getStudent(id: number): Promise<Student> {
    return this.http.get<Student>(`${this.studentUrl}/${id}`, httpOptions).toPromise();
  }

  createStudent(student: Student): Promise<Student>{
    return this.http.post<Student>(`${this.studentUrl}`,{
      // hogyan kuldjuk az adatokat
    }, httpOptions).toPromise();
  }

  deleteStudent(id: number): Promise<Student>{
    return this.http.delete<Student>(`${this.studentUrl}/${id}`, httpOptions).toPromise();
  }

  pickUpCourse(id: number): Promise<Student>{
    return this.http.put<Student>(`${this.studentUrl}/${id}`,{
      //milyen targyat vesz fel
    }, httpOptions).toPromise();
  }

  leaveCourse(id: number): Promise<Student>{
    return this.http.put<Student>(`${this.studentUrl}/${id}`,{
      //milyen targyat vesz fel
    }, httpOptions).toPromise();
  }

}
