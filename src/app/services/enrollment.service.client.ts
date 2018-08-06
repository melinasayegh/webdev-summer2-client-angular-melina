const SECTION_STUDENT_API_URL = 'https://webdev-server-node-melina.herokuapp.com/api/student/SID/section';

export class EnrollmentServiceClient {

  // SECTIONS
  findAllSectionsForStudent(studentId) {
    return fetch(SECTION_STUDENT_API_URL.replace('SID', studentId))
      .then(response => response.json());
  }

  enrollStudent(studentId, sectionId) {
    return fetch(SECTION_STUDENT_API_URL.replace('SID', studentId) + sectionId)
      .then(response => response.json());
  }

  unEnrollStudent(studentId, sectionId) {
    return fetch(SECTION_STUDENT_API_URL.replace('SID', studentId) + sectionId)
      .then(response => response.json());
  }
}
