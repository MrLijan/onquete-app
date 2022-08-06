import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
