import { Injectable } from '@angular/core';

@Injectable()
export class QuizServiceClient {
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
  createQuiz(quiz) {
    const url = 'http://localhost:3000/api/quiz/QID/submission';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/quiz/QID/submission';
  }
  findAllQuizzes() {
    const url = 'http://localhost:3000/api/quiz';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/quiz/';
    return fetch(url)
      .then(response => response.json());
  }
  findQuizById(quizId) {
    const url = 'http://localhost:3000/api/quiz/';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/quiz/';
    return fetch(url + quizId, {
      method: 'get',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    }).then(response => response.json());
  }
  updateQuiz(quizId, quiz) {
    const url = 'http://localhost:3000/api/quiz/QID/submission';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/quiz/QID/submission';
  }
  deleteQuiz(quizId) {
    const url = 'http://localhost:3000/api/quiz/QID/submission';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/quiz/QID/submission';
  }
}
