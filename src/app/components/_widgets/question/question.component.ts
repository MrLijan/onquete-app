import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input('options') options: string[] = [];
  @Output('onChange') onChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  get questionKind() {
    return this.kind;
  }

  get questionTypes(): typeof QuestionTypes {
    return QuestionTypes;
  }

  onChangeHandler(event: any) {
    console.log(event);
    this.onChange.emit(event);
  }
}
