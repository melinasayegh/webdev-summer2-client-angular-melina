/*
//const SECTION_STUDENT_API_URL = 'https://webdev-server-node-melina.herokuapp.com/api/student/SID/section';
*/

const SECTION_STUDENT_API_URL = 'http://localhost:3000/api/student/SID/section';
const HEROKU_SECTION_STUDENT_API_URL = 'https://webdev-server-node-melina.herokuapp.com/api/student/SID/section';

import { Injectable } from '@angular/core';

@Injectable()
export class EnrollmentServiceClient {

  // SECTIONS
  findAllSectionsForStudent(studentId) {
    return fetch(HEROKU_SECTION_STUDENT_API_URL.replace('SID', studentId))
      .then(response => response.json());
  }

  enrollStudent(    sectionId) {
    const url = 'http://localhost:3000/api/section/' + sectionId + '/enrollment';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(HEROKU_URL, {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  unEnrollStudent(sectionId) {
    const url = 'http://localhost:3000/api/section/' + sectionId + '/enrollment';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(HEROKU_URL, {
      method: 'delete',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}
