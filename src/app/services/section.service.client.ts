
import { Injectable } from '@angular/core';

@Injectable()
export class SectionServiceClient {

  findAllSections() {
    const url = 'http://localhost:3000/api/section';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/section';
    return fetch(url)
      .then(response => response.json());
  }

  findSectionsForCourse(courseId) {
    const url = 'http://localhost:3000/api/course/CID/section';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/course/CID/section';
    return fetch(url.replace('CID', courseId))
      .then(response => response.json());
  }

  findSectionsForStudent(studentId) {
    const url = 'http://localhost:3000/api/section/student/SID';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/section/student/SID';
    return fetch(url.replace('SID', studentId))
      .then(response => response.json());
  }

  findSectionById(sectionId) {
    const url = 'http://localhost:3000/api/section';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/section';
    return fetch(url + '/' + sectionId)
      .then(response => response.json());
  }

  createSection(courseId, section) {
    const url = 'http://localhost:3000/api/course/CID/section';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/course/CID/section';
    return fetch(url.replace('CID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  updateSection(courseId, section) {
    const url = 'http://localhost:3000/api/course/CID/section';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/course/CID/section';
    return fetch(url.replace('CID', courseId), {
      method: 'put',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json());
  }

  deleteSection(sectionId) {
    const url = 'http://localhost:3000/api/section';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/section';
    return fetch(url + '/' + sectionId, {
      method: 'delete',
      credentials: 'include'
    }).then(response => response.json());
  }
}
