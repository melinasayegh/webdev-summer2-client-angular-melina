/*
const SECTION_API_URL = 'https://webdev-server-node-melina.herokuapp.com/api/section';
const SECTION_COURSE_API_URL = 'https://webdev-server-node-melina.herokuapp.com/api/course/CID/section';
*/

const SECTION_API_URL = 'http://localhost:3000/api/section';
const SECTION_COURSE_API_URL = 'http://localhost:3000/api/course/CID/section';

const HEROKU_SECTION_API_URL = 'https://webdev-server-node-melina.herokuapp.com/api/section';
const HEROKU_SECTION_COURSE_API_URL = 'https://webdev-server-node-melina.herokuapp.com/api/course/CID/section';

import { Injectable } from '@angular/core';

@Injectable()
export class SectionServiceClient {

  findAllSections() {
    return fetch(HEROKU_SECTION_API_URL)
      .then(response => response.json());
  }

  findSectionsForStudent() {
    const url = 'http://localhost:3000/api/student/section';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/student/section';
    return fetch(HEROKU_URL, {
      credentials: 'include'
    }).then(response => response.json());
  }

  findSectionsForCourse(courseId) {
    const url = 'http://localhost:3000/api/course/CID/section';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/course/CID/section';
    return fetch(HEROKU_URL.replace('CID', courseId))
      .then(response => response.json());
  }

  findSectionById(sectionId) {
    return fetch(HEROKU_SECTION_API_URL + '/' + sectionId)
      .then(response => response.json());
  }

  createSection(courseId, section) {
    return fetch(HEROKU_SECTION_COURSE_API_URL.replace('CID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  deleteSection(sectionId) {
    return fetch(HEROKU_SECTION_API_URL + '/' + sectionId, {
      method: 'delete',
      credentials: 'include'
    }).then(response => response.json());
  }
}
