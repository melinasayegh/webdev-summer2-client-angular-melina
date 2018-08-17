import { Component, OnInit } from '@angular/core';
import { QuizServiceClient } from '../services/quiz.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import { SubmissionServiceClient } from '../services/submission.service.client';
import { Quiz } from '../models/quiz.model.client';

@Component({
  selector: 'app-quiz-taker',
  templateUrl: './quiz-taker.component.html',
  styleUrls: ['./quiz-taker.component.css']
})
export class QuizTakerComponent implements OnInit {

  quiz = {
    questions: [],
    title: '',
    _id: ''
  };
  answers = [];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private quizService: QuizServiceClient,
              private submissionService: SubmissionServiceClient) {}

  submitQuiz = () => {
    this.quiz.questions.map(question => {
      if (question.questionType === 'ESSAY') {
        this.answers.push({
          question: question._id,
          essayAnswer: question.essayAnswer
        });
      } else if (question.questionType === 'FILL_BLANKS') {
        this.answers.push({
          question: question._id,
          blanksAnswers: JSON.stringify(question.blankAnswers)
        });
      } else if (question.questionType === 'TRUE_FALSE') {
        this.answers.push({
          question: question._id,
          trueFalseAnswer: question.trueFalseAnswer
        });
      } else if (question.questionType === 'MULTIPLE_CHOICE') {
        this.answers.push({
          question: question._id,
          choiceAnswer: question.choiceAnswer
        });
      }
    });
    const submission = {
      quiz: this.quiz,
      answers: this.answers,
      timestamp: new Date()
    };
    this.submissionService.submitQuiz(this.quiz._id, submission);
  }

  cancel() {
    this.router.navigate(['quiz']);
  }

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.quizService.findQuizById(params['quizId'])
        .then(quiz => {
          this.quiz = quiz;
          console.log(quiz);
          console.log(this.quiz.title);
        })
    );
  }
}

