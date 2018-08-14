import { Injectable } from '@angular/core';


@Injectable()
export class UserServiceClient {

  findUserById(userId) {
    const url = 'http://localhost:3000/api/user/' + userId;
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/user/' + userId;
    return fetch(HEROKU_URL)
      .then(response => response.json());
  }

  login(username, password) {
    const url = 'http://localhost:3000/api/login';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/login';
    const user = {
      username: username,
      password: password
    };
    return fetch(HEROKU_URL, {
      method: 'post',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then((response) => response.json());
  }

  logout() {
    const url = 'http://localhost:3000/api/logout';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/logout';
    return fetch(HEROKU_URL, {
      method: 'post',
      credentials: 'include'
    })
  }

  profile() {
    const url = 'http://localhost:3000/api/profile';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/profile';
    return fetch(HEROKU_URL, {
        credentials: 'include', // include, same-origin, *omit
      }).then(response => response.json());
  }

  deleteProfile() {
    const url = 'http://localhost:3000/api/profile';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/profile';
    return fetch(HEROKU_URL, {
        method: 'delete',
      credentials: 'include', // include, same-origin, *omit
      }).then(response => response.json());
  }

  updateProfile(newProfile) {
    const url = 'http://localhost:3000/api/profile';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/profile';
    return fetch(HEROKU_URL, {
      method: 'put',
      body: JSON.stringify(newProfile),
      credentials: 'include', // include, same-origin, *omit
      }).then(response => response.json());
  }

  createUser(user) {
    const url = 'http://localhost:3000/api/user';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/user';
    return fetch(HEROKU_URL, {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then((response) => response.json());
  }

  currentUser() {
    const url = 'http://localhost:3000/api/currentUser';
    const HEROKU_URL = 'https://webdev-server-node-melina.herokuapp.com/api/currentUser';
    return fetch(HEROKU_URL, {
      credentials: 'include'
    }).then((response) => (response.json()));
  }
}
