import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../services/coursenavigator.service.client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})

export class CourseNavigatorComponent implements OnInit {


  courses = [];
  selectedCourse = {};
  selectedModule = {};
  selectedLesson = {};
  selectedWidget = {};

  constructor(private courseService: CourseNavigatorServiceClient) { }


  selectCourse(course) {
    this.selectedCourse = course;
    this.selectedModule = {};
    this.selectedLesson = {};
    this.selectedWidget = {};
  }

  selectModule(module) {
    this.selectedModule = module;
    this.selectedLesson = {};
    this.selectedWidget = {};
  }

  selectLesson(lesson) {
    this.selectedLesson = lesson;
    this.selectedWidget = {};
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }
}
