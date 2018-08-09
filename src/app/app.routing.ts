import { Routes, RouterModule } from '@angular/router';
import { CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import { RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent} from './profile/profile.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { SectionComponent } from './section/section.component';
import {WhiteboardComponent} from './whiteboard/whiteboard.component';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {AdminComponent} from './admin/admin.component';
import {ModulesComponent} from './modules/modules.component';
import {CourseListComponent} from './course-list/course-list.component';

const appRoutes: Routes = [
  { path: '',           component: WhiteboardComponent },
  { path: 'home',       component: CourseGridComponent },
  { path: 'register',   component: RegisterComponent },
  { path: 'login',      component: LoginComponent },
  { path: 'profile',    component: ProfileComponent },
  { path: 'course',     component: CourseNavigatorComponent },
  { path: 'enrollment', component: EnrollmentComponent },
  { path: 'section',    component: SectionComponent },
  { path: 'admin',      component: AdminComponent},
  { path: 'course/:courseId', component: ModulesComponent },
  { path: 'course-list', component: CourseListComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
