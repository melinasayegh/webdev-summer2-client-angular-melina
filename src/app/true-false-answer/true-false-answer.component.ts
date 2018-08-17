import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-true-false-answer',
  templateUrl: './true-false-answer.component.html',
  styleUrls: ['./true-false-answer.component.css']
})
export class TrueFalseAnswerComponent implements OnInit {

  @Input() answer;

  constructor() { }

  ngOnInit() {
  }

}
