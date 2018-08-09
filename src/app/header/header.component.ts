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

  constructor(private router: Router, private userService: UserServiceClient) {}

  toggleNavbar = () => {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  logout = () =>
    this.userService.logout()
      .then(() => this.router.navigate(['login']))

  ngOnInit() {
    this.userService.currentUser()
      .then((response) =>  {
        if (response.username !== null) {
          this.isLoggedIn = true;
          if ((response.username === 'admin') && (response.password === 'admin')) {
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
