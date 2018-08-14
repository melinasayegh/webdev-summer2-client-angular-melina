import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserServiceClient } from '../services/user.service.client';
import {EnrollmentServiceClient} from '../services/enrollment.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private enrollmentService: EnrollmentServiceClient,
              private router: Router) { }

  user = {};
  username;
  password;
  firstName;
  lastName;
  phoneNum;
  email;
  address;

  enrollments = [];
  noEnrollments = false;

  logout() {
    this.service.logout()
      .then(() =>
        this.router.navigate(['login']));

  }

  updateProfile() {
    const newUser = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      phoneNumber: this.phoneNum,
      email: this.email,
      address: this.address,
    };
    this.service.updateProfile(newUser);

  }

  deleteProfile() {
    this.service.deleteProfile()
      .then(() =>
        this.router.navigate(['login']));

  }

  loadSections() {
    this.enrollmentService.findSectionsForStudent()
      .then((enrollments) => this.enrollments = enrollments)
  }

  ngOnInit() {
    this.service.profile()
      .then(user => {
        this.username = user.username;
        this.password = user.password;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.phoneNum = user.phoneNumber;
        this.email = user.email;
        this.address = user.address;
      });
    this.loadSections();
  }
}
