import { Injectable } from '@angular/core';

@Injectable()
export class QuizServiceClient {
  createQuiz(quiz) {
    const url = 'http://localhost:3000/api/quiz';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/quiz';
    return fetch(url, {
      method: 'post',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    }).then(response => response.json());
  }
  findAllQuizzes() {
    const url = 'http://localhost:3000/api/quiz';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/quiz';
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
    const url = 'http://localhost:3000/api/quiz/';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/quiz/';
    return fetch(url + quizId, {
      method: 'put',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    }).then(response => response.json());
  }
  deleteQuiz(quizId) {
    const url = 'http://localhost:3000/api/quiz/';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/quiz/';
    return fetch(url + quizId, {
      method: 'delete',
      credentials: 'include',
      headers: {
        'content-type': 'application/json',
      }
    }).then(response => response.json());
  }
}
