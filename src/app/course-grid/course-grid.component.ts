import { Component, OnInit } from '@angular/core';
import { CourseNavigatorServiceClient } from '../services/coursenavigator.service.client';
import { SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  courses = [];
  selectedCourse = {};

  sections = [];
  selectedSection = {};

  constructor(private courseService: CourseNavigatorServiceClient,
              private sectionService: SectionServiceClient) { }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  selectSection(section) {
    this.selectedSection = section;
  }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);

    // change to findAllSectionsForStudent
    this.sectionService.findAllSections()
      .then(sections => this.sections = sections);

  }
}
