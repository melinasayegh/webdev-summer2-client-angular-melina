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
    })
  }

  profile() {
    return fetch('http://localhost:3000/api/profile',
      {
        credentials: 'include', // include, same-origin, *omit
      }).then(response => response.json());
  }

  deleteProfile() {
    return fetch('http://localhost:3000/api/profile', {
        method: 'delete',
      credentials: 'include', // include, same-origin, *omit
      }).then(response => response.json());
  }

  updateProfile(newProfile) {
    return fetch('http://localhost:3000/api/profile/', {
      method: 'put',
      body: JSON.stringify(newProfile),
      credentials: 'include', // include, same-origin, *omit
      }).then(response => response.json());
  }

  createUser(user) {
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
