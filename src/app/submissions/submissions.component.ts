import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SubmissionServiceClient} from '../services/submission.service.client';
import {Submission} from '../models/submission.model.client';
import {UserServiceClient} from '../services/user.service.client';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements OnInit {

  quizId = '';
  quiz = {
    title: ''
  };
  submissions = [{
      _id: '',
      student: {
        username: ''
      },
      timestamp: new Date().toLocaleString()
    }];
  isLoggedIn = false;
  isAdminUser = false;
  currentUser = {
    username: ''
  };
  studentSubmissionFiltered = [{
    _id: '',
    student: {
      username: ''
    },
    timestamp: new Date().toLocaleString()
  }];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private quizService: QuizServiceClient,
              private submissionService: SubmissionServiceClient,
              private userService: UserServiceClient) {
  }

  fixDate = (date) => {
    return new Date(date).toLocaleString();
  }

  loadSubmissions(quizId) {
    this.quizId = quizId;
    this.quizService.findQuizById(quizId).then((quiz) => this.quiz = quiz)
    if (this.isAdminUser) {
      this.submissionService.loadSubmissionsForQuiz(quizId)
        .then(submissions => this.submissions = submissions);
    } else if (this.isLoggedIn) {
      this.submissionService.loadSubmissionsForQuizAndStudent(quizId)
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
