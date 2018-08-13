
import { Injectable } from '@angular/core';

@Injectable()
export class EnrollmentServiceClient {

  findSectionsForStudent() {
    const url = 'http://localhost:3000/api/student/section';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/student/section';
    return fetch(url, {
      method: 'get',
      credentials: 'include'
    }).then(response => response.json());
  }

  enrollStudent(sectionId) {
    const url = 'http://localhost:3000/api/section/' + sectionId + '/enrollment';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    }).then(response => response.json());
  }

  unEnrollStudent(sectionId) {
    const url = 'http://localhost:3000/api/section/' + sectionId + '/enrollment';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'delete',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }
}

