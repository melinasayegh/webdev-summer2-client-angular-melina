import { Injectable } from '@angular/core';

@Injectable()
export class SubmissionServiceClient {

  loadAllSubmissions(quizId) {
    const url = 'http://localhost:3000/api/quiz/QID/submissions';
    const HEROKU_URL = 'http://localhost:3000/api/quiz/QID/submissions';
    return fetch(url.replace('QID', quizId))
      .then(response => response.json());
  }

  loadSubmissionsForQuizAndStudent(quizId) {
    const url = 'http://localhost:3000/api/quiz/QID/submission/student';
    const HEROKU_URL = 'http://localhost:3000/api/quiz/QID/submission/student';
    return fetch(url.replace('QID', quizId))
      .then(response => response.json());
  }

  loadSubmissionsForQuiz(quizId) {
    const url = 'http://localhost:3000/api/quiz/QID/submission';
    const HEROKU_URL = 'http://localhost:3000/api/quiz/QID/submission';
    return fetch(url.replace('QID', quizId))
      .then(response => response.json());
  }

  submitQuiz(quiz) {
    const url = 'http://localhost:3000/api/quiz/QID/submission';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/quiz/QID/submission';
    return fetch(url.replace('QID', quiz._id), {
      method: 'post',
      body: JSON.stringify(quiz),
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    }).then(response => response.json());
  }
}

