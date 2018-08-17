import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-multiple-choice-answer',
  templateUrl: './multiple-choice-answer.component.html',
  styleUrls: ['./multiple-choice-answer.component.css']
})
export class MultipleChoiceAnswerComponent implements OnInit {

  @Input() answer;

  constructor() { }

  ngOnInit() {
  }

}
