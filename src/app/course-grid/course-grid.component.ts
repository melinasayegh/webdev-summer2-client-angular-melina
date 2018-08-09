import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../services/user.service.client';
import { CourseNavigatorServiceClient } from '../services/coursenavigator.service.client';
import { SectionServiceClient} from '../services/section.service.client';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  isLoggedIn;

  courses = [];
  selectedCourse = {};

  sections = [];
  selectedSection = {};

  constructor(private userService: UserServiceClient,
              private courseService: CourseNavigatorServiceClient,
              private sectionService: SectionServiceClient) { }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  selectSection(section) {
    this.selectedSection = section;
  }

  ngOnInit() {
    this.userService.currentUser()
      .then((response) =>  {
        if (response.message === 200) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      });
    console.log(this.isLoggedIn);

    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);

    // change to findAllSectionsForStudent
    this.sectionService.findAllSections()
      .then(sections => this.sections = sections);

  }
}
