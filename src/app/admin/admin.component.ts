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
  selectedCourse = {};
  sections = [];

  constructor(private courseService: CourseNavigatorServiceClient,
              private sectionService: SectionServiceClient) { }

  viewSections(course) {
    this.selectedCourse = course;
    //this.sectionService.findSectionsForCourse(course.id)
      //.then(sections => this.sections = sections);
    this.sectionService.findAllSections()
      .then(sections => this.sections = sections);
  }
  addSection(course) {
    // find num sections of course
    this.sectionService.findSectionsForCourse(course.id)
      .then(sections => this.sections = sections);
    const numSections = this.sections.length + 1;
    const section = {
      courseId: course.id,
      title: course.title + ' Section 1',// + (numSections),
      maxSeats: 20,
      takenSeats: 0
    };
    this.sectionService.createSection(course.id, section)
      .then(() => this.viewSections(course));
  }

  updateSection(section) {
   console.log(section._id);
    console.log(section.courseId);
  }

  deleteSection(section) {
    this.sectionService.deleteSection(section._id)
      .then(() => {
        this.viewSections(this.selectedCourse);
      });
  }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }
}
