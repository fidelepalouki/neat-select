import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  forwardRef
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

@Component({
  selector: 'neat-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true
    }
  ],
  animations: [
    trigger('slideInOut', [
      state(
        'visible',
        style({
          transform: 'translateX(0)',
          visibility: 'visible'
        })
      ),
      state(
        'hidden',
        style({
          transform: 'translateX(100%)',
          visibility: 'hidden'
        })
      ),
      transition('hidden => visible', animate('0.25s ease-out')),
      transition('visible => hidden', animate('0.25s ease-in'))
    ])
  ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {
  @Input() label = '';
  @Input('value') _value: string;
  @Input() required = false;
  @Input() options: string[];

  @ViewChild('select', { static: false }) select: ElementRef<HTMLSelectElement>;

  opened = false;

  onChange: any = () => {};
  onTouched: any = () => {};

  constructor() {}

  ngOnInit() {}

  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched(val);
  }

  writeValue(value: any) {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched();
  }

  setDisabledState?(isDisabled: boolean): void {
    console.log('setDisabledState', isDisabled);
    // TODO: set select as disabled with renderer
  }

  change(event: any) {
    this.writeValue(event.target.value);
  }

  onSelected(option: string) {
    this.writeValue(option);
    this.opened = false;
    this.select.nativeElement.focus();
  }

  showOptions(event: any) {
    event.preventDefault();
    this.opened = true;
  }
}
