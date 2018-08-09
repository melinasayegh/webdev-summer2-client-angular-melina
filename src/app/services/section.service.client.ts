/*
const SECTION_API_URL = 'https://webdev-server-node-melina.herokuapp.com/api/section';
const SECTION_COURSE_API_URL = 'https://webdev-server-node-melina.herokuapp.com/api/course/CID/section';
*/

const SECTION_API_URL = 'http://localhost:3000/api/section';
const SECTION_COURSE_API_URL = 'http://localhost:3000/api/course/CID/section';


export class SectionServiceClient {

  // SECTIONS
  findAllSections() {
    return fetch(SECTION_API_URL)
      .then(response => response.json());
  }

  findSectionsForStudent() {
    const url = 'http://localhost:3000/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findSectionsForCourse(courseId) {
    return fetch(SECTION_API_URL + courseId)
      .then(response => response.json());
  }

  findSectionById(sectionId) {
    return fetch(SECTION_API_URL + sectionId)
      .then(response => response.json());
  }
}
