import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { httpOptions } from './auth.service'
import {Lecturer} from '../classes/lecturer';

@Injectable({
  providedIn: 'root'
})
export class LecturerService {

  private lecturerUrl = 'http://localhost:8080/lecturers';

  constructor(private http:HttpClient) { }

  getLecturers(): Promise<Lecturer[]>{
    return this.http.get<Lecturer[]>(`${this.lecturerUrl}`,httpOptions).toPromise();
  }
  
  getLecturer(id: number): Promise<Lecturer>{
    return this.http.get<Lecturer>(`${this.lecturerUrl}/${id}`,httpOptions).toPromise();
  }

  createLecturer(lecturer: Lecturer): Promise<Lecturer>{
    return this.http.post<Lecturer>(`${this.lecturerUrl}`,{
      
    },httpOptions).toPromise();
  }

  deleteLecturer(id: number): Promise<Lecturer>{
    return this.http.delete<Lecturer>(`${this.lecturerUrl}/${id}`,httpOptions).toPromise();
  }

  pickUpCourse(id: number): Promise<Lecturer>{
    return this.http.put<Lecturer>(`${this.lecturerUrl}/${id}`+"/add-course",{

    },httpOptions).toPromise();
  }

  leaveCourse(id: number): Promise<Lecturer>{
    return this.http.put<Lecturer>(`${this.lecturerUrl}/${id}`+"/remove-course",{
      
    },httpOptions).toPromise();
  }
}
