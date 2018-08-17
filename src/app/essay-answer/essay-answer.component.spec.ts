import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssayAnswerComponent } from './essay-answer.component';

describe('EssayAnswerComponent', () => {
  let component: EssayAnswerComponent;
  let fixture: ComponentFixture<EssayAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssayAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssayAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
