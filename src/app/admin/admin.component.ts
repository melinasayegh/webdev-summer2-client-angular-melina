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
  selectedCourse = {
    id: 0,
    title: '',
  };
  sections = [];

  courseIsSelected = false;

  sectionName;
  availableSeats;
  maxSeats;


  constructor(private courseService: CourseNavigatorServiceClient,
              private sectionService: SectionServiceClient) { }

  viewSections(course) {
    this.selectedCourse = {
      id: 0,
      title: ''
    };
    this.selectedCourse = course;
    this.courseIsSelected = true;
    this.sectionService.findSectionsForCourse(course.id)
      .then(sections => this.sections = sections);
    /*
    this.sectionService.findAllSections()
      .then(sections => {
        console.log(sections);
        this.sections = sections;
      });
      */
  }

  createSection() {
    if (this.selectedCourse !== undefined) {
      const numSections = this.sections.length + 1;
      const defaultSection = {
        courseId: this.selectedCourse.id,
        title: this.selectedCourse.title + ' Section ' + (numSections),
        maxSeats: 20,
        availableSeats: 20
      };
      if (this.sectionName !== undefined) {
        defaultSection.title = this.sectionName;
      }

      if (this.availableSeats !== undefined) {
        defaultSection.availableSeats = this.availableSeats;
      }

      if (this.maxSeats !== undefined) {
        defaultSection.maxSeats = this.maxSeats;
      }

      this.sectionService.createSection(this.selectedCourse.id, defaultSection)
        .then(() => this.viewSections(this.selectedCourse));
    }
  }


  addSection(course) {
    // find num sections of course
    this.sectionService.findSectionsForCourse(course.id)
      .then(sections => this.sections = sections);
    const numSections = this.sections.length + 1;
    const section = {
      courseId: course.id,
      title: course.title + ' Section ' + (numSections),
      maxSeats: 20,
      availableSeats: 20
    };
    this.sectionService.createSection(course.id, section)
      .then(() => this.viewSections(course));
  }

  selectSection(section) {
    this.sectionName = section.title;
    this.availableSeats = section.availableSeats;
    this.maxSeats = section.maxSeats;
  }

  updateSection() {
    const section = {
      courseId: this.selectedCourse.id,
      title: this.sectionName,
      maxSeats: this.maxSeats,
      availableSeats: this.availableSeats
    };

    this.sectionService.updateSection(this.selectedCourse.id, section)
      .then(() => this.viewSections(this.selectedCourse));
  }

  deleteSection(section) {
    this.sectionService.deleteSection(section._id)
      .then(() => this.viewSections(this.selectedCourse),
        () => this.viewSections(this.selectedCourse));
  }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }
}
