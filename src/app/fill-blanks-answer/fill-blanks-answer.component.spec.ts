import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillBlanksAnswerComponent } from './fill-blanks-answer.component';

describe('FillBlanksAnswerComponent', () => {
  let component: FillBlanksAnswerComponent;
  let fixture: ComponentFixture<FillBlanksAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillBlanksAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillBlanksAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
