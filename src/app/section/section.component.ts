import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CourseNavigatorServiceClient} from '../services/coursenavigator.service.client';
import {SectionServiceClient} from '../services/section.service.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  selectedCourseId;
  course = {
    title: ''
  };
  selectedSection = {};
  sections = [];
  currentUser = {};

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserServiceClient,
              private courseService: CourseNavigatorServiceClient,
              private sectionService: SectionServiceClient,
              private enrollmentService: EnrollmentServiceClient) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']));
  }

  loadSections = (courseId) => {
    this.selectedCourseId = courseId;
    this.sectionService.findSectionsForCourse(courseId)
      .then((sections) => this.sections = sections);
    this.findCourseById(courseId);
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

  findCourseById = (courseId) => {
    this.courseService.findCourseById(courseId)
      .then((course) => this.course = course);
  }
  selectSection(section) {
    this.selectedSection = section;
  }
  enroll(section) {
    if (this.currentUser !== {}) {
      this.enrollmentService.enrollStudent(section._id);
    } else {
      this.router.navigate(['login']);
    }
  }
  unEnroll(section) {
    if (this.currentUser !== {}) {
      this.enrollmentService.unEnrollStudent(section._id);
    } else {
      this.router.navigate(['login']);
    }
  }
  ngOnInit() {
    this.updateCurrentUser();
  }
}
