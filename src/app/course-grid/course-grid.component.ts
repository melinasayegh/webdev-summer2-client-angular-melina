import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../services/user.service.client';
import { CourseNavigatorServiceClient } from '../services/coursenavigator.service.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';

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

  constructor(private userService: UserServiceClient,
              private courseService: CourseNavigatorServiceClient,
              private enrollmentService: EnrollmentServiceClient) { }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  selectSection(section) {
    this.selectedSection = section;
  }

  unEnroll(section) {
    this.enrollmentService.unEnrollStudent(section._id)
        .then(() => alert('You have been un-enrolled.'));
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
