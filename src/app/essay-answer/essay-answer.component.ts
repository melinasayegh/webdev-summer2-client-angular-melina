import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-essay-answer',
  templateUrl: './essay-answer.component.html',
  styleUrls: ['./essay-answer.component.css']
})
export class EssayAnswerComponent implements OnInit {
  @Input() answer;
  constructor() { }
  ngOnInit() {
  }
}
