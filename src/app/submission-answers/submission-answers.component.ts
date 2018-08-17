import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';
import {SubmissionServiceClient} from '../services/submission.service.client';

@Component({
  selector: 'app-submission-answers',
  templateUrl: './submission-answers.component.html',
  styleUrls: ['./submission-answers.component.css']
})
export class SubmissionAnswersComponent implements OnInit {

  quizId = '';
  quiz = {
    title: ''
  };
  submissionId = '';
  submission = {
    student: {
      username: ''
    },
    answers: [],
    timestamp: new Date(),
  };

  constructor(private route: ActivatedRoute,
              private quizService: QuizServiceClient,
              private submissionService: SubmissionServiceClient) {
    this.route.params.subscribe(params => {
      this.quizId = params['submissionId'];
      this.submissionId = params['quizId'];
    })
  }

  fixDate = (date) => {
    return new Date(date).toLocaleString();
  }

  ngOnInit() {
    this.quizService.findQuizById(this.quizId)
      .then(quiz => this.quiz = quiz);
    this.submissionService.findSubmissionById(this.submissionId)
      .then(submission => this.submission = submission);
  }
}
