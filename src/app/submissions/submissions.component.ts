import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SubmissionServiceClient} from '../services/submission.service.client';
import {Submission} from '../models/submission.model.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {

  quizId = '';
  submissions: Submission[] = [];
  isLoggedIn = false;
  isAdminUser = false;
  currentUser = {};

  constructor(private route: ActivatedRoute,
              private router: Router,
              private submissionService: SubmissionServiceClient,
              private userService: UserServiceClient) {
  }

  loadSubmissions(quizId) {
    this.quizId = quizId;

    if (this.isAdminUser) {
      this.submissionService.loadSubmissionsForQuiz(this.quizId)
        .then(submissions => this.submissions = submissions);
    } else if (this.isLoggedIn) {
      this.submissionService.loadSubmissionsForQuizAndStudent(this.quizId)
        .then(submissions => this.submissions = submissions);
    } else {
      alert('Please sign in first.');
      this.router.navigate(['login']);
    }
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
      }).then(() => {
        this.route.params.subscribe(params => this.loadSubmissions(params['quizId']));
      }
    );
  }
}