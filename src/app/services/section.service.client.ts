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
    return fetch(SECTION_API_URL)
      .then(response => response.json());
  }

  findSectionsForCourse(courseId) {
    const url = 'http://localhost:3000/api/course/CID/section';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/course/CID/section';
    return fetch(url.replace('CID', courseId))
      .then(response => response.json());
  }

  findSectionById(sectionId) {
    return fetch(SECTION_API_URL + '/' + sectionId)
      .then(response => response.json());
  }

  createSection(courseId, section) {
    return fetch(SECTION_COURSE_API_URL.replace('CID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  updateSection(courseId, section) {
    return fetch(SECTION_COURSE_API_URL.replace('CID', courseId), {
      method: 'put',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  deleteSection(sectionId) {
    return fetch(SECTION_API_URL + '/' + sectionId, {
      method: 'delete',
      credentials: 'include'
    }).then(response => response.json());
  }
}
