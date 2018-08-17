import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from '../services/quiz.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import { SubmissionServiceClient } from '../services/submission.service.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  quizId = '';
  quiz = {
    title: ''
  };
  questions = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private quizService: QuizServiceClient,
              private submissionService: SubmissionServiceClient) {}

  submitQuiz = () =>
    this.submissionService.submitQuiz(this.quiz)
      .then(() => this.router.navigate(['quiz/{{quizId}}/submission']))

  // have to sign in to submit a quiz
  isSignedIn() {

  }

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.quizService.findQuizById(params['quizId'])
        .then(quiz => {
          this.quiz = quiz;
          this.quizId = quiz._id;
          this.questions = quiz.questions;
        })
    );
  }
}

