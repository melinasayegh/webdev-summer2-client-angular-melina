import { Routes, RouterModule } from '@angular/router';
import { CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import { RegisterComponent} from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent} from './profile/profile.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { SectionComponent } from './section/section.component';

const appRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'course', component: CourseNavigatorComponent },
  { path: 'enrollment', component: EnrollmentComponent },
  { path: 'section', component: SectionComponent }

];

export const routing = RouterModule.forRoot(appRoutes);
