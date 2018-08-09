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

    if (this.username === '') {
        window.alert('Please enter a username.');
    } else if (this.password === '') {
        window.alert('Please enter a password.');
    } else if (this.password2 === '') {
        window.alert('Please confirm your password.');
    } else if (this.password !== this.password2) {
        window.alert('Passwords do not match.');
    } else {
      this.service.createUser(newUser)
        .then( (response) =>  {
          if (response === 406) {
            window.alert('This username already exists.');
            } else {
              this.router.navigate(['profile']);
            }
        });
    }
  }

  ngOnInit() {
  }

}
