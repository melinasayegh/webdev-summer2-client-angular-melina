import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseNavigatorServiceClient} from '../services/coursenavigator.service.client';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  courseId;
  moduleId;
  lessonId;
  selectedModule = {};
  selectedLesson = {};
  lessons = [];

  constructor(private service: CourseNavigatorServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => this.setParams(params));
  }

  setParams(params) {
    this.courseId = params['courseId'];
    this.moduleId = params['moduleId'];
    this.lessonId = params['lessonId'];
    this.loadLessons(this.courseId, this.moduleId);
  }

  loadLessons = (courseId, moduleId) => {
    this.service.findAllLessonsForModule(courseId, moduleId)
      .then(lessons => this.lessons = lessons);
  }

  ngOnInit() {
  }

}
