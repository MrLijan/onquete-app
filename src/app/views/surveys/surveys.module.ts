import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BaseComponentsModule } from '../../components/_base/base-components.module';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from "primeng/button";
import { TooltipModule } from 'primeng/tooltip';
import { SurveysComponent } from './surveys.component';
import { TableModule } from 'primeng/table';


const routes: Routes = [
  {
    path: '',
    component: SurveysComponent
  }
]

@NgModule({
  declarations: [
    SurveysComponent
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
    TableModule,
    CardModule,
  ],
  exports: []
})
export class SurveysModule { }
