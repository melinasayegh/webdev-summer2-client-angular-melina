import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrueFalseAnswerComponent } from './true-false-answer.component';

describe('TrueFalseAnswerComponent', () => {
  let component: TrueFalseAnswerComponent;
  let fixture: ComponentFixture<TrueFalseAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrueFalseAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrueFalseAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
