import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router.module';
import {LessonRxjs1Component} from './lesson-rxjs1/lesson-rxjs1.component';
import {LessonRxjs2Component} from './lesson-rxjs2/lesson-rxjs2.component';
import { LessonRxjs3Component } from './lesson-rxjs3/lesson-rxjs3.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonRxjs1Component,
    LessonRxjs2Component,
    LessonRxjs3Component
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
