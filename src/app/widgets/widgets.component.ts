import { Component, OnInit } from '@angular/core';
import {CourseNavigatorServiceClient} from '../services/coursenavigator.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})
export class WidgetsComponent implements OnInit {

  lessonId;
  widgets = [];

  constructor(private service: CourseNavigatorServiceClient,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  setParams(params) {
    this.lessonId = params.lessonId;
    this.loadWidgets(this.lessonId);
  }

  loadWidgets(lessonId) {
    this.service.findAllWidgetsForLesson(lessonId)
      .then(widgets => this.widgets = widgets);
  }

  ngOnInit() {
  }

}
