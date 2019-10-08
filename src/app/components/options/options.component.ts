import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'neat-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {
  @Input() value: string;
  @Input() options: string[] = [];
  name = Date.now().toString();

  @Output() onSelected = new EventEmitter<string>();

  onChange(option: string) {
    this.value = option;
    this.onSelected.emit(this.value);
  }
}
