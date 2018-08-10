import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private service: UserServiceClient) { }

  username;
  password;
  password2;
  firstName;
  lastName;
  email;

  register() {
    const newUser = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email
    };

    if (this.username === undefined) {
        window.alert('Please enter a username.');
    } else if (this.password === undefined) {
        window.alert('Please enter a password.');
    } else if (this.password2 === undefined) {
        window.alert('Please confirm your password.');
    } else if (this.password !== this.password2) {
        window.alert('Passwords do not match.');
    } else {
      this.service.createUser(newUser)
        .then((response) =>
          this.router.navigate(['profile']), () => alert('Username already exists.'));
    }
  }

  ngOnInit() {
  }

}
