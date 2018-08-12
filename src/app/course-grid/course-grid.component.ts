import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../services/user.service.client';
import { CourseNavigatorServiceClient } from '../services/coursenavigator.service.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  isLoggedIn = false;

  courses = [];
  selectedCourse = {};

  enrollments = [];
  selectedSection = {};

  constructor(private router: Router,
              private userService: UserServiceClient,
              private courseService: CourseNavigatorServiceClient,
              private enrollmentService: EnrollmentServiceClient) { }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  selectSection(section) {
    this.selectedSection = section;
  }

  unEnroll(sectionId) {
    this.enrollmentService.unEnrollStudent(sectionId)
      .then(() => location.reload(), () => location.reload());
  }

  ngOnInit() {
    this.userService.currentUser()
      .then((response) =>  {
        console.log(response._id);
        if (response.username !== null) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      });

    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);

    this.enrollmentService.findSectionsForStudent()
      .then(enrollments => this.enrollments = enrollments);
  }
}
