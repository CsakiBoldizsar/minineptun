import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpOptions } from './auth.service'
import {Student} from '../classes/student';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private studentUrl = 'http://localhost:8080/students';
  httpopt = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data',
      'Authorization': httpOptions.headers.get('Authorization')
    })
  } 

  constructor(private http:HttpClient,private auth:AuthService) { }

  getStudents(): Promise<Student[]> {
    return this.http.get<Student[]>(`${this.studentUrl}`, httpOptions).toPromise();
  }

  getStudent(id: number): Promise<Student> {
    return this.http.get<Student>(`${this.studentUrl}/${id}`, httpOptions).toPromise();
  }

  getStudentByName(name: string): Promise<Student> {
    return this.http.get<Student>(`${this.studentUrl}/by-name/${name}`, httpOptions).toPromise();
  }

  createStudent(student: Student): Promise<Student>{
    return this.http.post<Student>(`${this.studentUrl}`,{
      // hogyan kuldjuk az adatokat
    }, httpOptions).toPromise();
  }

  deleteStudent(id: number): Promise<Student>{
    return this.http.delete<Student>(`${this.studentUrl}/${id}`, httpOptions).toPromise();
  }

  pickUpCourse(name: string, id: number): Promise<Student>{
    return this.http.patch<Student>(`${this.studentUrl}/${name}/add-course/${id}`,{}
      //milyen targyat vesz fel
    ,httpOptions ).toPromise();
  }

  leaveCourse(name: string, id: number): Promise<Student>{
    return this.http.patch<Student>(`${this.studentUrl}/${name}/remove-course/${id}`,{
      //milyen targyat vesz fel
    }, httpOptions).toPromise();
  }

}
