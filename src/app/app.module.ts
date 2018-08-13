import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';

import { UserServiceClient } from './services/user.service.client';
import { CourseNavigatorServiceClient } from './services/coursenavigator.service.client';
import { SectionServiceClient } from './services/section.service.client';
import { EnrollmentServiceClient } from './services/enrollment.service.client';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { SectionComponent } from './section/section.component';
import { CourseGridComponent } from './course-grid/course-grid.component';
import { ModulesComponent } from './modules/modules.component';
import { LessonsComponent } from './lessons/lessons.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { AdminComponent } from './admin/admin.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuizTakerComponent } from './quiz-taker/quiz-taker.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';
import { EssayQuestionComponent } from './essay-question/essay-question.component';
import { FillBlanksQuestionComponent } from './fill-blanks-question/fill-blanks-question.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import {QuizServiceClient} from './services/quiz.service.client';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WhiteboardComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    CourseNavigatorComponent,
    CourseGridComponent,
    ModulesComponent,
    LessonsComponent,
    WidgetsComponent,
    EnrollmentComponent,
    SectionComponent,
    AdminComponent,
    CourseListComponent,
    CourseViewerComponent,
    QuizListComponent,
    QuizTakerComponent,
    MultipleChoiceQuestionComponent,
    EssayQuestionComponent,
    FillBlanksQuestionComponent,
    TrueFalseQuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    UserServiceClient,
    CourseNavigatorServiceClient,
    SectionServiceClient,
    EnrollmentServiceClient,
    QuizServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
