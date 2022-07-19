import { Component, OnInit } from '@angular/core';
import { Survey } from '@src/app/types/survey.type';

@Component({
  selector: 'app-new-survey',
  templateUrl: './new-survey.component.html',
  styleUrls: ['./new-survey.component.scss']
})
export class NewSurveyComponent implements OnInit {
  surveyName: string = this.texts.nonameSurvey;
  surveyData: Survey = {
    name: '',
    author: '',
    slug: '',
    description: '',
    questions: [
      { id: 1, title: "Give me some question", type: 1 },
      // { id: 2, title: "Give me some question", type: 1 },
      // { id: 3, title: "Give me some question", type: 1 },
      // { id: 4, title: "Give me some question", type: 1 },
    ],
  };

  constructor() { }

  ngOnInit(): void {
  }

  get texts() {
    return {
      nonameSurvey: "NONAME Survey",
      infoSectionTitle: "Let\'s add some information about your survey",
      infoNameField: "Give it a Name",
      infoDescField: "Tell a something about it...",
      contentTitle: "Add questions here",
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

  log(event: any) {
    console.log(event);
  }

}
