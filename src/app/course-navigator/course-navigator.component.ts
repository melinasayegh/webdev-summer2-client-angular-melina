import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../services/coursenavigator.service.client';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})

export class CourseNavigatorComponent implements OnInit {


  courses = [];
  modules = [];
  lessons = [];
  widgets = [];
  selectedCourseId;
  selectedCourse = {};
  selectedModule = {};
  selectedLesson = {};
  selectedWidget = {};

  constructor(private service: CourseNavigatorServiceClient) { }


  selectCourse(course) {
    this.selectedCourse = course;
    this.selectedCourseId = course.id;
    this.selectedModule = {};
    this.selectedLesson = {};
    this.selectedWidget = {};

    this.service.findAllModulesForCourse(course.id)
      .then(modules => this.modules = modules);
  }

  selectModule(module) {
    this.selectedModule = module;
    this.selectedLesson = {};
    this.selectedWidget = {};

    this.service.findAllLessonsForModule(this.selectedCourseId, module.id)
      .then(lessons => this.lessons = lessons);
  }

  selectLesson(lesson) {
    this.selectedLesson = lesson;
    this.selectedWidget = {};

    this.service.findAllWidgetsForLesson(lesson.id)
      .then(widgets => this.widgets = widgets);
  }

  selectWidget(widget) {
    this.selectedWidget = widget;
  }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);
  }
}
