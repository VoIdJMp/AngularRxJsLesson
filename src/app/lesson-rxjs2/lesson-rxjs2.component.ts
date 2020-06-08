import { Component, OnInit } from '@angular/core';
import { from, interval, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-lesson-rxjs2',
  templateUrl: './lesson-rxjs2.component.html',
  styleUrls: ['./lesson-rxjs2.component.css']
})

export class LessonRxjs2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*const ost$ = from([1, 2, 3])
      .pipe(
        filter(val => val % 2 === 0),
        map(val => val * 2)
      );
    ost$.subscribe( val => {
      console.log(val);
    }); */

    /*const ost$ = new Observable( obs => {
      obs.next(1);
      obs.next(2);
      obs.next(3);
    });

    ost$.subscribe( val => {
      console.log(val);
    }); */

    /*const ost$ = interval(1000);
    const sub = ost$.subscribe( val => console.log(val));
    setTimeout( () => { sub.unsubscribe(); }, 5000); */
  }

}
