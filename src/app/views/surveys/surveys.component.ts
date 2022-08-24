import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent implements OnInit {
  //Table state
  columns: any[] = [
    { field: 'name', header: 'Name' },
    { field: 'author', header: 'Author' },
    { field: 'key', header: 'Key' },
  ]

  data: any[] = [
    {name: "Liram", author: 'liram', key: 'lalla'}
  ]

  constructor() { }

  ngOnInit(): void {

  }

  get texts() {
    return {
      header: 'Your Surveys'
    }
  }

}
