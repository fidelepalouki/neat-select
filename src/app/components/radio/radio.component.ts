import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  forwardRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'neat-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {
  @Input('checked') _checked = false;
  @Input() required = false;
  @Input() label = '';
  @Input() name = '';
  @Output() valueChange = new EventEmitter<boolean>();

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {}

  ngOnInit() {}

  get checked() {
    return this._checked;
  }
  set checked(val) {
    this._checked = val;
    this.onChange(val);
    this.onTouched(val);
  }

  writeValue(value: any) {
    this.checked = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched();
  }

  setDisabledState?(isDisabled: boolean): void {
    console.log('setDisabledState', isDisabled);
  }

  change(event: any) {
    this.writeValue(event.target.checked);
    this.valueChange.emit(this.checked);
  }
}
