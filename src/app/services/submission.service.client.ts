import { Injectable } from '@angular/core';

@Injectable()
export class SubmissionServiceClient {

  findSubmissionById(submissionId) {
    const url = 'http://localhost:3000/api/submission';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/submission';
    return fetch(HEROKU_URL +  submissionId)
      .then(response => response.json());
  }

  loadAllSubmissions(quizId) {
    const url = 'http://localhost:3000/api/quiz/QID/submission';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/quiz/QID/submission';
    return fetch(HEROKU_URL.replace('QID', quizId),{
      method: 'get',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }}).then(response => response.json());
  }

  loadSubmissionsForQuizAndStudent(quizId) {
    const url = 'http://localhost:3000/api/quiz/QID/submission/student';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/quiz/QID/submission/student';
    return fetch(HEROKU_URL.replace('QID', quizId), {
        method: 'get',
        credentials: 'include',
        headers: {
          'content-type': 'application/json',
        }}).then(response => response.json());
  }

  loadSubmissionsForQuiz(quizId) {
    const url = 'http://localhost:3000/api/quiz/QID/submission';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/quiz/QID/submission';
    return fetch(HEROKU_URL.replace('QID', quizId))
      .then(response => response.json());
  }

  submitQuiz(quizId, submission) {
    const url = 'http://localhost:3000/api/quiz/QID/submission';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/quiz/QID/submission';
    return fetch(HEROKU_URL.replace('QID', quizId), {
      method: 'post',
      body: JSON.stringify(submission),
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    }).then(response => response.json());
  }
}

