import { Component, Input, OnInit } from '@angular/core';
import { QuestionTypes } from '@src/app/enums/question-type.enum';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {
  @Input('kind') kind: string = '';
  @Input('title') title: string = 'This will be some question title';
  @Input('required') required: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  get questionKind(): QuestionTypes {
    const key = this.kind.toUpperCase();
    let questionKind = QuestionTypes.SHORT;

    if (key === 'SELECT') {
      questionKind = QuestionTypes.SELECT;
    }
    else if (key === 'MULTIPLE') {
      questionKind = QuestionTypes.MULTIPLE;
    }
    else if (key === 'SHORT') {
      questionKind = QuestionTypes.SHORT;
    }
    else if (key === 'PARAGRAPH') {
      questionKind = QuestionTypes.PARAGRAPH;
    }

    return questionKind;
  }

}
