import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'neat-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  @Input() value: string;
  @Input() options: string[] = [];

  name = Date.now().toString();

  @Output() onSelected = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onChange(option: string) {
    this.value = option;
    this.onSelected.emit(this.value);
  }
}
