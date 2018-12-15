import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'
import { PagesnotfoundComponent } from './pages/pagesnotfound/pagesnotfound.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { NewCourseComponent } from './pages/new-course/new-course.component';
import { SubjectListComponent } from './pages/subject-list/subject-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'courselist',
    component: CourseListComponent
  },
  {
    path: 'mycourses',
    component: MyCoursesComponent
  },
  {
    path: 'newcourse',
    component: NewCourseComponent
  },
  {
    path: 'coursedetails/:id',
    component: CourseDetailsComponent
  },
  {
    path: 'subjects',
    component: SubjectListComponent
  },
  {
    path: '**',
    component: PagesnotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
