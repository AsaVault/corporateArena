/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BrainTeaserGetWithAnswerComponent } from './brain-teaser-get-with-answer.component';

describe('BrainTeaserGetWithAnswerComponent', () => {
  let component: BrainTeaserGetWithAnswerComponent;
  let fixture: ComponentFixture<BrainTeaserGetWithAnswerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrainTeaserGetWithAnswerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrainTeaserGetWithAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
