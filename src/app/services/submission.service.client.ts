import { Injectable } from '@angular/core';

@Injectable()
export class SubmissionServiceClient {

  loadSubmissions(quizId) {
    return fetch('http://localhost:3000/api/quiz/' + quizId + '/submissions')
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

