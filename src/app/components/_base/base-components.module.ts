import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';


import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';
import { ControlComponent } from './control/control.component';
import { DropdownComponent } from './dropdown/dropdown.component';


const components = [
  CardComponent,
  InputComponent,
  TextareaComponent,
  ControlComponent,
  DropdownComponent,
]

@NgModule({
  imports: [
    CommonModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    FormsModule,
  ],
  declarations: components,
  exports: components,
})
export class BaseComponentsModule { }
