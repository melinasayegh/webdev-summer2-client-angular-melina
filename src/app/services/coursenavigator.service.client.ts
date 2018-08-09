const COURSE_API_URL = 'https://webdev-server-java-melina.herokuapp.com/api/course';

const MODULE_API_URL = 'https://webdev-server-java-melina.herokuapp.com/api/module';
const COURSE_MODULE_API_URL = 'https://webdev-server-java-melina.herokuapp.com/api/course/CID/module';

const LESSON_API_URL = 'https://webdev-server-java-melina.herokuapp.com/api/lesson';
const C_M_L_API_URL = 'https://webdev-server-java-melina.herokuapp.com/api/course/CID/module/MID/lesson';

const WIDGET_API_URL = 'https://webdev-server-java-melina.herokuapp.com/api/widget';
const W_L_API_URL = 'https://webdev-server-java-melina.herokuapp.com/api/lesson/LID/widget';

import { Injectable } from '@angular/core';

@Injectable()
export class CourseNavigatorServiceClient {

  // COURSES
  findCourseById(courseId) {
    return fetch(COURSE_API_URL + courseId)
      .then(response => response.json());
  }

  findAllCourses() {
    return fetch(COURSE_API_URL)
      .then(response => response.json());
  }

  // MODULES
  findModuleById(moduleId) {
    return fetch( MODULE_API_URL +  moduleId, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json());
  }

  findAllModules() {
    return fetch(MODULE_API_URL)
      .then(response => response.json());
  }

  findAllModulesForCourse(courseId) {
    return fetch(COURSE_MODULE_API_URL.replace('CID', courseId), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json());
  }

  // LESSONS
  findLessonById(lessonId) {
    return fetch( LESSON_API_URL + '/' +  lessonId, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(function (response) {
      return response.json();
    });
  }

  findAllLessonsForModule(courseId, moduleId) {
    return fetch(C_M_L_API_URL.replace('CID', courseId).replace('MID', moduleId), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(function (response) {
      return response.json();
    });
  }

  findAllLessons() {
    return fetch(LESSON_API_URL)
      .then(response => response.json());
  }

  // WIDGETS
  findAllWidgets() {
    return fetch(WIDGET_API_URL)
      .then(response => response.json());
  }

  findWidgetById(widgetId) {
    return fetch( WIDGET_API_URL + '/' +  widgetId, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(function (response) {
      return response.json();
    });
  }

  findAllWidgetsForLesson(lessonId) {
    return fetch(W_L_API_URL.replace('LID', lessonId), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(function (response) {
      return response.json();
    });
  }
}
