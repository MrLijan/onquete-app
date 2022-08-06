import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BaseComponentsModule } from '../../_base/base-components.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from "primeng/button";
import { TooltipModule } from 'primeng/tooltip';
import { WidgetComponentsModule } from '@components/_widgets/widgets.module';
import { SurveyComponent } from './survey.component';
import { TagModule } from "primeng/tag";


const routes: Routes = [
  {
    path: '',
    component: SurveyComponent
  }
]

@NgModule({
  declarations: [
    SurveyComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    CardModule,
    InputTextModule,
    InputTextareaModule,
    FormsModule,
    ButtonModule,
    TooltipModule,
    BaseComponentsModule,
    WidgetComponentsModule,
    TagModule
  ],
  exports: []
})
export class SurveyModule { }
