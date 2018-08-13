import { Component, OnInit } from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {ActivatedRoute} from '@angular/router';
import {CourseNavigatorServiceClient} from '../services/coursenavigator.service.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  quizId = '';
  questions = [];

  constructor(private route: ActivatedRoute,
              private quizService: QuizServiceClient) { }

  submitQuiz = quiz =>
    this.quizService.submitQuiz(quiz)
      .then(submission => console.log(submission));

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.quizService.findQuizById(params['quizId'])
        .then(quiz => this.questions = quiz.questions));
  }
}
