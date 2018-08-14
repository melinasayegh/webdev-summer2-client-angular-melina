import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SubmissionServiceClient} from '../services/submission.service.client';

@Component({
  selector: 'app-quiz-submissions',
  templateUrl: './quiz-submissions.component.html',
  styleUrls: ['./quiz-submissions.component.css']
})
export class QuizSubmissionsComponent implements OnInit {

  quizId = '';
  submissions = [];

  constructor(private route: ActivatedRoute,
              private submissionService: SubmissionServiceClient) {
    this.route.params.subscribe(params =>
      this.loadSubmissions(params['quizId']));
  }

  loadSubmissions(quizId) {
    this.quizId = quizId;
    this.submissionService.loadSubmissions(this.quizId)
      .then(submissions => this.submissions = submissions);
  }

  ngOnInit() {
  }
}
