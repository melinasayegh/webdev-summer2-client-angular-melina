import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {Router} from '@angular/router';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {

  quizzes = [];
  isLoggedIn = false;
  currentUser = {};

  constructor(private router: Router,
              private quizService: QuizServiceClient,
              private userService: UserServiceClient) { }


  viewSubmissions = (quizId) => {
    if (this.isLoggedIn) {
      this.router.navigate(['/quiz/' + quizId + '/submission']);
    } else {
      alert('Please sign in first.');
      this.router.navigate(['login']);
    }
  }
  takeQuiz = (quizId) => {
    if (this.isLoggedIn) {
      this.router.navigate(['/quiz/' + quizId]);
    } else {
      alert('Please sign in first.');
      this.router.navigate(['login']);
    }
  }
  ngOnInit() {
    this.quizService.findAllQuizzes()
      .then(quizzes => this.quizzes = quizzes);
    this.userService.currentUser()
      .then((user) =>  {
        this.currentUser = user;
        if (user.username !== undefined) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      });
  }
}


