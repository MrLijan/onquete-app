import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NewSurveyComponent } from './new-survey.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BaseComponentsModule } from '../../_base/base-components.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from "primeng/button";
import { TooltipModule } from 'primeng/tooltip';

const routes: Routes = [
  {
    path: '',
    component: NewSurveyComponent
  }
]

@NgModule({
  declarations: [
    NewSurveyComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    BaseComponentsModule,
    FormsModule,
    ButtonModule,
    TooltipModule
  ],
  exports: []
})
export class NewSurveyModule { }
