import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'surveys',
    loadChildren: () => import ('./views/surveys/surveys.module').then(m => m.SurveysModule),
  },
  {
    path: "create",
    loadChildren: () => import("./components/_pages/new-survey/new-survey.module").then(m => m.NewSurveyModule),
  },
  {
    path: "",
    loadChildren: () => import("./components/_pages/survey/survey.module").then(m => m.SurveyModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
