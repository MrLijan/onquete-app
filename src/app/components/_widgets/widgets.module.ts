import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { QuestionConfigComponent } from "./question-config/question-config.component";
import { BaseComponentsModule } from '@components/_base/base-components.module';
import { QuestionComponent } from './question/question.component';


const components = [
  QuestionConfigComponent,
  QuestionComponent
];

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    InputTextareaModule,
    BaseComponentsModule
  ],
  declarations: components,
  exports: components,
})
export class WidgetComponentsModule { }
