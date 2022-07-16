import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.scss']
})
export class NewSurveyComponent implements OnInit {
  surveyName: string = this.texts.nonameSurvey;

  constructor() { }

  ngOnInit(): void {
  }

  get texts() {
    return {
      nonameSurvey: "NONAME Survey",
      surveyInfo: "Fill up the survey info",
      surveyNameField: "Give it a Name",
      surveyDescField: "Tell a something about it...",
      tooltips: {
        saveChanges: "Save changes",
        discardChanges: "Discard Changes"
      }
    }
  }

  /**
   * Set the survey name
   * @param event
   */
  setSurveyName(event: any) {
    this.surveyName = event.target.value;

    if (event.target.value === '') {
      this.surveyName = this.texts.nonameSurvey;
    }
  }

}
