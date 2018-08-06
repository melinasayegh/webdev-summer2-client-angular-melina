const SECTION_API_URL = 'https://webdev-server-node-melina.herokuapp.com/api/section';
const SECTION_COURSE_API_URL = 'https://webdev-server-node-melina.herokuapp.com/api/course/CID/section';


export class SectionServiceClient {

  // SECTIONS
  findAllSections() {
    return fetch(SECTION_API_URL)
      .then(response => response.json());
  }

  findAllSectionsForStudent(studentId) {
    return fetch(SECTION_API_URL + studentId)
      .then(response => response.json());
  }

  findAllSectionsForCourse(courseId) {
    return fetch(SECTION_API_URL + courseId)
      .then(response => response.json());
  }

  findSectionById(sectionId) {
    return fetch(SECTION_API_URL + sectionId)
      .then(response => response.json());
  }
}
