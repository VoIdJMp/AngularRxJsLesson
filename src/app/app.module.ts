import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LessonRxjs1Component } from './lesson-rxjs1/lesson-rxjs1.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonRxjs1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
