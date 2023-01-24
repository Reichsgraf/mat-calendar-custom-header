import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
