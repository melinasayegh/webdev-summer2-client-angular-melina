import {Question} from './question.model.client';

export class Answer {
  question: { type: Question };
  trueFalseAnswer: Boolean;
  multipleChoiceAnswer: Number;
  fillBlanksAnswers: String;
  essayAnswer: String;
}
