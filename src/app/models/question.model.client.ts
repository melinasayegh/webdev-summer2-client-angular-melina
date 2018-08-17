export class Question {
  _id: String;
  title: String;
  points: Number;
  description: String;
  questionType: String;
  essay: String;
  blanks: [String];
  true: Boolean;
  choices: [{
    text: String,
    value: String
  }];
  essayAnswer: String;
  blanksAnswer: [String];
  trueFalseAnswer: Boolean;
  choiceAnswer: String;
}
