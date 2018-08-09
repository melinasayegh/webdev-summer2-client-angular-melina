import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from '../models/user.model.client';
import { UserServiceClient } from '../services/user.service.client';
import { SectionServiceClient } from '../services/section.service.client';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: UserServiceClient,
              private sectionService: SectionServiceClient,
              private router: Router) { }

  user = {};
  username;
  password;
  firstName;
  lastName;
  phoneNum;
  email;
  address;

  sections = [];

  update(user) {
    console.log(user);
  }

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
    }
    this.service.updateProfile(newUser);

  }

  deleteProfile() {
    this.service.deleteProfile()
      .then(() =>
        this.router.navigate(['login']));

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

    this.sectionService.findSectionsForStudent()
      .then(sections => this.sections = sections );
  }
}
