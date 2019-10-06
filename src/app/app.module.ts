import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SelectComponent } from './components/select/select.component';
import { OptionsComponent } from './components/options/options.component';
import { IconComponent } from './components/icon/icon.component';
import { RadioComponent } from './components/radio/radio.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    OptionsComponent,
    IconComponent,
    RadioComponent
  ],
  imports: [BrowserModule, BrowserAnimationsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
