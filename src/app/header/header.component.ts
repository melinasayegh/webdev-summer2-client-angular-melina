import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceClient } from '../services/user.service.client';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  isAdminUser = false;
  isNavbarOpen = false;
  currentUser = {};

  constructor(private router: Router, private userService: UserServiceClient) {}

  toggleNavbar = () => {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  logout() {
    this.userService.logout()
      .then(() => this.router.navigate(['login']));

  }
  ngOnInit() {
    this.userService.currentUser()
      .then((user) =>  {
        this.currentUser = user;
        if (user.username !== undefined) {
          this.isLoggedIn = true;
          if ((user.username === 'admin') && (user.password === 'admin')) {
            this.isAdminUser = true;
          } else {
            this.isAdminUser = false;
          }
        } else {
          this.isLoggedIn = false;
          this.isAdminUser = false;
        }
      });
    console.log(this.isLoggedIn);
  }
}
