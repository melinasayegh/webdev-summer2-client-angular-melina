import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../services/coursenavigator.service.client';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses = [];
  selectedCourse = {};

  constructor(private courseService: CourseNavigatorServiceClient) { }


  selectCourse(course) {
    this.selectedCourse = course;
  }

  navigateToModules(course) {

  }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }
}
