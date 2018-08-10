import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserServiceClient } from '../services/user.service.client';
import {P} from '@angular/core/src/render3';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserServiceClient) { }

  username;
  password;


  login(username, password) {
    if (username === undefined) {
        window.alert('Please enter your username');
    } else if (password === undefined) {
        window.alert('Please enter your password.');
    } else {
      if (username === 'admin' && password === 'admin') {
        this.userService.login(username, password)
          .then(() => this.router.navigate(['admin']), () => alert('User does not exist.'));

      } else {
        this.userService.login(username, password)
          .then(() => this.router.navigate(['profile']), () => alert('User does not exist.'));

      }
    }
  }
  ngOnInit() {
  }
}
