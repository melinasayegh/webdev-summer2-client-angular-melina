import { Injectable } from '@angular/core';

@Injectable()
export class UserServiceClient {

  findUserById(userId) {
    return fetch('http://localhost:3000/api/user/' + userId)
      .then(response => response.json());
  }

  login(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('http://localhost:3000/api/login', {
      method: 'post',
      body: JSON.stringify(user),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    }).then((response) => response.json());
  }

  logout() {
    return fetch('http://localhost:3000/api/logout', {
      method: 'post',
      credentials: 'include'
    }).then((response) => (response.json()));
  }

  profile() {
    return fetch('http://localhost:3000/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      }).then(response => response.json());
  }

  createUser(username, password) {
    const user = {
      username: username,
      password: password
    };
    return fetch('http://localhost:3000/api/user', {
      body: JSON.stringify(user),
      credentials: 'include', // include, same-origin, *omit
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    }).then((response) => response.json());
  }

  currentUser() {
    return fetch('http://localhost:3000/api/currentUser', {
      credentials: 'include'
    }).then((response) => (response.json()));
  }
}
