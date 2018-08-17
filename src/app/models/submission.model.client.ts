import { User } from './user.model.client';
import { Quiz } from './quiz.model.client';
import { Question } from './question.model.client';
import {Answer} from './answer.model.client';

export class Submission {
  quiz: {type: Quiz};
  student: {type: User};
  answers: [{
    question: Question,
    essayAnswer: String;
    blanksAnswer: [String];
    trueFalseAnswer: Boolean;
    choiceAnswer: String;
  }];
  timestamp: Date;
}
