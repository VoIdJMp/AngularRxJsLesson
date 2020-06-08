import { RouterModule, Routes } from '@angular/router';
import { LessonRxjs1Component } from './lesson-rxjs1/lesson-rxjs1.component';
import { LessonRxjs2Component } from './lesson-rxjs2/lesson-rxjs2.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: 'lessonRxJs1', component: LessonRxjs1Component },
  { path: 'lessonRxJs2', component: LessonRxjs2Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRouterModule {}
