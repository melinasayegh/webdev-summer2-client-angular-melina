import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { CourseNavigatorServiceClient } from './services/coursenavigator.service.client';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { SectionComponent } from './section/section.component';
import { ProfileComponent } from './profile/profile.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import {SectionServiceClient} from './services/section.service.client';
import {EnrollmentServiceClient} from './services/enrollment.service.client';
import {UserServiceClient} from './services/user.service.client';

@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent,
    CourseNavigatorComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    EnrollmentComponent,
    SectionComponent,
    ProfileComponent,
    CourseGridComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    CourseNavigatorServiceClient,
    UserServiceClient,
    SectionServiceClient,
    EnrollmentServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
