import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseNavigatorServiceClient } from '../services/coursenavigator.service.client';


@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  selectedCourseId;
  selectedModule;
  modules = [];

  constructor(private route: ActivatedRoute, private courseService: CourseNavigatorServiceClient) {
    this.route.params.subscribe(params => {
      this.selectedCourseId = params['courseId'];
      this.loadModules(params['courseId']);
    });
  }

  loadModules = (courseId) => {
    this.courseService.findAllModulesForCourse(courseId)
      .then(modules => this.modules = modules);
  }

  ngOnInit() {
  }
}
