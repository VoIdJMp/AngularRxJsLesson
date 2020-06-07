import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, interval, Observable, of, ReplaySubject, Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-lesson-rxjs1',
  templateUrl: './lesson-rxjs1.component.html',
  styleUrls: ['./lesson-rxjs1.component.css']
})

export class LessonRxjs1Component implements OnInit {
  dataArray: number[] = [12, 23, 56];

  constructor() { }

  ngOnInit(): void {
    // Observable
    /*const obsv$ = new Observable(obs => {
      obs.next(1);
      setTimeout(() => obs.next(2), 1000);
      obs.next(3);
      obs.error(1);
      obs.next(4);
    });

    obsv$.subscribe(val => console.log(val)); */

    const obsv1$ = new Observable(obs => {
      obs.next(1);
      obs.next(2);
      setTimeout( () => obs.error('error'), 1500);
      obs.next(3);
    });

    obsv1$.subscribe(
      val => console.log(val),
      (err) => console.log(err),
      () => console.log('ok')
    );
  }

}
