import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-question-config',
  templateUrl: './question-config.component.html',
  styleUrls: ['./question-config.component.scss']
})
export class QuestionConfigComponent implements OnInit {
  @Output('onUpdate') onUpdate: EventEmitter<any> = new EventEmitter;

  optionsList: string[] = [];
  questionLabel: string = '';


  constructor() { }

  ngOnInit(): void {
  }

  get texts() {
    return {
      questionLabel: "e.g. How do you feel today?",
      optionsLabel: "e.g. Monday, Sunday, Thursday",
      demoQuestionTitle: "This is how it\'ll looks like..."
    }
  }

  /**
   * Setting question options as an array
   * @param event
   * @return void
   */
  setQuestionOptions(event: any): void {
    const list: string = event.target.value;
    this.optionsList = list.trim().split(",");
  }

  /**
   * Setting question label
   * @param event
   * @return void
   */
  setQuestionLabel(event: any): void {
    this.questionLabel = event;
  }

  /**
   * On config update event handler
   * @return void
   */
  onConfigUpdate(): void {
    const config = new Object({
      label: this.questionLabel,
      options: this.optionsList
    });

    this.onUpdate.emit(config)
  }
}
