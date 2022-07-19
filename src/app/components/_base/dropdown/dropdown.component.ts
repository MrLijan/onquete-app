import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  @Input('label') label: string = '';
  @Input('placeholder') placeholder: string = '';
  @Input('options') options: any[] = [];
  @Output('onSelect') onSelect: EventEmitter<any> = new EventEmitter;

  selectedValue: any = null;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * On option selected emit the selected value
   * @return void
   */
  onOptionSelect(event: any): void {
    this.onSelect.emit(event.value);
  }

}
