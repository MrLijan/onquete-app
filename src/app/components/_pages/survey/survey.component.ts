import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.scss']
})
export class SurveyComponent implements OnInit {
  survey: any = null;
  surveyName: string = '';
  surveyDescription: string = '';
  surveyId: number = 0;
  surveyQuestions: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
    this.survey = this.getSurveyData();
    this.setSurveyData();
  }

  get texts() {
    return {
      authorTitle: "Author: ",
      idTitle: "Survey number: "
    }
  }

  setSurveyData() {
    this.survey = this.getSurveyData();
    console.log(this.survey);
    this.surveyName = this.survey.name;
    this.surveyDescription = this.survey.description;
    this.surveyId = this.survey.id;
    this.surveyQuestions = this.survey.questions;
  }

  /**
   * Some fake data for now
   * @returns string
   */
  getSurveyData() {
    return {
        "id": "146850",
        "name": "How are you feeling today?",
        "description": "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "author": "Liram Jan",
        "questions": [
          {
            "key": "652416",
            "type": "short",
            "label": "Who are some of your heroes?",
            "explanation": null,
            "options": []
          },
          {
            "key": "652416",
            "type": "multi",
            "label": "What is the best random act of kindness you've ever witnessed?",
            "explanation": "If you've been searching for a way to get random questions, you've landed on the correct webpage.",
            "options": [
              {
                "order": 1,
                "label": "Love"
              },
              {
                "order": 2,
                "label": "somewhere"
              }
            ]
          },
          {
            "key": "652416",
            "type": "select",
            "label": "What is the best random act of kindness you've ever witnessed?",
            "explanation": "If you've been searching for a way to get random questions, you've landed on the correct webpage.",
            "options": [
              {
                "order": 1,
                "label": "Love"
              },
              {
                "order": 2,
                "label": "somewhere"
              }
            ]
          },
          {
            "key": "652416",
            "type": "paragraph",
            "label": "What is the best random act of kindness you've ever witnessed?",
            "explanation": "If you've been searching for a way to get random questions, you've landed on the correct webpage.",
            "options": [
              {
                "order": 1,
                "label": "Love"
              },
              {
                "order": 2,
                "label": "somewhere"
              }
            ]
          }
        ]
      }
  }

}
