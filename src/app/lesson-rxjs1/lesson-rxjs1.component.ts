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
    const obsv = new Observable(obs => {
      obs.next(1);
      obs.next(2);
      obs.next(3);
    });

    obsv.subscribe(val => console.log(val));
  }

}
