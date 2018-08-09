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

  login() {
    if (this.username === '') {
        alert('Please enter your username');
    } else if (this.password === '') {
        alert('Please enter your password.');
    } else {
      this.userService.login(this.username, this.password)
        .then( (response) =>  {
          if (response.message === 404) {
            alert('This user does not exist.');
          } else {
            this.router.navigate(['profile']);
          }
        });
    }
  }
  ngOnInit() {
  }
}
