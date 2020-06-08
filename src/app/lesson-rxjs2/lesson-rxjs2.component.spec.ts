import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonRxjs2Component } from './lesson-rxjs2.component';

describe('LessonRxjs2Component', () => {
  let component: LessonRxjs2Component;
  let fixture: ComponentFixture<LessonRxjs2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonRxjs2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonRxjs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
