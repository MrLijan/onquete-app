import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
  @Input('label') label: string = '';
  @Output('onInput') onInput = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(event: any) {
    this.onInput.emit(event);
  }

}
