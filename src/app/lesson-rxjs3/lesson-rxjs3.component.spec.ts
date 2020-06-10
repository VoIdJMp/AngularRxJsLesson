import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonRxjs3Component } from './lesson-rxjs3.component';

describe('LessonRxjs3Component', () => {
  let component: LessonRxjs3Component;
  let fixture: ComponentFixture<LessonRxjs3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonRxjs3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonRxjs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
