import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseNavigatorServiceClient } from '../services/coursenavigator.service.client';


@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {

  courseId;
  modules = [];
  selectedModule = {};

  constructor(private route: ActivatedRoute, private service: CourseNavigatorServiceClient) {
    this.route.params.subscribe(params => this.setParams(params));
  }

  setParams = (params) => {
    this.courseId = params['courseId'];
    this.loadModules(params['courseId']);
  }

  loadModules = (courseId) => {
    this.courseId = courseId;
    this.service.findAllModulesForCourse(courseId)
      .then(modules => this.modules = modules);
  }

  selectModule = (module) => {
    this.selectedModule = module;
  }

  ngOnInit() {
  }
}
