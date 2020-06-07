import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonRxjs1Component } from './lesson-rxjs1.component';

describe('LessonRxjs1Component', () => {
  let component: LessonRxjs1Component;
  let fixture: ComponentFixture<LessonRxjs1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonRxjs1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonRxjs1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
