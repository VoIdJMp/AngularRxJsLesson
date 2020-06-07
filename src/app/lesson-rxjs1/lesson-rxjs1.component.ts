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
    const sbj = new ReplaySubject();
    sbj.next(1);
    sbj.next(2);
    sbj.next(3);
    sbj.next(4);
    sbj.subscribe(val => console.log(val));
  }

}
