import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PagesnotfoundComponent } from './pages/pagesnotfound/pagesnotfound.component';


import { HttpClientModule } from '@angular/common/http';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { NewCourseComponent } from './pages/new-course/new-course.component';
import { SubjectListComponent } from './pages/subject-list/subject-list.component';
import { ChangeComponent } from './pages/change/change.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PagesnotfoundComponent,
    MyCoursesComponent,
    CourseListComponent,
    CourseDetailsComponent,
    NewCourseComponent,
    SubjectListComponent,
    ChangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
