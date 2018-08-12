import { Component, OnInit } from '@angular/core';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';
import {CourseNavigatorServiceClient} from '../services/coursenavigator.service.client';
import {SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-enrollment',
  templateUrl: './enrollment.component.html',
  styleUrls: ['./enrollment.component.css']
})
export class EnrollmentComponent implements OnInit {

  selectedCourseId;
  section = {
    title: ''
  };
  selectedEnrollment = {};
  sections = [];
  enrollments = [];
  currentUser = {};

  constructor(private router: Router,
              private userService: UserServiceClient,
              private courseService: CourseNavigatorServiceClient,
              private sectionService: SectionServiceClient,
              private enrollmentService: EnrollmentServiceClient) {
  }

  loadSections = (courseId) => {
    this.selectedCourseId = courseId;
    this.sectionService.findSectionsForCourse(courseId)
      .then((sections) => this.sections = sections);
  }

  updateCurrentUser = () => {
    this.userService.currentUser()
      .then((user) => {
        if (user.username !== undefined && user.username !== '') {
          this.currentUser = user;
        } else {
          this.currentUser = {};
        }
      } );
  }

  findSectionById = (sectionId) => {
    this.sectionService.findSectionById(sectionId)
      .then((section) => this.section = section);
  }

  selectEnrollment(enrollment) {
    this.selectedEnrollment = enrollment;
  }
  enroll(enrollment) {
    if (this.currentUser !== {}) {
      this.enrollmentService.enrollStudent(enrollment.section);
    } else {
      this.router.navigate(['login']);
    }
  }
  unEnroll(enrollment) {
    if (this.currentUser !== {}) {
      this.enrollmentService.unEnrollStudent(enrollment.section);
    } else {
      this.router.navigate(['login']);
    }
  }
  ngOnInit() {
    this.updateCurrentUser();
  }
}
