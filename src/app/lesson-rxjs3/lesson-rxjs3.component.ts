import { Component, OnInit } from '@angular/core';
import {concat, interval, of} from 'rxjs';
import {take, map, combineAll} from 'rxjs/operators';


@Component({
  selector: 'app-lesson-rxjs3',
  templateUrl: './lesson-rxjs3.component.html',
  styleUrls: ['./lesson-rxjs3.component.css']
})
export class LessonRxjs3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // Operators in RxJs Part 2

   /* const source$ = interval(1000).pipe(take(2));
    // map each emitted value from source to interval observable that takes 5 values
    const example$ = source$.pipe(
      map(val =>
        interval(1000).pipe(
          map(i => `Result (${val}): ${i}`),
          take(5)
        )
      )
    );
    example$.subscribe(val => console.log(val));
    // example$
    //  .pipe(combineAll())
      /*
      output:
      ["Result (0): 0", "Result (1): 0"]
      ["Result (0): 1", "Result (1): 0"]
      ["Result (0): 1", "Result (1): 1"]
      ["Result (0): 2", "Result (1): 1"]
      ["Result (0): 2", "Result (1): 2"]
      ["Result (0): 3", "Result (1): 2"]
      ["Result (0): 3", "Result (1): 3"]
      ["Result (0): 4", "Result (1): 3"]
      ["Result (0): 4", "Result (1): 4"]
    */
    //  .subscribe(console.log); */

    // concat(interval(1000), of('This', 'Never', 'Runs'))
      // log: 1,2,3,4.....
    //  .subscribe(console.log);
  }

}
