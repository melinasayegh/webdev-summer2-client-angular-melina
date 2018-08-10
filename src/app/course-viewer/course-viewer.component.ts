import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseNavigatorServiceClient} from '../services/coursenavigator.service.client';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  selectedCourse = {};

  constructor(private service: CourseNavigatorServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params =>
        this.loadCourse(params['courseId']));
  }

  loadCourse = (courseId) => {
    console.log(courseId);
    this.service.findCourseById(courseId)
      .then(course => this.selectedCourse = course);
  }

  ngOnInit() {
  }
}
