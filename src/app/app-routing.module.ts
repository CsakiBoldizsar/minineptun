import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'
import { LoginComponent } from './pages/login/login.component'
import { RegisterComponent } from './pages/register/register.component'
import { PagesnotfoundComponent } from './pages/pagesnotfound/pagesnotfound.component';
import { CourseListComponent } from './pages/course-list/course-list.component';
import { MyCoursesComponent } from './pages/my-courses/my-courses.component';
import { AuthGuard } from './auth.guard';

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
    component: CourseListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'mycourses',
    component: MyCoursesComponent,
    canActivate: [AuthGuard]
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
