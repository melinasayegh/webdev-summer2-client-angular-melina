import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fill-blanks-answer',
  templateUrl: './fill-blanks-answer.component.html',
  styleUrls: ['./fill-blanks-answer.component.css']
})
export class FillBlanksAnswerComponent implements OnInit {

  @Input() answer;

  constructor() { }

  ngOnInit() {
  }

}
