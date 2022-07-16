import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';


@NgModule({
  declarations: [
    CardComponent,
    InputComponent,
    TextareaComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    InputTextareaModule
  ],
  exports: [
    CardComponent,
    InputComponent,
    TextareaComponent
  ]
})
export class BaseComponentsModule { }
