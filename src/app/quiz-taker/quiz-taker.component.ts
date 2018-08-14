import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from '../services/quiz.service.client';
import { ActivatedRoute } from '@angular/router';
//import { SubmissionServiceClient } from '../services/submission.service.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  quiz = {};
  questions = [];

  constructor(private route: ActivatedRoute,
              private quizService: QuizServiceClient) { }
              //private submissionService: SubmissionServiceClient) {}

  //submitQuiz = quiz =>
  //  this.submissionService.submitQuiz(quiz)
  //    .then(submission => console.log(submission));

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.quizService.findQuizById(params['quizId'])
        .then(quiz => {
          this.quiz = quiz;
          this.questions = quiz.questions;
        })
    );
  }
}

