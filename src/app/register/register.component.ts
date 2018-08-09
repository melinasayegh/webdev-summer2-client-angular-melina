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

    if (this.username === '') {
      alert('Please enter a username.');
    } else if (this.password === '') {
      alert('Please enter a password.');
    } else if (this.password2 === '') {
      alert('Please confirm your password.');
    } else if (this.password !== this.password2) {
        alert('Passwords do not match.');
    } else {
      this.service.createUser(this.username, this.password)
        .then( (response) =>  {
          if (response === 406) {
            alert('This username already exists.');
            } else {
              this.router.navigate(['profile']);
            }
        });
    }
  }

  ngOnInit() {
  }

}
