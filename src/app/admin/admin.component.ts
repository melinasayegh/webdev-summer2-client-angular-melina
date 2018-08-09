import { Component, OnInit } from '@angular/core';
import { CourseNavigatorServiceClient } from '../services/coursenavigator.service.client';
import { SectionServiceClient } from '../services/section.service.client';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  courses = [];
  sections = [];

  constructor(private courseService: CourseNavigatorServiceClient,
              private sectionService: SectionServiceClient) { }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);

    // change to findAllSectionsForStudent
    this.sectionService.findSectionsForCourse(this.courses[1].id)
      .then(sections => this.sections = sections);
  }
}
