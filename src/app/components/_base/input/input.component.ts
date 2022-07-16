import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input('label') label: string = '';
  @Output('onInput') onInput = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  emitEvent(event: any) {
    this.onInput.emit(event);
  }

}
