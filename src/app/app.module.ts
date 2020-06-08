import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app.router.module';
import {LessonRxjs1Component} from './lesson-rxjs1/lesson-rxjs1.component';
import {LessonRxjs2Component} from './lesson-rxjs2/lesson-rxjs2.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonRxjs1Component,
    LessonRxjs2Component
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
