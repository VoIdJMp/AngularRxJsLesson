import { Component, OnInit } from '@angular/core';
import { from, interval, Observable } from 'rxjs';
import {filter, map, tap, take, takeLast, takeWhile, scan, reduce} from 'rxjs/operators';

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

    // Operators in RxJs

    const strm$ = interval(1000)
      .pipe(
        // tap(val => console.log('Tap: ', val)),
        // map( val => val * 2),
        // filter( val => val % 2 === 0),
        take(10),
        // takeLast(5),
        // takeWhile( val => val < 7),
        // scan((acc, v) => acc + v),
        reduce((acc, v) => acc + v)
      );

    strm$.subscribe( {
      next: v => console.log('Next: ', v),
      complete: () => console.log('Complate')
    });
  }

}
