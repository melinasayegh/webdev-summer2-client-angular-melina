import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseNavigatorServiceClient} from '../services/coursenavigator.service.client';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  lessons = [];
  selectedCourseId;
  selectedModuleId;

  constructor(private route: ActivatedRoute, private courseService: CourseNavigatorServiceClient) {
    this.route.params.subscribe(params => {
      this.selectedCourseId = params['courseId'];
      this.selectedModuleId = params['moduleId'];
      this.loadLessons(params['courseId'], params['moduleId']);
    });
  }

  loadLessons = (courseId, moduleId) => {
    this.courseService.findAllLessonsForModule(courseId, moduleId)
      .then(lessons => this.lessons = lessons);
  }


  ngOnInit() {
  }

}
