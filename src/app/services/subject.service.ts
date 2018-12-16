import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpOptions } from './auth.service'
import { Subject } from '../classes/subject';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private subjectUrl = 'http://localhost:8080/subjects';

  constructor(private http: HttpClient) { }

  getSubjects(): Promise<Subject[]>{
    return this.http.get<Subject[]>(`${this.subjectUrl}`,httpOptions).toPromise();
  }
  getSubject(id: number): Promise<Subject>{
    return this.http.get<Subject>(`${this.subjectUrl}/${id}`,httpOptions).toPromise();
  }
  createSubject(data): Promise<Subject>{
    return this.http.post<Subject>(`${this.subjectUrl}`,{
      name: data.name,
      category: data.category,
      lecturers: [],
      courses: []
    },httpOptions).toPromise();
  }

  updateSubject(subject: Subject): Promise<Subject>{
    return this.http.put<Subject>(`${this.subjectUrl}/${subject.id}`,subject,httpOptions).toPromise();
  }

  addLecturer(id: number): Promise<Subject>{
    return this.http.put<Subject>(`${this.subjectUrl}/${id}/add-lecturer`,{
      //
    },httpOptions).toPromise();
  }
  removeLecturer(id:number): Promise<Subject>{
    return this.http.put<Subject>(`${this.subjectUrl}/${id}/remove-lecturer`,{

    },httpOptions).toPromise();
  }
  addCourse(id: number): Promise<Subject>{
    return this.http.put<Subject>(`${this.subjectUrl}/${id}/add-course`,{
      //
    },httpOptions).toPromise();
  }
  removeCourse(id: number): Promise<Subject>{
    return this.http.put<Subject>(`${this.subjectUrl}/${id}/remove-course`,{
      //
    },httpOptions).toPromise();
  }
  deleteSubject(id: number): Promise<Subject>{
    return this.http.delete<Subject>(`${this.subjectUrl}/${id}`,httpOptions).toPromise();
  }
}
