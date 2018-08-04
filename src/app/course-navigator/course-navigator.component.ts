import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../services/CourseNavigatorServiceClient';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private service: CourseNavigatorServiceClient) { }
  courses = [];
  modules = [];
  lessons = [];
  widgets = [];
  selectedCourseId = 0;

  selectCourse(courseId) {
    this.selectedCourseId = courseId;
  }

  ngOnInit() {
    this.service.findAllCourses()
      .then(courses => this.courses = courses);

    this.service.findAllModules()
      .then(modules => this.modules = modules);

    this.service.findAllLessons()
      .then(lessons => this.lessons = lessons);

    this.service.findAllWidgets()
      .then(widgets => this.widgets = widgets);
  }
}
