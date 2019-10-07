import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'neat-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  formGroup: FormGroup = this.fb.group({
    option1: [''],
    option2: [''],
    option3: ['']
  });

  constructor(private fb: FormBuilder) {}

  optionList = [
    'HTML CSS and Javascript',
    'Learn the basics',
    'They are as important as knowing a framework',
    'Angular reactive forms',
    'They are really powerfull',
    'Got mad love for animations',
    'You shoud checkout the Rust language',
    'Rust is cool but quite challenging at first',
    'It can be compiled to WebAssembly and run on the web',
    'WebGL is great for graphics on the web',
    'Combine Rust, Wasm and WebGL',
    'And you will build great and performant apps',
    'Directly avaible in a browser',
    'The Cloud humm..',
    'It opens a whole category of computing',
    'Serverless is king',
    'Especially for iterating fast',
    'Machine Learning',
    'Another intersting topic',
    'Can make the difference'
  ];
}
