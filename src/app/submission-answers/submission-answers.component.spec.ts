import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionAnswersComponent } from './submission-answers.component';

describe('SubmissionAnswersComponent', () => {
  let component: SubmissionAnswersComponent;
  let fixture: ComponentFixture<SubmissionAnswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmissionAnswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmissionAnswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
